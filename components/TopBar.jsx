"use client";

import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import { useLang } from "@/lib/i18n";

export default function TopBar() {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-maroon text-cream"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs sm:text-sm">
        <span>🕉️ {t("topbar.timing")}</span>
        <SocialIcons size={13} />
      </div>
    </motion.div>
  );
}
