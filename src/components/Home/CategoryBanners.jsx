import { Link } from "react-router-dom";

const categories = [
  {
    id: "niche",
    label: "NICHE",
    sub: "Alta Perfumería",
    img: "https://images.unsplash.com/photo-1547887538-047409092ce7?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1 row-span-2",
  },
  {
    id: "homme",
    label: "HOMME",
    sub: "Para Él",
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1",
  },
  {
    id: "femme",
    label: "FEMME",
    sub: "Para Ella",
    img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=800",
    span: "col-span-1",
  },
  {
    id: "unisex",
    label: "UNISEX",
    sub: "Sin Fronteras",
    img: "https://images.unsplash.com/photo-1592945403431-76be2b79e47f?auto=format&fit=crop&q=80&w=800",
    span: "col-span-2",
  },
];

const CategoryBanners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-3">
          Explorar por categoría
        </p>
        <h2
          className="text-3xl font-light text-gray-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Encontrá tu Esencia
        </h2>
        <div className="w-8 h-px bg-[#C4A265] mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className={`relative overflow-hidden group ${cat.span}`}
          >
            {/* Image */}
            <img
              src={cat.img}
              alt={cat.label}
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x800/0a0a0a/C4A265?text=GOWS+Perfumerie"; }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-500" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
              <p className="text-[9px] tracking-[0.4em] text-[#C4A265] uppercase mb-2">
                {cat.sub}
              </p>
              <h3
                className="text-white text-2xl md:text-3xl font-light tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {cat.label}
              </h3>
              <div className="w-6 h-px bg-white/50 mt-3 group-hover:w-12 group-hover:bg-[#C4A265] transition-all duration-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryBanners;
