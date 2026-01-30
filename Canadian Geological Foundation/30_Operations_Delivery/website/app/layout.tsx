import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Montserrat_Alternates, Manrope, Work_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canadian Geological Foundation",
  description: "Fueling Geo-science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${montserratAlternates.variable} ${manrope.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
