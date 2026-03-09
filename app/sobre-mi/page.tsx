import type { Metadata } from "next";
import SobreMiPage from "./SobreMiPage";

export const metadata: Metadata = {
  title: "About Dimi Nails | Press On Nails Artist",
  description:
    "Meet Caro Pérez, the artist behind Dimi Nails. Handmade custom press on nails designed with care and creativity.",
  keywords: [
    "press on nails",
    "custom press on nails",
    "handmade press on nails",
    "press on nails artist",
    "Dimi Nails"
  ],
};

export default function Page() {
  return <SobreMiPage />;
}