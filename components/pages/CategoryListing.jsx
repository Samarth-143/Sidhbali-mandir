"use client";

import { useLang } from "@/lib/i18n";
import { FadeUp } from "@/components/Motion";
import PageShell from "@/components/PageShell";
import PostCard from "@/components/PostCard";
import { categories, getPostsByCategory } from "@/data/posts";

export default function CategoryListing({ category }) {
  const { t, bi } = useLang();
  const cat = categories.find((c) => c.slug === category);
  const posts = getPostsByCategory(category);

  return (
    <PageShell>
      <FadeUp>
        <h1 className="text-2xl font-bold sm:text-4xl">{cat ? bi(cat.label) : category}</h1>
        <p className="mt-2 text-sm text-stone-400">
          {posts.length} {t("common.posts")}
        </p>
      </FadeUp>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </PageShell>
  );
}
