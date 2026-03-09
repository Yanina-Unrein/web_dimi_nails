import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dimi Nails — Custom Press On Nails",
  description: "Handcrafted custom press on nails by Caro Pérez. Based in England.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
