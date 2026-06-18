// Generate the free lead-magnet PDF: a clean A4 application checklist that
// matches what we promise in the newsletter signup. Reads source-of-truth
// data from src/data/checklist.js and writes to public/checklist.pdf.
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Inline checklist data (mirror of src/data/checklist.js).
// Kept in sync intentionally — PDF generation is build-time only.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const checklistGroups = [
  {
    title: "1. Research & Planning",
    items: [
      "Decide on the field of study (engineering, business, sciences, etc.)",
      "Research 5-10 German universities offering your program",
      "Check application deadlines for winter (May-July) or summer (Nov-Jan) intake",
      "Note tuition fees + semester contribution per university",
      "Check if APS certificate is required for your country",
      "Make a shortlist of 4-6 universities to apply to",
    ],
  },
  {
    title: "2. Language Test",
    items: [
      "Decide: IELTS, TOEFL or TestDaF based on your program",
      "Book test date 2 months in advance",
      "Buy practice materials (Cambridge IELTS, official TOEFL)",
      "Take 2-3 mock tests at home",
      "Sit the test (aim for IELTS 6.5+ overall)",
      "Receive official score report (allow 2 weeks)",
    ],
  },
  {
    title: "3. Document Preparation",
    items: [
      "Collect all academic transcripts (Bachelor's, FSc/12th, Matric/10th)",
      "Get country-specific attestation (HEC Pakistan, APS India/Vietnam)",
      "Get MOFA + German Embassy attestation if required",
      "Get certified English translations (if originals are in another language)",
      "Update CV in German style (1-2 pages, photo, structured)",
      "Get 1-2 letters of recommendation",
      "Write a strong motivation letter (1-2 pages)",
      "Scan all documents at 300 DPI in color (PDF format)",
    ],
  },
  {
    title: "4. University Applications",
    items: [
      "Register on uni-assist (if applying through them)",
      "Create direct application accounts for universities",
      "Pay application fee per university (around €75)",
      "Upload all required documents",
      "Submit application 6-8 weeks before deadline",
      "Follow up on application status weekly",
      "Receive admission letter (Zulassungsbescheid)",
    ],
  },
  {
    title: "5. Finance & Insurance",
    items: [
      "Open a blocked account (Expatrio, Fintiba, or Coracle)",
      "Transfer required amount: about EUR 11,904 for one year",
      "Receive blocked account confirmation letter",
      "Get pre-arrival health insurance (DR-WALTER, Mawista)",
      "Calculate first 3 months extra budget (1500-2000 EUR)",
      "Inform bank of foreign exchange transfer purpose",
    ],
  },
  {
    title: "6. Visa Application",
    items: [
      "Check appointment availability at German embassy",
      "Book visa appointment 6-8 weeks in advance",
      "Pay visa fee (around EUR 75)",
      "Prepare visa application form (VIDEX)",
      "Prepare 2 recent biometric photos (3.5 x 4.5 cm)",
      "Compile all visa documents (admission, blocked account, insurance, finances)",
      "Practice common visa interview questions",
      "Attend visa interview at the embassy",
      "Receive visa within 4-12 weeks",
    ],
  },
  {
    title: "7. Pre-Departure",
    items: [
      "Book one-way flight to Germany",
      "Apply for university dorm (Studentenwerk)",
      "Get international driving permit (if needed)",
      "Inform your bank of travel and get a Wise account",
      "Get an unlocked phone for German SIM",
      "Pack winter clothes (Germany is cold October-March)",
      "Get prescription medicines for the first 3 months",
      "Make 5 copies of every important document",
    ],
  },
  {
    title: "8. First Weeks in Germany",
    items: [
      "Register at the Burgeramt within 14 days (Anmeldung)",
      "Open a German bank account (N26 or Deutsche Bank)",
      "Get a German SIM card (Aldi, O2 Prepaid)",
      "Activate health insurance (public: TK, DAK)",
      "Get a tax ID (Steuer-ID) - arrives by mail",
      "Apply for residence permit (Aufenthaltstitel) within 90 days",
      "Buy semester ticket for public transport",
      "Attend university orientation week",
    ],
  },
];

const BRAND = {
  bg: "#FFFFFF",
  ink: "#0F172A",
  brand: "#F59E0B",
  brandDark: "#92400E",
  emerald: "#059669",
  rose: "#DC2626",
  slate500: "#64748B",
  slate200: "#E2E8F0",
};

