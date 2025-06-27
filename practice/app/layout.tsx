import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import { CounterStoreProvider } from "@/providers/counter-store-provider";
import { Toaster } from "@/components/ui/sonner";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "A rough zoom clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}
      >
        {/* <CounterStoreProvider> */}
          {children}
          <Toaster />
        {/* </CounterStoreProvider> */}
      </body>
    </html>
  );
}
