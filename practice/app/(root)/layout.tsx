import StreamVideoProvider from "@/providers/StreamClientProviders";
import type { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "A rough zoom clone",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
      
    </main>
  )
}
export default RootLayout;