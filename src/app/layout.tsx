import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/whatsapp"

// Google Fonts setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: 'Sigma Sand | Premium M-Sand & River Sand in Kerala',
  description: 'Your trusted source for premium, government-approved construction sand in Kerala. We offer M-Sand, P-Sand, and River Sand with guaranteed timely delivery.',
  openGraph: {
    title: 'Sigma Sand | Premium M-Sand & River Sand in Kerala',
    description: 'Your trusted source for premium, government-approved construction sand in Kerala. We offer M-Sand, P-Sand, and River Sand with guaranteed timely delivery.',
    url: 'https://www.sigmasand.in/',
    siteName: 'Sigma Sand',
    type: 'website',
    // You can add an image URL here for social media previews
    // images: ['https://www.sigmasand.in/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sigma Sand | Premium M-Sand & River Sand in Kerala',
    description: 'Your trusted source for premium, government-approved construction sand in Kerala. We offer M-Sand, P-Sand, and River Sand with guaranteed timely delivery.',
    // You can add an image URL here for Twitter previews
    // images: ['https://www.sigmasand.in/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <Whatsapp />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
