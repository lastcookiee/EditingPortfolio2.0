import type { Metadata } from "next";
import { Poppins, Bowlby_One_SC } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  display: "swap",
});

const bowlbyOneSC = Bowlby_One_SC({
  variable: "--font-bowlby",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://editing-portfolio2-0.vercel.app"),
  title: "Kunal Singh (lastcookiee) — Motion Designer & Visual Rhythm Artist",
  description:
    "Portfolio of Kunal Singh (lastcookiee) — 4+ years crafting high-impact motion graphics, kinetic typography systems, visual rhythm, and Gen-AI visual stories. Currently at NxtWave.",
  keywords: [
    "Kunal Singh",
    "lastcookiee",
    "Motion Designer",
    "Motion Graphics",
    "Kinetic Typography",
    "Visual Rhythm",
    "After Effects",
    "Adobe Illustrator",
    "Premiere Pro",
    "NxtWave",
  ],
  authors: [{ name: "Kunal Singh (lastcookiee)" }],
  openGraph: {
    title: "Kunal Singh (lastcookiee) — Motion Designer & Visual Rhythm Artist",
    description:
      "4+ years crafting high-impact motion graphics, kinetic typography systems, and visual stories.",
    url: "https://editing-portfolio2-0.vercel.app",
    siteName: "Kunal Singh Portfolio",
    images: [
      {
        url: "/images/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Kunal Singh (lastcookiee)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Singh (lastcookiee) — Motion Designer & Visual Rhythm Artist",
    description:
      "Motion graphics designer specializing in kinetic typography systems, visual rhythm, and Gen-AI storytelling.",
    images: ["/images/me.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${bowlbyOneSC.variable} font-sans antialiased bg-black text-white selection:bg-yellow selection:text-black`}
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
