import type { Metadata } from "next";
import { playfairDisplay, cormorantGaramond, inter, jetbrainsMono } from "./fonts";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar/AnnouncementBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiger The Royal Signatures — Luxury Pakistani Fashion",
  description: "Discover exquisite Pakistani luxury fashion. From bridal couture to everyday elegance, Tiger The Royal Signatures brings you royal craftsmanship woven with modern sophistication.",
  keywords: "luxury fashion, Pakistani fashion, bridal couture, designer clothing, unstitched fabric, luxury pret, Tiger The Royal Signatures",
  openGraph: {
    title: "Tiger The Royal Signatures — Luxury Pakistani Fashion",
    description: "Discover exquisite Pakistani luxury fashion. From bridal couture to everyday elegance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <AnnouncementBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
