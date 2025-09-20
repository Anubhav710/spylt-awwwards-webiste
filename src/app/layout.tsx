import type { Metadata } from "next";
import "./globals.css";
import { Antonio } from "next/font/google";
import localFont from "next/font/local";
import LenisProvider from "@/components/SmoothScroll";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
});

const proximaNova = localFont({
  src: "/fonts/ProximaNova-Regular.otf",
  variable: "--font-proxima-nova",
});

export const metadata: Metadata = {
  title: "SPYLT Milk",
  description: "High-protein caffeinated milk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${antonio.variable} ${proximaNova.variable} font-antonio`}
      >
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
