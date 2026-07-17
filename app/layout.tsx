import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemePicker } from "./components/ThemePicker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Condensed industrial display face — the vernacular of highway / freight
// signage. Carries the page's personality; used uppercase for headlines.
const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-stone-900">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('mm-theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}})();",
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemePicker />
      </body>
      <GoogleAnalytics gaId="G-PET7WE735H" />
    </html>
  );
}
