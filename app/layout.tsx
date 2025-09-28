import type { Metadata } from "next";
import { DM_Serif_Display, Jost } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
