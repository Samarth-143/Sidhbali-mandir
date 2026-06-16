"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function PostCard({ post, index = 0 }) {
  const { t, bi } = useLang();
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col overflow-hidden rounded-xl bg-white shadow-card transition-shadow hover:shadow-lift"
    >
      <div className="relative">
        <img src={post.image} alt={bi(post.title)} loading="lazy" className="h-44 w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-white">
          {post.date}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-bold leading-snug">{bi(post.title)}</h3>
        <p className="flex-1 text-sm text-stone-500">{bi(post.excerpt)}</p>
        <Link href={`/post/${post.slug}`} className="text-sm font-semibold text-saffron hover:text-saffron-dark">
          {t("common.learnMore")} →
        </Link>
      </div>
    </motion.article>
  );
}
