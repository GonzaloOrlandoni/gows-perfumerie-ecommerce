import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-luxury"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1920')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl animate-fade-in">
          {/* Eyebrow */}
          <p className="text-[#C4A265] text-xs tracking-[0.4em] uppercase mb-6 font-light">
            Nueva Colección 2026
          </p>

          {/* Heading */}
          <h1
            className="text-white text-5xl lg:text-7xl font-light leading-tight mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            El arte de
          </h1>
          <h1
            className="text-5xl lg:text-7xl font-light leading-tight mb-8 italic"
            style={{ fontFamily: "var(--font-serif)", color: "#C4A265" }}
          >
            la fragancia
          </h1>

          {/* Gold divider */}
          <div className="w-12 h-px bg-[#C4A265] mb-8" />

          {/* Subtitle */}
          <p className="text-gray-300 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md">
            Fragancias de nicho, haute couture y exclusivas. Cada gota cuenta
            una historia. Descubrí la tuya.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/#catalogo"
              className="inline-block bg-[#C4A265] text-black px-8 py-3 text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#D4B480] transition-all duration-300"
            >
              Explorar Colección
            </Link>
            <Link
              to="/category/niche"
              className="inline-block border border-white/50 text-white px-8 py-3 text-xs tracking-[0.25em] uppercase font-light hover:border-[#C4A265] hover:text-[#C4A265] transition-all duration-300"
            >
              Fragancias Niche
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </section>
  );
};

export default Hero;
