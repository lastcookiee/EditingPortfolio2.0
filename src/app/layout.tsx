import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LASTCOOKIEE — Kunal Singh | Video Editor & Motion Designer",
  description:
    "I don't edit videos. I design experiences. 5+ years crafting cinematic edits, beat-synced montages, and visual storytelling.",
  keywords: [
    "video editor",
    "motion designer",
    "after effects",
    "premiere pro",
    "gaming edits",
    "cinematic edits",
    "lastcookiee",
    "kunal singh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
