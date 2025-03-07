import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Sections/home/footer/Footer";
import Head from "next/head";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "landing page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
