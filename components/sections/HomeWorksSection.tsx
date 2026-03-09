"use client";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import SectionHeader from "@/components/ui/SectionHeader";
import WorkCard from "@/components/ui/WorkCard";

const PREVIEW_WORKS = [
  {  image: "/images/work-1.webp" },
  {  image: "/images/work-2.webp" },
  {  image: "/images/work-3.webp" },
  {  image: "/images/work-4.webp" },
  {  image: "/images/work-5.webp" },
  {  image: "/images/work-6.webp" },
];

export default function HomeWorksSection() {
  const { t } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag={t.homeWorks.tag}
          title={t.homeWorks.title}
          subtitle={t.homeWorks.sub}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mt-2">
          {PREVIEW_WORKS.map(({ image }, i) => (
            <WorkCard key={i} index={i} image={image} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/sobre-mi" className="btn-outline">
            {t.homeWorks.btn}
          </Link>
        </div>
      </div>
    </section>
  );
}
