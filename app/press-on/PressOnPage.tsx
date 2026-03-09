"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import SectionHeader from "@/components/ui/SectionHeader";

export default function PressOnPage() {
  const { t } = useLang();
  const p = t.pressOn;
  const [activeShape, setActiveShape] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(196,24,106,0.2), transparent 55%)",
        }}
      >
        <div className="max-w-3xl mx-auto anim-fade-up">
          <p className="section-tag mb-4">{p.tag}</p>
          <h1
            className="font-display font-light text-gradient leading-none mb-5"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            {p.title}
          </h1>
          <p className="font-body text-[#fdf6f0]/55 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {p.sub}
          </p>
        </div>
      </section>

      {/* ── What are press ons ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Photo placeholder */}
          <div
            className="rounded-2xl overflow-hidden glass flex items-center justify-center"
            style={{ aspectRatio: "1", background: "radial-gradient(circle at 38% 35%, rgba(196,24,106,0.2), rgba(24,6,15,0.95))" }}
          >
            <div className="flex flex-col items-center gap-2 opacity-30">
              <span className="text-6xl">💅</span>
              <p className="font-body text-xs text-[#fdf6f0]/40">Photo coming soon</p>
            </div>
          </div>

          <div>
            <p className="section-tag mb-3">{p.whatTag}</p>
            <h2 className="font-display font-light text-gradient text-3xl md:text-4xl mb-6">{p.whatTitle}</h2>
            <div className="space-y-4">
              {p.what.map((para, i) => (
                <p key={i} className="font-body text-sm text-[#fdf6f0]/60 leading-relaxed">{para}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {p.benefits.map(({ icon, label }) => (
                <div key={label} className="glass px-4 py-3 flex items-center gap-3">
                  <span className="text-lg">{icon}</span>
                  <span className="font-body text-xs text-[#fdf6f0]/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shapes ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader tag={p.shapesTag} title={p.shapesTitle} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {p.shapes.map(({ name, desc }) => (
              <button
                key={name}
                onClick={() => setActiveShape(activeShape === name ? null : name)}
                className={`glass p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                  activeShape === name ? "border-[rgba(201,168,76,0.5)] shadow-[0_0_30px_rgba(201,168,76,0.12)]" : ""
                }`}
                style={activeShape === name ? { borderColor: "rgba(201,168,76,0.5)" } : {}}
              >
                <h3 className={`font-display text-xl font-light mb-2 transition-colors ${
                  activeShape === name ? "text-[#c9a84c]" : "text-[#fdf6f0]"
                }`}>{name}</h3>
                <p className="font-body text-xs text-[#fdf6f0]/50 leading-relaxed">{desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Measure guide ── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 85% 50%, rgba(196,24,106,0.1), transparent 55%)" }}
        />
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag={p.measureTag} title={p.measureTitle} subtitle={p.measureSub} />

          <div className="space-y-5">
            {p.steps.map(({ title, desc, tip }, i) => (
              <div key={i} className="glass p-6 md:p-8 flex gap-5 items-start transition-all duration-300 hover:border-[rgba(201,168,76,0.3)]">
                <div className="step-num shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-display text-xl text-[#fdf6f0] font-light mb-2">{title}</h3>
                  <p className="font-body text-sm text-[#fdf6f0]/65 leading-relaxed mb-2">{desc}</p>
                  <p className="font-body text-xs text-[#c9a84c]/80 italic">{tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sample table */}
          <div
            className="mt-10 rounded-2xl p-6 md:p-8"
            style={{
              background: "rgba(196,24,106,0.06)",
              border: "1px solid rgba(196,24,106,0.18)",
            }}
          >
            <h3 className="font-display font-light text-xl text-[#c9a84c] mb-5 text-center">
              {p.measureTag} — example
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(196,24,106,0.2)" }}>
                    <th className="text-left py-2 pr-4 text-[#c4186a] font-medium text-xs tracking-wide">Hand</th>
                    {p.tableHeaders.map((h) => (
                      <th key={h} className="py-2 px-3 text-[#fdf6f0]/50 font-normal text-xs text-center">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[p.tableLeft, p.tableRight].map((hand) => (
                    <tr key={hand} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <td className="py-3 pr-4 text-[#fdf6f0]/75 text-xs">{hand}</td>
                      {["14mm","12mm","11mm","11mm","9mm"].map((m, i) => (
                        <td key={i} className="py-3 px-3 text-center text-[#c9a84c]/80 text-xs">{m}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 text-center">
        <div
          className="max-w-2xl mx-auto rounded-2xl p-12"
          style={{
            background: "linear-gradient(135deg, rgba(196,24,106,0.12), rgba(42,13,26,0.6))",
            border: "1px solid rgba(196,24,106,0.22)",
          }}
        >
          <h2 className="font-display font-light text-gradient text-3xl md:text-4xl mb-3">{p.ctaTitle}</h2>
          <p className="font-body text-sm text-[#fdf6f0]/55 mb-8 max-w-sm mx-auto leading-relaxed">{p.ctaSub}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.instagram.com/dimi_nails_by_caroperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {p.ctaBtn}
            </a>
            <Link href="/contacto" className="btn-outline">{p.ctaBtnSec}</Link>
          </div>
        </div>
      </section>
    </>
  );
}