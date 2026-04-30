import { useState } from "react";
import { Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simula el envío (conectar a n8n o Firebase en el futuro)
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  return (
    <section className="bg-[#F5F0E8] py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Decorative */}
        <div className="flex justify-center mb-6">
          <div className="w-px h-12 bg-[#C4A265]" />
        </div>

        <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-3">
          Comunidad GOWS
        </p>
        <h2
          className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Recibí novedades y ofertas exclusivas
        </h2>
        <p className="text-gray-500 text-sm font-light leading-relaxed mb-10 max-w-md mx-auto">
          Suscribite y sé el primero en conocer nuevas fragancias, preventas y
          promociones especiales para nuestros miembros.
        </p>

        {sent ? (
          <div className="animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-[#C4A265] flex items-center justify-center mx-auto mb-4">
              <Send size={20} className="text-white" />
            </div>
            <p
              className="text-xl font-light text-gray-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              ¡Gracias por suscribirte!
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Pronto recibirás nuestras novedades en {email}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-5 py-3.5 border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-300 outline-none focus:border-[#C4A265] transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3.5 bg-[#0A0A0A] text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#C4A265] transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2 min-w-[130px]"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={14} />
                  Suscribirse
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-[10px] text-gray-400 tracking-wider mt-6">
          Sin spam. Podés darte de baja cuando quieras.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
