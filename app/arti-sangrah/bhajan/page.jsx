import CategoryListing from "@/components/pages/CategoryListing";

export const metadata = {
  title: "भजन | Bhajan — Shri Sidhbali Baba Dham",
  description: "Collection of devotional bhajans at Shri Sidhbali Baba Dham.",
};

export default function BhajanPage() {
  return <CategoryListing category="bhajan" />;
}
