import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | PrüfAI",
  description: "Request a demo or discuss digital exam workflows with PrüfAI.",
};

export default function KontaktPage() {
  return <ContactPageContent />;
}
