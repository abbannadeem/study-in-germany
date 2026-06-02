// Downloads photos from Wikipedia for cities (iconic landmark of each city)
// and industries (a representative site per state).
//
//   node scripts/fetch-images.mjs            # both cities + industries
//   node scripts/fetch-images.mjs cities     # only cities
//   node scripts/fetch-images.mjs industries # only industries
//
// Images are saved to /public/cities/<slug>.jpg and /public/industries/<slug>.jpg
// so the app works offline with no broken/hotlinked images. Already-downloaded
// files are skipped, so you can safely re-run to fill gaps after rate limits.

import { writeFile, mkdir, readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// A real browser-like User-Agent is required or upload.wikimedia.org returns 403.
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
  Accept: "image/avif,image/webp,image/png,image/*,*/*",
  Referer: "https://en.wikipedia.org/",
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// The iconic landmark / main spot of each city (English Wikipedia article).
// These give a recognisable photo instead of a generic street view.
const cityLandmarks = {
  munich: "Marienplatz",
  berlin: "Brandenburg Gate",
  hamburg: "Elbphilharmonie",
  frankfurt: "Römer",
  cologne: "Cologne Cathedral",
  stuttgart: "New Palace (Stuttgart)",
  dusseldorf: "Rheinturm",
  dortmund: "Westfalenstadion",
  essen: "Zollverein Coal Mine Industrial Complex",
  bremen: "Bremen City Hall",
  hanover: "New Town Hall (Hanover)",
  nuremberg: "Nuremberg Castle",
  duisburg: "Landschaftspark Duisburg-Nord",
  bochum: "German Mining Museum",
  munster: "Prinzipalmarkt",
  mannheim: "Mannheim Palace",
  karlsruhe: "Karlsruhe Palace",
  augsburg: "Augsburg Town Hall",
  bonn: "Bonn Minster",
  wiesbaden: "Kurhaus of Wiesbaden",
  mainz: "Mainz Cathedral",
  braunschweig: "Brunswick Cathedral",
  kiel: "Laboe Naval Memorial",
  kassel: "Bergpark Wilhelmshöhe",
  magdeburg: "Magdeburg Cathedral",
  erfurt: "Krämerbrücke",
  rostock: "Warnemünde",
  leipzig: "Monument to the Battle of the Nations",
  dresden: "Dresden Frauenkirche",
  aachen: "Aachen Cathedral",
  heidelberg: "Heidelberg Castle",
  freiburg: "Freiburg Minster",
  tubingen: "Tübingen",
  gottingen: "Gänseliesel",
  wurzburg: "Würzburg Residence",
  regensburg: "Stone Bridge (Regensburg)",
  darmstadt: "Mathildenhöhe",
};

// fetch with retry/backoff on 429 (rate limit) and transient network errors
// (e.g. ECONNRESET when Wikimedia throttles the IP at the connection level).
async function fetchRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: HEADERS });
      if (res.status === 429) {
        const wait = 2000 * (i + 1);
        console.log(`   …rate-limited, waiting ${wait / 1000}s`);
        await sleep(wait);
        continue;
      }
      return res;
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(1200 * (i + 1)); // 1.2s, 2.4s — fail fast, the outer loop retries
    }
  }
  throw new Error("gave up after retries");
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function imageUrl(title) {
  const api =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages" +
    "&piprop=thumbnail&pithumbsize=1200&redirects=1&titles=" +
    encodeURIComponent(title);
  const res = await fetchRetry(api);
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  const page = Object.values(data?.query?.pages || {})[0];
  return page?.thumbnail?.source || null;
}

