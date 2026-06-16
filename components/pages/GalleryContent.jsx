"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa6";
import { useLang } from "@/lib/i18n";
import { FadeUp, LangFade } from "@/components/Motion";
import PageShell from "@/components/PageShell";
import Lightbox from "@/components/Lightbox";
import { galleryImages, galleryVideos } from "@/data/site";

export default function GalleryContent() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState(null);
  const [videoLightbox, setVideoLightbox] = useState(null);

  return (
    <PageShell>
      <FadeUp>
        <h1 className="text-2xl font-bold sm:text-4xl">{t("gallery.title")}</h1>
        <LangFade>
          <p className="mt-2 text-stone-500">{t("gallery.desc")}</p>
        </LangFade>
      </FadeUp>

      <div className="mt-8 columns-2 gap-4 sm:columns-3 [&>button]:mb-4">
        {galleryImages.map((img, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setLightbox(i)}
            className="block w-full overflow-hidden rounded-xl shadow-card"
          >
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full" />
          </motion.button>
        ))}
      </div>

      <FadeUp>
        <h2 className="mb-6 mt-12 text-2xl font-bold sm:text-3xl">{t("gallery.videos")}</h2>
      </FadeUp>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {galleryVideos.map((vid, i) => (
          <motion.button
            key={vid.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setVideoLightbox(i)}
            className="group relative block w-full overflow-hidden rounded-xl shadow-card"
          >
            <img
              src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
              alt={vid.title}
              loading="lazy"
              className="w-full"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron/90 text-white shadow-lg">
                <FaPlay size={18} className="ml-0.5" />
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox images={galleryImages} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
      <Lightbox
        images={galleryVideos.map((v) => ({ src: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`, alt: v.title }))}
        index={videoLightbox}
        onClose={() => setVideoLightbox(null)}
        onNavigate={setVideoLightbox}
        videoIds={galleryVideos.map((v) => v.id)}
      />
    </PageShell>
  );
}
