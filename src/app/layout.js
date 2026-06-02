"use client";

import "./globals.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation speed
      easing: "ease-out", // feel free to tweak
      once: false, // animate every time it appears
      offset: 0,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <title>CareGaply</title>
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
