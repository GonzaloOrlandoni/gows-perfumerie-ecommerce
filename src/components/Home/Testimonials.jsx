import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Valentina M.",
    location: "Buenos Aires",
    text: "Compré el Baccarat Rouge 540 y llegó perfectamente embalado. La atención fue impecable y la fragancia es exactamente como la describe la tienda. Mi perfume favorito ahora.",
    rating: 5,
    perfume: "Baccarat Rouge 540",
  },
  {
    id: 2,
    name: "Santiago R.",
    location: "Córdoba",
    text: "Busqué mucho el Santal 33 y acá lo encontré a buen precio. El envío fue rápido y el packaging de lujo. Totalmente recomendable para fragancias de nicho.",
    rating: 5,
    perfume: "Santal 33 — Le Labo",
  },
  {
    id: 3,
    name: "Luciana P.",
    location: "Rosario",
    text: "Excelente experiencia. Me asesoraron muy bien por WhatsApp antes de comprar. El Coco Mademoiselle que recibí es 100% original. Volveré a comprar sin dudas.",
    rating: 5,
    perfume: "Coco Mademoiselle — Chanel",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-3 h-3 fill-[#C4A265]" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-3">
            Opiniones reales
          </p>
          <h2
            className="text-3xl font-light text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-8 h-px bg-[#C4A265] mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#C4A265]/30 transition-all duration-500"
            >
              <Quote size={24} className="text-[#C4A265] mb-4 opacity-60" />
              <Stars count={t.rating} />
              <p className="text-gray-300 text-sm font-light leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-gray-500 text-xs tracking-wider">{t.location}</p>
                <p className="text-[#C4A265] text-[10px] tracking-widest uppercase mt-1">
                  {t.perfume}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
