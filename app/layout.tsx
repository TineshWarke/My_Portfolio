import "./globals.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

const sofadiOne = localFont({
  src: "../public/fonts/Sofadi_One/SofadiOne-Regular.ttf",
  variable: "--font-sofadi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tinesh Warake Portfolio",
  description: "Created by Tinesh Warake",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="synthwave"
      className={`${sofadiOne.variable} scrollbar-none`}
    >
      <body>{children}</body>
    </html>
  );
}
