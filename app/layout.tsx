import type { Metadata } from "next";
import { Inter_Tight, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fontSans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "BullBearMagnet | Trend Confirmation System",
  description:
    "Premium static marketing website for a crypto-native market direction and confirmation system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
