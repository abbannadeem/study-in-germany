import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Study in Germany — Universities, Cities, Jobs & Visa Guide",
    template: "%s | Study in Germany",
  },
  description:
    "A complete guide to studying in Germany: tuition-free public universities, student cities, part-time jobs, careers and the full student visa process.",
  keywords: [
    "study in Germany",
    "German universities",
    "free education Germany",
    "student visa Germany",
    "blocked account",
    "study abroad",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
