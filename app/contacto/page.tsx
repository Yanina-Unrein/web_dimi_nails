import type { Metadata } from "next";
import ContactoPage from "./ContactoPage";

export const metadata: Metadata = {
  title: "Dimi Nails | Contact",
  description:
    "Order custom press on nails handmade by Caro Pérez.",
};

export default function Page() {
  return <ContactoPage />;
}