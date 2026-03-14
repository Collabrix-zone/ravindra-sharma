import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Ravindra Sharma — Senior Consultant Surgeon",
    template: "%s | Dr. Ravindra Sharma",
  },
  description:
    "Dr. Ravindra Sharma is a Senior Consultant Surgeon with over 20 years of expertise in laparoscopic, oncological, and general surgery. Book a consultation today.",
  keywords: [
    "Dr. Ravindra Sharma",
    "surgeon",
    "laparoscopic surgery",
    "cancer surgery",
    "hernia repair",
    "general surgery",
    "New Delhi",
  ],
  authors: [{ name: "Dr. Ravindra Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dr. Ravindra Sharma",
    title: "Dr. Ravindra Sharma — Senior Consultant Surgeon",
    description:
      "Expert surgical care with compassion. Specialising in laparoscopic, oncological, and general surgery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter bg-[#080C18] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
