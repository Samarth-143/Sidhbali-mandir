"use client";

import SocialIcons from "./SocialIcons";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 bg-maroon text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center">
        <SocialIcons size={18} className="gap-5" />
        <p className="text-sm">{t("footer.rights")}</p>
        <p className="text-xs text-cream/70">
          {t("footer.credit")} —{" "}
          <a href="https://www.sidhbalibaba.com" target="_blank" rel="noreferrer" className="underline hover:text-saffron-light">
            sidhbalibaba.com
          </a>
        </p>
      </div>
    </footer>
  );
}
