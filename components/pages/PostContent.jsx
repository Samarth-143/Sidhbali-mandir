"use client";

import { useLang } from "@/lib/i18n";
import { FadeUp, LangFade } from "@/components/Motion";
import PageShell from "@/components/PageShell";
import SocialIcons from "@/components/SocialIcons";
import { getPost } from "@/data/posts";

export default function PostContent({ slug }) {
  const { t, bi } = useLang();
  const post = getPost(slug);

  if (!post) {
    return (
      <PageShell>
        <h1 className="text-2xl font-bold">404</h1>
        <p className="mt-2 text-stone-500">Post not found.</p>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article>
        <FadeUp>
          <LangFade>
            <h1 className="text-2xl font-bold sm:text-4xl">{bi(post.title)}</h1>
          </LangFade>
          <p className="mt-2 text-sm text-stone-400">
            {t("common.publishedOn")}: {post.date}
          </p>
        </FadeUp>

        <FadeUp className="mt-6">
          <img src={post.image} alt={bi(post.title)} className="w-full rounded-xl shadow-card" />
        </FadeUp>

        <div lang="hi" className="mt-8 space-y-6 font-deva">
          {post.content.map((stanza, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p className="whitespace-pre-line rounded-xl bg-white p-5 text-center text-lg leading-loose text-stone-700 shadow-card">
                {stanza}
              </p>
            </FadeUp>
          ))}
        </div>

        {post.youtube && (
          <FadeUp className="mt-8">
            <div className="aspect-video overflow-hidden rounded-xl shadow-card">
              <iframe
                src={`https://www.youtube.com/embed/${post.youtube}`}
                title={bi(post.title)}
                className="h-full w-full"
                allowFullScreen
              />
            </div>
          </FadeUp>
        )}

        <FadeUp className="mt-8 flex items-center gap-4 rounded-xl bg-white p-4 shadow-card">
          <span className="text-sm font-semibold text-maroon">{t("common.share")}:</span>
          <SocialIcons size={16} className="text-stone-500" />
        </FadeUp>
      </article>
    </PageShell>
  );
}
