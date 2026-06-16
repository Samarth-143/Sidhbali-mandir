"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import { useLang } from "@/lib/i18n";
import { FadeUp, LangFade } from "@/components/Motion";
import PageShell from "@/components/PageShell";
import { downloads } from "@/data/site";

export default function DownloadContent() {
  const { t, bi } = useLang();

  return (
    <PageShell>
      <FadeUp>
        <h1 className="text-2xl font-bold sm:text-4xl">{t("download.title")}</h1>
        <LangFade>
          <p className="mt-2 text-stone-500">{t("download.desc")}</p>
        </LangFade>
      </FadeUp>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {downloads.map((d, i) => (
          <FadeUp key={i} delay={i * 0.08} className="h-full">
            <motion.div
              whileHover={{ y: -4 }}
              className="flex h-full items-center justify-between gap-4 rounded-xl bg-white p-6 shadow-card hover:shadow-lift"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{d.icon}</span>
                <h3 className="font-bold">{bi(d.title)}</h3>
              </div>
              <a href={d.file} download className="btn-primary !px-4 !py-2 text-sm" aria-label={`Download ${bi(d.title)}`}>
                <FaDownload className="mr-1 inline" size={13} /> {t("common.download")}
              </a>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </PageShell>
  );
}
