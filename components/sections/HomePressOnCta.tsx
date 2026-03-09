"use client";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function HomePressOnCta() {
  const { t } = useLang();

  return (
    <section className="py-16 px-6">
      <div
        className="max-w-5xl mx-auto rounded-2xl relative overflow-hidden px-10 py-16 md:px-16"
        style={{
          background: "linear-gradient(135deg, rgba(196,24,106,0.12) 0%, rgba(42,13,26,0.7) 50%, rgba(201,168,76,0.08) 100%)",
          border: "1px solid rgba(196,24,106,0.22)",
        }}
      >
        {/* Decorative corner gradients */}
        <div
          className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
          style={{
            background: "radial-gradient(circle at top right, rgba(201,168,76,0.12), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
          style={{
            background: "radial-gradient(circle at bottom left, rgba(196,24,106,0.12), transparent 70%)",
          }}
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-tag block mb-3">Press On</span>
            <h2
              className="font-display font-light text-gradient leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              {t.homePressCta.title}
            </h2>
            <p className="font-body text-sm text-[#fdf6f0]/55 mt-4 leading-relaxed max-w-sm">
              {t.homePressCta.sub}
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link href="/press-on" className="btn-primary text-base px-8 py-3.5">
              {t.homePressCta.btn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
