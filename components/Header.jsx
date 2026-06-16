"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useLang } from "@/lib/i18n";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/location", key: "nav.location" },
  { href: "/arti-sangrah", key: "nav.artiSangrah" },
  { href: "/photo-gallery", key: "nav.gallery" },
  { href: "/download", key: "nav.download" },
  { href: "/contact-us", key: "nav.contact" },
];

function LangToggle() {
  const { lang, switchLang } = useLang();
  return (
    <div className="flex overflow-hidden rounded-full border border-saffron text-xs font-semibold">
      {["en", "hi"].map((l) => (
        <button
          key={l}
          onClick={() => switchLang(l)}
          className={`px-3 py-1 transition-colors duration-200 ${
            lang === l ? "bg-saffron text-white" : "text-saffron hover:bg-saffron/10"
          }`}
          aria-pressed={lang === l}
        >
          {l === "en" ? "EN" : "हिं"}
        </button>
      ))}
    </div>
  );
}

function MobileMenu({ open, onClose, t, pathname }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />
      <aside
        className="absolute right-0 top-0 flex h-full w-72 flex-col gap-2 p-6 shadow-lift"
        style={{
          backgroundColor: "#FFFFFF",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="mb-4 self-end text-maroon"
        >
          <FaXmark size={24} />
        </button>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-lg px-3 py-2 font-medium transition-colors hover:bg-saffron/10 hover:text-saffron ${
              pathname === item.href ? "text-saffron" : "text-stone-700"
            }`}
          >
            {t(item.key)}
          </Link>
        ))}
        <div className="mt-2 border-t border-stone-200 pt-3 pl-3 text-sm text-stone-500">
          <Link href="/arti-sangrah/aarti" className="block py-1 hover:text-saffron">• {t("nav.aarti")}</Link>
          <Link href="/arti-sangrah/chalisa" className="block py-1 hover:text-saffron">• {t("nav.chalisa")}</Link>
          <Link href="/arti-sangrah/bhajan" className="block py-1 hover:text-saffron">• {t("nav.bhajan")}</Link>
        </div>
      </aside>
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-cream/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "py-1 shadow-lift" : "py-3 shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🚩</span>
            <span
              className={`font-deva font-bold text-maroon transition-all duration-300 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              श्री सिद्धबली बाबा धाम
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-saffron ${
                  pathname === item.href ? "text-saffron" : "text-stone-700"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            <LangToggle />
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LangToggle />
            <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-maroon">
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} t={t} pathname={pathname} />
    </>
  );
}
