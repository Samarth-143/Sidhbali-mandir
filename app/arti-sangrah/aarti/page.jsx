import CategoryListing from "@/components/pages/CategoryListing";

export const metadata = {
  title: "आरती | Aarti — Shri Sidhbali Baba Dham",
  description: "Collection of devotional aartis at Shri Sidhbali Baba Dham.",
};

export default function AartiPage() {
  return <CategoryListing category="aarti" />;
}
