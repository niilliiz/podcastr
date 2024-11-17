import type { Metadata } from "next";
import "./globals.css";
import ConvexClerkClientProvider from "@/providers/ConvexClerkClientProvider";
import AudioProvider from "@/providers/AudioProviders";
import { Manrope } from "next/font/google";
import React from "react";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr App",
  description: "Generate Your Podcast using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkClientProvider>
      <html lang="en">
        <AudioProvider>
          <body className={manrope.className}>{children}</body>
        </AudioProvider>
      </html>
    </ConvexClerkClientProvider>
  );
}
