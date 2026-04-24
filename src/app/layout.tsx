import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
  metadataBase: new URL("https://msnrcore.vercel.app"),
  title: {
    default: "MSNRCore — Market Structure & Smart Money Trading Education",
    template: "%s | MSNRCore",
  },
  description:
    "Learn SNR, MSNR, SMC, ICT, liquidity, order blocks, FVGs, and price action concepts through clean explanations and chart-focused analysis.",
  openGraph: {
    title: "MSNRCore — Market Structure & Smart Money Trading Education",
    description:
      "A premium educational trading platform for market structure, liquidity, smart money concepts, and real chart analysis.",
    siteName: "MSNRCore",
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
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
