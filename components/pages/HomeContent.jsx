"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPlay, FaHandsPraying, FaPersonPraying, FaBed } from "react-icons/fa6";
import { useLang } from "@/lib/i18n";
import { FadeUp, LangFade } from "@/components/Motion";

import Lightbox from "@/components/Lightbox";

import { history, journey, galleryImages, youtubeId, fbEmbed, attractions } from "@/data/site";


export default function HomeContent() {
  const { t, bi } = useLang();
  const [lightbox, setLightbox] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const features = [
    { Icon: FaHandsPraying, title: t("home.sevas"), desc: t("home.sevasDesc") },
    { Icon: FaPersonPraying, title: t("home.darshan"), desc: t("home.darshanDesc") },
    { Icon: FaBed, title: t("home.accommodation"), desc: t("home.accommodationDesc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.img
          src="/mndir.jpg"
          alt="Shri Sidhbali Baba Dham temple"
          className="h-[420px] w-full object-cover sm:h-[520px]"
          initial={{ scale: 1.08, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-maroon/80 via-maroon/30 to-transparent px-4 text-center">
          <LangFade>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl font-bold !text-white drop-shadow-lg sm:text-5xl"
            >
              {t("home.heroTitle")}
            </motion.h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-cream/90 sm:text-base">{t("home.heroTagline")}</p>
          </LangFade>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <Link href="/location" className="btn-primary mt-6">
              {t("common.planVisit")}
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12">
        <main className="min-w-0 space-y-16">
          {/* Intro + History */}
          <FadeUp>
            <LangFade>
              <p className="text-lg leading-relaxed text-stone-600">{t("home.heroIntro")}</p>
            </LangFade>
          </FadeUp>

          <section>
            <FadeUp>
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">{t("home.historyTitle")}</h2>
            </FadeUp>
            <LangFade className="space-y-4">
              {bi(history) && history[useLangSafe()] === undefined ? null : null}
              {(bi(history) || []).map((para, i) => (
                <FadeUp key={i} delay={i * 0.12}>
                  <p className="leading-relaxed text-stone-600">{para}</p>
                </FadeUp>
              ))}
            </LangFade>
          </section>

          {/* Feature cards */}
          <section className="grid gap-6 sm:grid-cols-3">
            {features.map(({ Icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col items-center gap-3 rounded-xl bg-white p-6 text-center shadow-card transition-shadow hover:shadow-lift"
                >
                  <Icon size={34} className="text-saffron" />
                  <h3 className="font-bold uppercase tracking-wide">{title}</h3>
                  <p className="text-sm text-stone-500">{desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </section>

          {/* Video */}
          <section>
            <FadeUp>
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">{t("home.watchVideo")}</h2>
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-card">
                {playVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                    title="Temple video"
                    className="h-full w-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <button onClick={() => setPlayVideo(true)} className="group relative h-full w-full" aria-label="Play video">
                    <img
                      src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                      alt="Video thumbnail"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <motion.span
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-saffron text-white shadow-lift"
                      >
                        <FaPlay size={22} className="ml-1" />
                      </motion.span>
                    </span>
                  </button>
                )}
              </div>
            </FadeUp>
          </section>

          
          {/* Gallery */}
          <section>
            <FadeUp>
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">{t("home.galleryTitle")}</h2>
            </FadeUp>
            <div className="columns-2 gap-3 sm:columns-3 [&>button]:mb-3">
              {galleryImages.slice(0, 6).map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLightbox(i)}
                  className="block w-full overflow-hidden rounded-lg"
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full" />
                </motion.button>
              ))}
            </div>
            <Lightbox images={galleryImages} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
          </section>

          {/* Nearby attractions */}
          <section>
            <FadeUp>
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">{t("common.nearby")}</h2>
            </FadeUp>
            <div className="grid gap-6 sm:grid-cols-2">
              {attractions.map((a, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <motion.div whileHover={{ y: -4 }} className="flex h-full gap-4 rounded-xl bg-white p-5 shadow-card hover:shadow-lift">
                    <span className="text-3xl">{a.emoji}</span>
                    <div>
                      <h3 className="font-bold">
                        {bi(a.name)} <span className="text-xs font-normal text-stone-400">· {a.distance}</span>
                      </h3>
                      <p className="text-sm text-stone-500">{bi(a.desc)}</p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// no-op helper retained for clarity of bilingual mapping
function useLangSafe() {
  return "hi";
}
