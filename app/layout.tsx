import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Serif_Display, Jost } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: {
    default: "Interno Studio – Interior Design Experts",
    template: "%s | Interno Studio",
  },
  description:
    "Interno Studio specializes in creating elegant, modern, and functional interior designs for residential and commercial spaces. Our team delivers bespoke solutions that reflect your style and maximize comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${jost.variable} antialiased`}
      >
        <Header />
        <main className="w-full max-w-480 mx-auto bg-white overflow-hidden">
          <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10" />
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
