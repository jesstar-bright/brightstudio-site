import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Bright Studio — Vibe-coded software, shipped fast",
  description:
    "Solo studio building AI-native prototypes, MVPs, and tools for founders, indie hackers, and humans who need to make a thing.",
  metadataBase: new URL("https://brightstudio.build"),
  openGraph: {
    title: "Bright Studio",
    description: "Vibe-coded software, shipped fast.",
    url: "https://brightstudio.build",
    siteName: "Bright Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
