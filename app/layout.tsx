import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/src/lib/utils";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
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
  title: "Codelynx - Blog",
  description: "Apprendre de nouvelles choses avec Codelynx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn( 
          `${geistSans.variable} ${geistMono.variable} antialiased h-full max-w-xl m-auto px-4`
        )}
      >
        <div className="flex min-h-full flex-col"> 
          <Header />
        <div className="flex-1">{children}
          <Footer />
        </div>
        </div>

      </body>
    </html>
  );
}
