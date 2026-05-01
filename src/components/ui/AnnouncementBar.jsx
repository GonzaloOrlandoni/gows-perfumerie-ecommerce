const messages = [
  "🚚  Envíos a todo el país",
  "✨  Productos 100% Originales y Certificados",
  "💳  Hasta 12 cuotas sin interés",
  "🎁  Embalaje de regalo incluido",
  "🌹  +500 fragancias disponibles por consulta",
  "⚡  Despacho en 24-48 hs hábiles",
];

const AnnouncementBar = () => {
  const repeated = [...messages, ...messages]; // duplicar para loop infinito

  return (
    <div
      className="bg-[#0A0A0A] text-white overflow-hidden py-2.5"
      aria-label="Anuncios"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 28s linear infinite",
        }}
      >
        {repeated.map((msg, i) => (
          <span
            key={i}
            className="text-[10px] tracking-[0.25em] uppercase mx-10 text-gray-300 inline-flex items-center gap-2 shrink-0"
          >
            {msg}
            <span className="text-[#C4A265] mx-6">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
