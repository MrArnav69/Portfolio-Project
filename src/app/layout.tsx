import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnav Gupta | Independent Researcher",
  description: "Portfolio of Arnav Gupta, Independent Researcher and AI/ML Engineer.",
  icons: {
    icon: [
      { url: '/favicon.ico?v=1', sizes: 'any' },
      { url: '/favicon.png?v=1', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=1',
    apple: '/favicon.png?v=1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${inter.variable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
