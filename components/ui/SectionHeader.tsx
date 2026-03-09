interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  shimmer?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  center = true,
  shimmer = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {tag && <p className="section-tag mb-3">{tag}</p>}
      <h2
        className={`font-display font-light leading-tight ${
          shimmer ? "text-gradient-shimmer" : "text-gradient"
        }`}
        style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-[#fdf6f0]/55 mt-4 max-w-md mx-auto text-sm leading-relaxed">
          {subtitle}
        </p>
      )}
      {center && <div className="divider mt-5" />}
    </div>
  );
}
