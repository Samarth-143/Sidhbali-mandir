"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { FadeUp } from "./Motion";
import { recentPosts, categories, getPostsByCategory } from "@/data/posts";
import { attractions, fbEmbed } from "@/data/site";

export default function Sidebar() {
  const { t, bi } = useLang();

  return (
    <aside className="flex flex-col gap-6">
      <FadeUp className="widget-card">
        <h3 className="mb-3 text-lg font-bold">{t("common.recentPosts")}</h3>
        <ul className="space-y-2">
          {recentPosts(5).map((p) => (
            <li key={p.slug}>
              <Link href={`/post/${p.slug}`} className="text-sm text-stone-600 transition-colors hover:text-saffron">
                • {bi(p.title)}
              </Link>
            </li>
          ))}
        </ul>
      </FadeUp>

      <FadeUp className="widget-card">
        <h3 className="mb-3 text-lg font-bold">{t("common.categories")}</h3>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c.slug} className="flex items-center justify-between">
              <Link href={`/category/${c.slug}`} className="text-sm text-stone-600 transition-colors hover:text-saffron">
                {bi(c.label)}
              </Link>
              <span className="rounded-full bg-saffron/10 px-2 py-0.5 text-xs font-semibold text-saffron">
                {getPostsByCategory(c.slug).length}
              </span>
            </li>
          ))}
        </ul>
      </FadeUp>

      <FadeUp className="widget-card">
        <h3 className="mb-3 text-lg font-bold">{t("common.followFb")}</h3>
        <iframe
          src={fbEmbed}
          title="Facebook page"
          className="h-[300px] w-full rounded-lg border-0"
          loading="lazy"
          allow="encrypted-media"
        />
      </FadeUp>

      <FadeUp className="widget-card">
        <h3 className="mb-3 text-lg font-bold">{t("common.nearby")}</h3>
        <ul className="space-y-4">
          {attractions.map((a, i) => (
            <li key={i} className="flex gap-3 rounded-lg p-2 transition-all duration-200 hover:bg-saffron/5">
              <span className="text-2xl">{a.emoji}</span>
              <div>
                <p className="font-semibold text-maroon">
                  {bi(a.name)} <span className="text-xs font-normal text-stone-400">· {a.distance}</span>
                </p>
                <p className="text-xs text-stone-500">{bi(a.desc)}</p>
              </div>
            </li>
          ))}
        </ul>
      </FadeUp>
    </aside>
  );
}
