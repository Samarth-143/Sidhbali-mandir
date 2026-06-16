"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { useLang } from "@/lib/i18n";
import { FadeUp } from "@/components/Motion";
import PageShell from "@/components/PageShell";
import { contact, mapEmbed } from "@/data/site";

export default function ContactContent() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [toast, setToast] = useState(null);

  const infoItems = [
    { Icon: FaPhone, label: t("contact.phoneLabel"), value: contact.phone, href: `tel:${contact.phone}` },
    { Icon: FaLocationDot, label: t("contact.addressLabel"), value: contact.address },
    { Icon: FaEnvelope, label: t("contact.emailLabel"), value: contact.email, href: `mailto:${contact.email}` },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.name.trim() || !emailOk || !form.subject.trim()) {
      setToast({ type: "error", text: t("contact.error") });
    } else {
      setToast({ type: "success", text: t("contact.success") });
      setForm({ name: "", email: "", subject: "", message: "" });
    }
    setTimeout(() => setToast(null), 3500);
  };

  const field = (key, type = "text", required = true) => (
    <div>
      <label htmlFor={key} className="mb-1 block text-sm font-semibold text-maroon">
        {t(`contact.${key}`)}
      </label>
      {key === "message" ? (
        <textarea
          id={key}
          rows={4}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="w-full rounded-lg border border-stone-200 bg-white p-3 text-sm outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/30"
        />
      ) : (
        <input
          id={key}
          type={type}
          required={required}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="w-full rounded-lg border border-stone-200 bg-white p-3 text-sm outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/30"
        />
      )}
    </div>
  );

  return (
    <PageShell>
      <FadeUp>
        <h1 className="text-2xl font-bold sm:text-4xl">{t("contact.title")}</h1>
      </FadeUp>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {infoItems.map(({ Icon, label, value, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
            className="flex h-full flex-col items-center gap-2 rounded-xl bg-white p-6 text-center shadow-card"
          >
            <Icon size={26} className="text-saffron" />
            <h3 className="text-sm font-bold uppercase tracking-wide">{label}</h3>
            {href ? (
              <a href={href} className="break-all text-sm text-stone-500 hover:text-saffron">{value}</a>
            ) : (
              <p className="text-sm text-stone-500">{value}</p>
            )}
          </motion.div>
        ))}
      </div>

      <FadeUp className="mt-10">
        <iframe src={mapEmbed} title="Temple location map" className="h-[320px] w-full rounded-xl border-0 shadow-card" loading="lazy" />
      </FadeUp>

      <FadeUp className="mt-10">
        <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-xl bg-white p-6 shadow-card sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {field("name")}
            {field("email", "email")}
          </div>
          {field("subject")}
          {field("message", "text", false)}
          <button type="submit" className="btn-primary">{t("contact.submit")}</button>
        </form>
      </FadeUp>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lift ${
              toast.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
            role="status"
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
