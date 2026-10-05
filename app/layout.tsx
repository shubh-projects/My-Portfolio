import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubh Aggarwal | Full-Stack Developer",
  description: "Software Developer & Automation Specialist building custom software, dynamic Webflow sites, and powerful AI automations.",
  openGraph: {
    title: "Shubh Aggarwal | Full-Stack Developer",
    description: "Software Developer & Automation Specialist building custom software, dynamic Webflow sites, and powerful AI automations.",
    siteName: "Shubh.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Aggarwal | Full-Stack Developer",
    description: "Software Developer & Automation Specialist.",
  }
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