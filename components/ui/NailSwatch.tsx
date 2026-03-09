interface NailSwatchProps {
  color: string;
  name: string;
}

export default function NailSwatch({ color, name }: NailSwatchProps) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className="nail-swatch"
        style={{
          background: color.startsWith("linear") ? color : color,
          boxShadow: `0 4px 16px ${color}44`,
        }}
      />
      <span className="font-body text-[10px] text-[#fdf6f0]/35 group-hover:text-[#fdf6f0]/70 transition-colors text-center max-w-[56px] leading-snug">
        {name}
      </span>
    </div>
  );
}