// Footer drawn at the bottom of every page.
function drawFooter(doc, pageNum, totalPages) {
  const y = doc.page.height - 40;
  doc.save();
  doc.lineWidth(0.5).strokeColor(BRAND.slate200);
  doc.moveTo(50, y).lineTo(doc.page.width - 50, y).stroke();
  doc.font("Helvetica").fontSize(8).fillColor(BRAND.slate500);
  doc.text(
    "Updated June 2026 - studyingermanyguide.com - Free for international students",
    50,
    y + 8,
    { width: doc.page.width - 200, align: "left" }
  );
  doc.text(`Page ${pageNum} / ${totalPages}`, doc.page.width - 150, y + 8, {
    width: 100,
    align: "right",
  });
  doc.restore();
}

function build() {
  const outPath = path.join(ROOT, "public", "checklist.pdf");
  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
    bufferPages: true,
    info: {
      Title: "Germany Application Checklist (2026)",
      Author: "Study in Germany Guide",
      Subject: "Step-by-step checklist for international students applying to German universities",
      Keywords: "Germany, study abroad, application, checklist, 2026",
    },
  });

  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Cover page
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  doc.rect(0, 0, doc.page.width, 240).fill(BRAND.ink);

  // German flag accent (3 vertical stripes)
  const flagX = 50;
  const flagY = 60;
  doc.fillColor("#000000").rect(flagX, flagY, 20, 80).fill();
  doc.fillColor("#DD0000").rect(flagX + 20, flagY, 20, 80).fill();
  doc.fillColor("#FFCE00").rect(flagX + 40, flagY, 20, 80).fill();

  // Brand on cover
  doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(11);
  doc.text("STUDY IN GERMANY", 130, 75, { characterSpacing: 3 });
  doc.font("Helvetica").fontSize(9).fillColor("#94A3B8");
  doc.text("G U I D E", 130, 92, { characterSpacing: 6 });

  // Title
  doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(28);
  doc.text("Germany Application", 50, 165);
  doc.text("Checklist", 50, 200);

  // Subtitle below banner
  doc.fillColor(BRAND.ink).font("Helvetica").fontSize(13);
  doc.text(
    "The full step-by-step path for international students - from research to your first weeks in Germany.",
    50,
    270,
    { width: 495, align: "left" }
  );

  // 8 stages summary box
  doc.roundedRect(50, 320, 495, 200, 8).fillAndStroke("#FFF8E7", BRAND.brand);
  doc.fillColor(BRAND.brandDark).font("Helvetica-Bold").fontSize(11);
  doc.text("WHAT IS INSIDE", 70, 340, { characterSpacing: 2 });
  doc.fillColor(BRAND.ink).font("Helvetica").fontSize(11);

  let yOff = 365;
  checklistGroups.forEach((g) => {
    doc.font("Helvetica-Bold").fillColor(BRAND.ink).text(g.title, 70, yOff, {
      continued: true,
    });
    doc
      .font("Helvetica")
      .fillColor(BRAND.slate500)
      .text(`  -  ${g.items.length} steps`, { characterSpacing: 0 });
    yOff += 18;
  });

  // Note at bottom
  doc.fillColor(BRAND.slate500).font("Helvetica-Oblique").fontSize(9);
  doc.text(
    "Note: figures (fees, blocked-account amount, deadlines) update over time. Always confirm the current numbers on the official German embassy and university websites before applying.",
    50,
    560,
    { width: 495, align: "left" }
  );

  doc.fillColor(BRAND.ink).font("Helvetica-Bold").fontSize(10);
  doc.text(
    "studyingermanyguide.com",
    50,
    doc.page.height - 80,
    { align: "center", width: doc.page.width - 100 }
  );

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Pages for each stage
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  checklistGroups.forEach((group) => {
    doc.addPage();

    // Header strip
    doc.rect(0, 0, doc.page.width, 60).fill(BRAND.ink);
    doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(16);
    doc.text(group.title, 50, 22);
    doc.fillColor(BRAND.brand).font("Helvetica").fontSize(9);
    doc.text(
      `${group.items.length} steps`,
      doc.page.width - 100,
      28,
      { width: 80, align: "right", characterSpacing: 2 }
    );

    // Checklist body
    let y = 110;
    group.items.forEach((item, i) => {
      // Checkbox
      doc.lineWidth(1).strokeColor(BRAND.slate500);
      doc.rect(50, y - 2, 14, 14).stroke();

      // Number
      doc.fillColor(BRAND.brand).font("Helvetica-Bold").fontSize(11);
      doc.text(String(i + 1).padStart(2, "0"), 75, y, { width: 30 });

      // Text
      doc.fillColor(BRAND.ink).font("Helvetica").fontSize(11);
      doc.text(item, 105, y, { width: doc.page.width - 155 });

      const lineHeight = doc.heightOfString(item, { width: doc.page.width - 155 });
      y += Math.max(28, lineHeight + 14);
    });

    // Tip box
    doc.roundedRect(50, doc.page.height - 130, doc.page.width - 100, 60, 6)
      .fillAndStroke("#FFF8E7", BRAND.brand);
    doc.fillColor(BRAND.brandDark).font("Helvetica-Bold").fontSize(9);
    doc.text("TIP", 60, doc.page.height - 120, { characterSpacing: 2 });
    doc.fillColor(BRAND.ink).font("Helvetica").fontSize(10);
    doc.text(
      "Use the interactive saveable version at studyingermanyguide.com/checklist - your progress stays in your browser, no signup needed.",
      60,
      doc.page.height - 105,
      { width: doc.page.width - 120 }
    );
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Final "next steps" page
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  doc.addPage();
  doc.rect(0, 0, doc.page.width, 60).fill(BRAND.ink);
  doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(16);
  doc.text("You finished the checklist - welcome to Germany.", 50, 22);

  doc.fillColor(BRAND.ink).font("Helvetica-Bold").fontSize(14);
  doc.text("Next reads on studyingermanyguide.com", 50, 100);

  const links = [
    { label: "Universities directory", path: "/universities" },
    { label: "Cost calculator (any currency)", path: "/calculator" },
    { label: "Visa walkthrough", path: "/visa" },
    { label: "Blocked-account comparison", path: "/blocked-account" },
    { label: "Health-insurance comparison", path: "/insurance" },
    { label: "Country-specific guides (Pakistan, India, ...)", path: "/start" },
    { label: "Blog & honest articles", path: "/blog" },
  ];

  doc.font("Helvetica").fontSize(11).fillColor(BRAND.ink);
  let ny = 130;
  links.forEach((l) => {
    doc.fillColor(BRAND.brand).text("-->  ", 60, ny, { continued: true });
    doc.fillColor(BRAND.ink).font("Helvetica-Bold").text(l.label, { continued: true });
    doc
      .font("Helvetica")
      .fillColor(BRAND.slate500)
      .text(`   studyingermanyguide.com${l.path}`);
    ny += 22;
  });

  // Contact box
  doc.roundedRect(50, ny + 20, doc.page.width - 100, 110, 8)
    .fillAndStroke("#F0FDF4", BRAND.emerald);
  doc.fillColor(BRAND.emerald).font("Helvetica-Bold").fontSize(11);
  doc.text("STUCK SOMEWHERE? JUST ASK.", 65, ny + 35, { characterSpacing: 2 });
  doc.fillColor(BRAND.ink).font("Helvetica").fontSize(10);
  doc.text(
    "I read every message personally. WhatsApp +49 170 6963809, or email studyingermanyguide@gmail.com. Mention which step you are on and what is unclear - I will reply within 24 hours.",
    65,
    ny + 55,
    { width: doc.page.width - 130 }
  );
  doc.fillColor(BRAND.slate500).font("Helvetica-Oblique").fontSize(9);
  doc.text(
    "- Abban Nadeem, founder. Pakistani student in Ilmenau.",
    65,
    ny + 110
  );

  // Compute page count BEFORE flushing
  const range = doc.bufferedPageRange();
  const total = range.count;
  for (let i = 0; i < total; i++) {
    doc.switchToPage(range.start + i);
    drawFooter(doc, i + 1, total);
  }

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => {
      const stats = fs.statSync(outPath);
      console.log(
        `OK  ${path.relative(ROOT, outPath)}  ${(stats.size / 1024).toFixed(1)} KB  ${total} pages`
      );
      resolve();
    });
    stream.on("error", reject);
  });
}

build().catch((e) => {
  console.error("ERR ", e);
  process.exit(1);
});
