import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suitmedia",
  description: "Suitmedia Intern Test 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Navbar /> */}
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
