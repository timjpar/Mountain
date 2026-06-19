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
  title: "Mountain Movers Mobile Homes | Licensed Mobile Home Transport in NC & TN",
  description:
    "Mountain Movers Mobile Homes safely transports mobile and manufactured homes across North Carolina and Tennessee. Licensed, bonded, and insured. Call for a free quote.",
  keywords: [
    "mobile home moving",
    "manufactured home transport",
    "mobile home movers North Carolina",
    "mobile home movers Tennessee",
    "licensed mobile home transport",
  ],
  openGraph: {
    title: "Mountain Movers Mobile Homes",
    description:
      "Licensed, bonded, and insured mobile home transport across North Carolina and Tennessee.",
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
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        {children}
      </body>
    </html>
  );
}
