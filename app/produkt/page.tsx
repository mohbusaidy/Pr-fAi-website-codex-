import type { Metadata } from "next";
import { ProductPageContent } from "@/components/product/ProductPageContent";

export const metadata: Metadata = {
  title: "Product | PrüfAI",
  description:
    "Automated language test assessment for German exams from A1 to C2 and digital Leben in Deutschland workflows.",
};

export default function ProductPage() {
  return <ProductPageContent />;
}
