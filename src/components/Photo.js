"use client";

import { useState } from "react";
import Banner from "./Banner";

// Generic photo with graceful fallback: shows the image at `src`, and if it is
// missing or fails to load, renders the coloured gradient Banner instead so the
// layout never breaks. While loading, a grayscale skeleton sits behind the
// <img> so cards do not collapse to zero height.
export default function Photo({ src, name, alt, emoji, label, className = "", imgClassName = "" }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return <Banner name={name} emoji={emoji} label={label} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-slate-200"
        />
      )}
      <img
        src={src}
        alt={alt || name}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        className={`h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${imgClassName}`}
      />
    </div>
  );
}
