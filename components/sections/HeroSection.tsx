"use client";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-32 lg:pt-0">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(160deg,
              rgba(42, 13, 26, 0.55) 0%,
              rgba(24, 6, 15, 0.4) 40%,
              rgba(24, 6, 15, 0.65) 100%
            ),
            linear-gradient(180deg, #2a0d1a 0%, #18060f 100%)
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <p className="section-tag mb-4">{t.hero.tag}</p>

          <h1
            className="font-display font-light"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 6rem)",
              lineHeight: 1,
              color: "#fdf6f0",
            }}
          >
            {t.hero.title.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "text-gradient block" : "block"}>
                {line}
              </span>
            ))}
          </h1>

          <p className="font-body text-[#fdf6f0]/60 text-base md:text-lg max-w-md mt-6 mb-10 leading-relaxed">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/press-on" className="btn-primary">
              {t.hero.cta}
            </Link>

            <Link href="/sobre-mi" className="btn-outline">
              {t.hero.ctaSec}
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[500px] rounded-xl">
          <Image
            src="/images/caro_chibi.webp"
            alt="Press on nails"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
