"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { useLang } from "@/lib/i18n";
import { FadeUp, LangFade } from "@/components/Motion";
import PageShell from "@/components/PageShell";
import { travel, bestTime, timings, facilities, mapEmbed } from "@/data/site";

function FacilityCard({ facility, index }) {
  const { bi } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.07} className="h-full">
      <div className="h-full rounded-xl bg-white p-5 shadow-card transition-shadow hover:shadow-lift">
        <button
          className="flex w-full items-center justify-between gap-2 text-left sm:pointer-events-none"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="flex items-center gap-3">
            <span className="text-2xl">{facility.icon}</span>
            <span className="font-bold uppercase tracking-wide text-maroon">{bi(facility.title)}</span>
          </span>
          <FaChevronDown className={`text-stone-400 transition-transform sm:hidden ${open ? "rotate-180" : ""}`} />
        </button>
        <ul className={`mt-3 space-y-1.5 text-sm text-stone-500 sm:block ${open ? "block" : "hidden"}`}>
          {bi(facility.points).map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}

export default function LocationContent() {
  const { t, bi } = useLang();

  return (
    <PageShell>
      <FadeUp>
        <h1 className="text-2xl font-bold sm:text-4xl">{t("location.title")}</h1>
        <p lang="hi" className="mt-2 font-deva text-lg text-saffron">{t("location.subtitle")}</p>
      </FadeUp>

      <section className="mt-10">
        <FadeUp>
          <h2 className="mb-5 text-xl font-bold sm:text-2xl">{t("location.howToReach")}</h2>
        </FadeUp>
        <div className="space-y-4">
          {travel.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-4 rounded-xl bg-white p-5 shadow-card"
            >
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="font-bold">
                  {mode.icon} {bi(mode.title)}
                </h3>
                <LangFade>
                  <p className="mt-1 text-sm leading-relaxed text-stone-500">{bi(mode.desc)}</p>
                </LangFade>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <FadeUp>
          <div className="h-full rounded-xl border-l-4 border-saffron bg-white p-5 shadow-card">
            <h2 className="mb-2 text-lg font-bold">🌤️ {t("location.bestTime")}</h2>
            <LangFade>
              <p className="text-sm leading-relaxed text-stone-500">{bi(bestTime)}</p>
            </LangFade>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="h-full rounded-xl border-l-4 border-saffron bg-white p-5 shadow-card">
            <h2 className="mb-2 text-lg font-bold">🕔 {t("location.timings")}</h2>
            <LangFade>
              <p className="text-sm leading-relaxed text-stone-500">{bi(timings)}</p>
            </LangFade>
          </div>
        </FadeUp>
      </section>

      <section className="mt-10">
        <FadeUp>
          <h2 className="mb-5 text-xl font-bold sm:text-2xl">{t("location.facilities")}</h2>
        </FadeUp>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {facilities.map((f, i) => (
            <FacilityCard key={i} facility={f} index={i} />
          ))}
        </div>
      </section>

      <FadeUp className="mt-10">
        <iframe
          src={mapEmbed}
          title="Temple location map"
          className="h-[380px] w-full rounded-xl border-0 shadow-card"
          loading="lazy"
          allowFullScreen
        />
      </FadeUp>
    </PageShell>
  );
}
