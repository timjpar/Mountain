import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Mountain Movers LLC | Mobile Home Moving in TN, NC, VA, GA, KY & SC",
    template: "%s | Mountain Movers LLC",
  },
  description:
    "Family-owned mobile home moving and setup based in Newport, Tennessee. Licensed, bonded, and insured across six states. We move, grade, and set single and double-wide homes through any terrain.",
  keywords: [
    "mobile home moving",
    "manufactured home transport",
    "mobile home setup",
    "Newport Tennessee mobile home movers",
    "double wide moving",
  ],
  openGraph: {
    title: "Mountain Movers LLC",
    description:
      "Family-owned, licensed, bonded & insured mobile home moving and setup across Tennessee, North Carolina, Virginia, Georgia, Kentucky, and South Carolina.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-stone-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
