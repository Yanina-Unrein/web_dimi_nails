import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative mt-20 py-12 px-6"
      style={{
        background: "linear-gradient(to top, rgba(26,0,38,1), rgba(45,0,69,0.8))",
        borderTop: "1px solid rgba(233,30,140,0.2)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #e91e8c, transparent)" }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Brand */}
        <div>
          <h3
            className="font-display text-3xl mb-3"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #ffe135)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dimi Nails
          </h3>
          <p className="text-[#fff5fb]/60 text-sm font-body leading-relaxed">
            Press on nails personalizadas hechas con amor y detalle, para que tus manos brillen tanto como vos.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-body font-700 text-[#e91e8c] mb-4 tracking-widest text-xs uppercase">Navegación</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/sobre-mi", label: "Sobre mí" },
              { href: "/press-on", label: "Press On" },
              { href: "/contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[#fff5fb]/70 hover:text-[#ffe135] transition-colors text-sm font-body"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-body font-700 text-[#e91e8c] mb-4 tracking-widest text-xs uppercase">Seguime</h4>
          <a
            href="https://www.instagram.com/dimi_nails_by_caroperez/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon text-sm inline-flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @dimi_nails_by_caroperez
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 text-center text-[#fff5fb]/30 text-xs font-body"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        © {new Date().getFullYear()} Dimi Nails by Caro Pérez ✦ Todos los derechos reservados
      </div>
    </footer>
  );
}
