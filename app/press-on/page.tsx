import type { Metadata } from "next";
import PressOnPage from "./PressOnPage";

export const metadata: Metadata = {
  title: "Press On Nails | Dimi Nails",
  description:
    "Luxury handmade press on nails by Dimi Nails. Custom designs, reusable nails and easy application.",
};

export default function Page() {
  return <PressOnPage />;
}