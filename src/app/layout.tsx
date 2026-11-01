import type { Metadata } from "next";
import { Libre_Bodoni, Cinzel, Outfit } from "next/font/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/common/SiteChrome";
import "./globals.css";

const libreBodoni = Libre_Bodoni({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans-ui",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shinewoods.vercel.app"),
  title: "ShineWoods — Talent Discovery & Casting Opportunities",
  description:
    "ShineWoods is a Chennai casting house with 30+ years in South Indian and pan-Indian cinema — led by Manojkrishna, connecting talent with film, OTT, television and brand work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBodoni.variable} ${cinzel.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-paper text-ink selection:bg-ink selection:text-paper">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <SiteChrome />
      </body>
    </html>
  );
}
