"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { FadeUp, LangFade } from "@/components/Motion";
import PageShell from "@/components/PageShell";
import PostCard from "@/components/PostCard";
import { categories, recentPosts, getPostsByCategory } from "@/data/posts";

const tileIcons = { aarti: "🪔", chalisa: "📿", bhajan: "🎶" };

export default function ArtiSangrahContent() {
  const { t, bi } = useLang();

  return (
    <PageShell>
      <FadeUp>
        <h1 className="text-2xl font-bold sm:text-4xl">{t("artiSangrah.title")}</h1>
        <LangFade>
          <p className="mt-2 text-stone-500">{t("artiSangrah.desc")}</p>
        </LangFade>
      </FadeUp>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {categories.map((c, i) => (
          <FadeUp key={c.slug} delay={i * 0.1} className="h-full">
            <motion.div whileHover={{ y: -6, scale: 1.02 }} className="h-full">
              <Link
                href={`/arti-sangrah/${c.slug}`}
                className="flex h-full flex-col items-center gap-3 rounded-xl bg-white p-8 text-center shadow-card transition-shadow hover:shadow-lift"
              >
                <span className="text-5xl">{tileIcons[c.slug]}</span>
                <span className="text-xl font-bold text-maroon">{bi(c.label)}</span>
                <span className="rounded-full bg-saffron/10 px-3 py-1 text-xs font-semibold text-saffron">
                  {getPostsByCategory(c.slug).length} {t("common.posts")}
                </span>
              </Link>
            </motion.div>
          </FadeUp>
        ))}
      </div>

      <section className="mt-12">
        <FadeUp>
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">{t("artiSangrah.recent")}</h2>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2">
          {recentPosts(4).map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
