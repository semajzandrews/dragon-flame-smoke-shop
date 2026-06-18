import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import RevealInit from "./components/RevealInit";

export const metadata: Metadata = {
  title: "Dragon Flame Smoke Shop · East Orange",
  description:
    "The after-dark counter on Harrison Street. Glass, hookah, vapes, wraps and the late-night staples. Open nine to eleven, every night, in East Orange.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=zodiak@700,800,1,2&f[]=general-sans@400,500,600,700&f[]=space-mono@400,700&display=swap"
        />
      </head>
      <body>
        <SmoothScroll />
        <RevealInit />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
