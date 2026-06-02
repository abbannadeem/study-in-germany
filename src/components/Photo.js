"use client";

import { useState } from "react";
import Banner from "./Banner";

// Generic photo with graceful fallback: shows the image at `src`, and if it is
// missing or fails to load, renders the coloured gradient Banner instead so the
// layout never breaks.
export default function Photo({ src, name, emoji, label, className = "" }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return <Banner name={name} emoji={emoji} label={label} className={className} />;
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setError(true)}
      loading="lazy"
      className={`object-cover ${className}`}
    />
  );
}
