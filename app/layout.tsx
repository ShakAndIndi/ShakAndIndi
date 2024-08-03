import type { Metadata } from "next";
import { Inter, Neuton } from "next/font/google";
import "./globals.css";

const inter = Neuton({
  subsets:["latin"],
  weight: "700"
});

export const metadata: Metadata = {
  title: "Shak & Indi",
  description: "A list of our links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
