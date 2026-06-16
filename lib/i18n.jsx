"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "@/locales/en.json";
import hi from "@/locales/hi.json";

const dicts = { en, hi };
const LanguageContext = createContext(null);

const resolve = (dict, key) =>
  key.split(".").reduce((obj, k) => (obj ? obj[k] : undefined), dict);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("hi");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "hi") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const switchLang = (l) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  // Translate a static UI key with graceful fallback (active lang -> hi -> en -> key).
  const t = (key) =>
    resolve(dicts[lang], key) ?? resolve(dicts.hi, key) ?? resolve(dicts.en, key) ?? key;

  // Pick a bilingual content object { hi, en } with graceful fallback.
  const bi = (obj) => (obj ? obj[lang] ?? obj.hi ?? obj.en ?? "" : "");

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t, bi }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
