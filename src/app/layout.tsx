import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Bitheos — Full-stack Developer";
const DESCRIPTION =
  "Bryan García (Bitheos) — full-stack developer. Building web products that feel fast: from pixel-perfect interfaces to resilient APIs and the cloud they run on.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | Bitheos",
  },
  description: DESCRIPTION,
  applicationName: "Bitheos",
  authors: [{ name: "Bryan García" }],
  keywords: [
    "Bitheos",
    "portfolio",
    "desarrollador web",
    "fullstack",
    "Next.js",
    "React",
    "TypeScript",
    "cloud",
  ],
  openGraph: {
    type: "website",
    siteName: "Bitheos",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}