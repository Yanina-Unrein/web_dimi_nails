import Image from "next/image";

interface WorkCardProps {
  index: number;
  image?: string;
  label?: string;
}

export default function WorkCard({ index, image }: WorkCardProps) {
  const accents = ["#c4186a", "#e05585", "#c9a84c", "#f2a7c3", "#c4186a", "#e05585"];
  const accent  = accents[index % accents.length];

  return (
    <div
      className="glass relative overflow-hidden group transition-all duration-500 hover:-translate-y-2"
      style={{ aspectRatio: "3/4" }}
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${35 + index * 12}% ${40 + index * 7}%, ${accent}22, rgba(24,6,15,0.96))`,
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30 group-hover:opacity-50 transition-opacity">
            <span className="text-4xl">💅</span>
            <p className="font-body text-xs text-[#fdf6f0]/50">Photo coming soon</p>
          </div>
        </>
      )}
    </div>
  );
}