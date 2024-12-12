import type { Metadata } from "next";
import { Xanh_Mono } from "next/font/google";
import "./globals.css";


const xanhMono = Xanh_Mono({
  weight: "400",
  variable: "--font-xanh-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Perfect Snake AI",
  description: "An optimized Snake AI using the A* algorithm for intelligent pathfinding and flawless gameplay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${xanhMono.variable} antialiased bg-[#191a1a] text-[#e8e8e6]`}>
        {children}
      </body>
    </html>
  );
}
