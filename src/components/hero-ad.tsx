// components/AdSense.tsx
"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function AdSense() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense error", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2320541206058096"
      data-ad-slot="6661981734"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
