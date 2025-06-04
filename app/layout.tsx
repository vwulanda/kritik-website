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
  title: "kritik.ai",
  description: "AI-powered critiques for artists",
  other: {
    "google-site-verification": "oDFrGAqO1tHWsCZWGUZFBpAYC_X62e88fMbQlHC44yM",
    // You can include debug-check if you want to test again:
    // "debug-check": "vivi-confirmed"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}