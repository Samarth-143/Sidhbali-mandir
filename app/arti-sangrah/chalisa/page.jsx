import CategoryListing from "@/components/pages/CategoryListing";

export const metadata = {
  title: "चालीसा | Chalisa — Shri Sidhbali Baba Dham",
  description: "Collection of chalisas including Shri Hanuman Chalisa at Shri Sidhbali Baba Dham.",
};

export default function ChalisaPage() {
  return <CategoryListing category="chalisa" />;
}
