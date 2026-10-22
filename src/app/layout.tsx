import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Body & Clean Interface
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Editorial Display & High-Impact Headlines
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Tech Numbers, Tickers & Digital Micro-Badges
const spaceGrotesk = Space_Grotesk({
  variable: "--font-tech",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hammet LACE — Lagos AI Career Experience",
  description:
    "Nigeria's premier AI career pathway and experiential event. Learn AI in plain language, work on real projects, and launch your global career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#07020d] text-slate-100 selection:bg-[#E0FF4D] selection:text-[#0c0516]`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}