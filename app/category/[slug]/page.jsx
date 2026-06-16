import CategoryListing from "@/components/pages/CategoryListing";
import { categories } from "@/data/posts";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const cat = categories.find((c) => c.slug === params.slug);
  const label = cat ? `${cat.label.hi} | ${cat.label.en}` : params.slug;
  return {
    title: `${label} — Shri Sidhbali Baba Dham`,
    description: `Archive of ${cat ? cat.label.en : params.slug} posts at Shri Sidhbali Baba Dham.`,
  };
}

export default function CategoryPage({ params }) {
  return <CategoryListing category={params.slug} />;
}
