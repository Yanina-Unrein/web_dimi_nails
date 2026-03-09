"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale } from "@/lib/i18n";

type LangContextType = {
  locale: Locale;
  t: typeof translations.en;
  toggle: () => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const toggle = () => setLocale((l) => (l === "en" ? "es" : "en"));
  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
