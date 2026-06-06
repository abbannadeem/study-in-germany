import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CountryPicker from "@/components/CountryPicker";
import CountryBanner from "@/components/CountryBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://study-in-germany-sable.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Study in Germany — Universities, Cities, Jobs & Visa Guide",
    template: "%s | Study in Germany",
  },
  description:
    "A complete guide to studying in Germany: tuition-free public universities, student cities, part-time jobs, careers and the full student visa process. Built for international students from Pakistan, India, Bangladesh, UAE and more.",
  keywords: [
    "study in Germany",
    "German universities",
    "free education Germany",
    "student visa Germany",
    "blocked account",
    "study abroad",
    "DAAD",
    "Pakistan Germany visa",
    "India Germany student",
    "uni-assist",
    "Germany scholarships",
  ],
  authors: [{ name: "Study in Germany Guide" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Study in Germany Guide",
    title: "Study in Germany — Free Guide for International Students",
    description:
      "183 public universities, cost calculator (PKR/INR/BDT), scholarships, visa process and country-specific guides — all free.",
    images: [
      {
        url: "/logo.svg",
        width: 1080,
        height: 1080,
        alt: "Study in Germany Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Germany — Free Guide",
    description:
      "183 unis, scholarships, visa guide, cost calculator. For international students worldwide.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "65YKMy75srqWXgIHzaN9Scym-fbYJy6Z8DvytzY9RV4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <CountryBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
        <FloatingWhatsApp />
        <CountryPicker />
      </body>
    </html>
  );
}