async function download(url, dest) {
  const res = await fetchRetry(url);
  if (!res.ok) throw new Error(`IMG ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

// University Wikipedia articles usually show a LOGO as their lead image. The
// Wikidata "image" property (P18) instead gives a real campus/building photo,
// so for universities we resolve the title -> Wikidata QID -> P18 filename ->
// a Commons thumbnail URL.
async function wikidataImageUrl(title) {
  const propsApi =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageprops" +
    "&ppprop=wikibase_item&redirects=1&titles=" +
    encodeURIComponent(title);
  const pr = await fetchRetry(propsApi);
  if (!pr.ok) throw new Error(`QID ${pr.status}`);
  const pd = await pr.json();
  const qid = Object.values(pd?.query?.pages || {})[0]?.pageprops?.wikibase_item;
  if (!qid) return { url: null, label: "no wikidata item" };

  // Fetch ONLY the P18 claim (small) — the full EntityData JSON for big
  // universities is several MB and the download often resets mid-stream.
  const wdApi =
    `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&property=P18&entity=${qid}`;
  const wd = await fetchRetry(wdApi);
  if (!wd.ok) throw new Error(`WD ${wd.status}`);
  const wj = await wd.json();
  const file = wj?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
  if (!file) return { url: null, label: `no P18 (${qid})` };

  // Resolve the Commons file to a real upload.wikimedia.org thumbnail URL via
  // the imageinfo API (Special:FilePath gets connection-reset under load).
  const infoApi =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo" +
    "&iiprop=url&iiurlwidth=1200&titles=" +
    encodeURIComponent("File:" + file);
  const inf = await fetchRetry(infoApi);
  if (!inf.ok) throw new Error(`COMMONS ${inf.status}`);
  const ij = await inf.json();
  const ii = Object.values(ij?.query?.pages || {})[0]?.imageinfo?.[0];
  const url = ii?.thumburl || ii?.url || null;
  return { url, label: file };
}

// Pull { slug, wiki } pairs straight from a data file so this stays in sync.
async function loadList(file) {
  const src = await readFile(path.join(root, "src", "data", file), "utf8");
  const out = [];
  const re = /slug:\s*"([^"]+)"[\s\S]*?wiki:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src)) !== null) out.push({ slug: m[1], wiki: m[2] });
  return out;
}

// Same as loadList but also captures `city` (only universities.js has it).
async function loadUniversities() {
  const src = await readFile(path.join(root, "src", "data", "universities.js"), "utf8");
  const out = [];
  const re = /slug:\s*"([^"]+)"[\s\S]*?city:\s*"([^"]+)"[\s\S]*?wiki:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push({ slug: m[1], city: m[2], wiki: m[3] });
  }
  return out;
}

// Fallback image source: Loremflickr returns a real keyword-matched Flickr
// photo with no rate limits. We seed it by slug so the same uni always shows
// the same picture.
// Strip parens / umlauts / accents so Loremflickr's keyword search matches.
// "Schwäbisch Gmünd" → "Schwabisch Gmund", "Frankfurt (Oder)" → "Frankfurt".
function cleanCity(city) {
  return (city || "germany")
    .replace(/\([^)]*\)/g, "")
    .replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss")
    .replace(/Ä/g, "A").replace(/Ö/g, "O").replace(/Ü/g, "U")
    .replace(/[^A-Za-z0-9 ,-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loremflickrUrl(item) {
  // Use just the first word of the cleaned city — multi-word keywords
  // ("Sankt Augustin", "Brandenburg an der Havel") often return no match.
  const city = cleanCity(item.city).split(/\s+/)[0];
  const kw = encodeURIComponent(`${city || "germany"},germany,university,campus`);
  return {
    url: `https://loremflickr.com/1200/800/${kw}?lock=${encodeURIComponent(item.slug)}`,
    label: `Flickr: ${city}`,
  };
}

// Ultimate fallback: Picsum always serves a random photo seeded by slug.
function picsumUrl(item) {
  return {
    url: `https://picsum.photos/seed/${encodeURIComponent(item.slug)}/1200/800`,
    label: "Picsum (random)",
  };
}

// resolveUrl(item) -> { url, label }: how to find the image for a given item.
async function run(label, items, outDir, resolveUrl) {
  await mkdir(outDir, { recursive: true });
  console.log(`\n=== ${label} (${items.length}) ===`);
  let ok = 0;
  let skip = 0;
  let fail = 0;
  for (const it of items) {
    const dest = path.join(outDir, `${it.slug}.jpg`);
    if (await exists(dest)) {
      console.log(`· ${it.slug} (skip)`);
      skip++;
      continue;
    }
    try {
      const { url, label: src } = await resolveUrl(it);
      if (!url) {
        console.log(`✗ ${it.slug}: ${src || "no image found"}`);
        fail++;
        continue;
      }
      const bytes = await download(url, dest);
      console.log(`✓ ${it.slug}  ←  ${src}  (${Math.round(bytes / 1024)} KB)`);
      ok++;
    } catch (err) {
      console.log(`✗ ${it.slug}: ${err.message}`);
      fail++;
    }
    await sleep(900); // be polite to the API
  }
  console.log(`${label}: ${ok} downloaded, ${skip} skipped, ${fail} failed.`);
  return fail;
}

// Resolve a Wikipedia title to a pageimage URL (used for cities & industries).
async function pageImage(term) {
  return { url: await imageUrl(term), label: term };
}

async function main() {
  const which = process.argv[2] || "all";
  let fails = 0;

  if (which === "all" || which === "cities") {
    const cities = await loadList("cities.js");
    fails += await run("Cities", cities, path.join(root, "public", "cities"), (c) =>
      pageImage(cityLandmarks[c.slug] || c.wiki)
    );
  }

  if (which === "all" || which === "universities") {
    const unis = await loadUniversities();
    fails += await run(
      "Universities",
      unis,
      path.join(root, "public", "uni"),
      (u) => picsumUrl(u) // unique random photo per slug; no throttle, no duplicates
    );
  }

  if (which === "all" || which === "industries") {
    const inds = await loadList("industries.js");
    fails += await run("Industries", inds, path.join(root, "public", "industries"), (i) =>
      pageImage(i.wiki)
    );
  }

  console.log(`\nAll done. ${fails === 0 ? "✅ no failures" : `⚠️ ${fails} failed — re-run to retry`}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
