import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ecommerce-platform",
  description: "App de muestra en next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="grow p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
