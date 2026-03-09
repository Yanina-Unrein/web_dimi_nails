# 💅 Dimi Nails

Next.js 14 · TypeScript · Tailwind CSS · i18n (EN/ES)

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Structure

```
dimi-nails/
├── app/
│   ├── layout.tsx              # Root layout (LangProvider + Navbar + Footer)
│   ├── globals.css             # Design tokens & global styles
│   ├── page.tsx                # Home
│   ├── sobre-mi/page.tsx       # About (colours + gallery)
│   ├── press-on/page.tsx       # Press On + sizing guide
│   └── contacto/page.tsx       # Contact + FAQ
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive nav + full-screen mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero with bg image placeholder
│   │   ├── HomeWorksSection.tsx
│   │   └── HomePressOnCta.tsx
│   └── ui/
│       ├── SectionHeader.tsx   # Reusable section heading
│       ├── WorkCard.tsx        # Gallery card (placeholder → photo)
│       └── NailSwatch.tsx      # Nail-shaped colour swatch
├── context/
│   └── LangContext.tsx         # EN/ES language toggle
└── lib/
    └── i18n.ts                 # All translations
```

## Adding photos

Drop images into `public/images/`, then replace the placeholder divs in components with:

```tsx
import Image from "next/image";

// Full-fill (inside relative container):
<Image src="/images/hero-bg.jpg" alt="" fill className="object-cover object-center" priority />

// Fixed size:
<Image src="/images/work-1.jpg" alt="French nail art" width={400} height={533} />
```

**Hero background** → `public/images/hero-bg.jpg`  
**Gallery photos** → `public/images/work-1.jpg` … `work-9.jpg`  
**Caro's photo** → `public/images/caro.jpg`

## Colours

| Token | Hex | Usage |
|---|---|---|
| `--fuchsia` | `#c4186a` | Primary, buttons |
| `--pink` | `#e05585` | Accents |
| `--blush` | `#f2a7c3` | Swatches, soft accents |
| `--gold` | `#c9a84c` | Section tags, highlights |
| `--cream` | `#fdf6f0` | Body text |
| `--dark` | `#18060f` | Background |

## Deploy (Vercel)

1. Push to GitHub
2. Import project at vercel.com
3. It auto-detects Next.js — deploy ✓
