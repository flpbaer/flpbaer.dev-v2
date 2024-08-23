import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { Montserrat } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
