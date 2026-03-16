import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimi-nails.vercel.app"),
  icons: {
    icon: "/images/logo/logo_dimi_nails.svg",
  },

  openGraph: {
    title: "Dimi Nails | Luxury Press On Nails",
    description:
      "Handmade luxury press on nails by Dimi Nails. Custom designs, reusable and easy to apply.",
    url: "https://dimi-nails.vercel.app",
    siteName: "Dimi Nails",
    images: [
      {
        url: "/images/caro_chibi.webp",
        width: 1200,
        height: 630,
        alt: "Dimi Nails Press On Nails",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dimi Nails | Luxury Press On Nails",
    description:
      "Handmade luxury press on nails. Custom designs and reusable sets.",
    images: ["/images/caro_chibi.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LangProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: "Dimi Nails",
      description: "Luxury handmade press on nails by Caro Pérez.",
      url: "https://dimi-nails.vercel.app",
      sameAs: [
        "https://www.instagram.com/dimi_nails_by_caroperez/"
      ],
    }),
  }}
/>
