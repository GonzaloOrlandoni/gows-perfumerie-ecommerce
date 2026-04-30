import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon
} from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              className="text-white text-3xl font-light tracking-[0.3em] mb-1"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              GOWS
            </h3>
            <p className="text-[10px] tracking-[0.5em] text-[#C4A265] uppercase mb-5">
              Perfumerie
            </p>
            <p className="text-sm font-light leading-relaxed text-gray-500 max-w-xs mb-6">
              Fragancias de alta gama, nicho y exclusivas. Curada selección de las mejores
              casas perfumeras del mundo. Envíos a todo Argentina.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram GOWS Perfumerie"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#C4A265] hover:text-[#C4A265] transition-all duration-300"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://wa.me/5491128831895"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp GOWS Perfumerie"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.35em] uppercase mb-5">
              Categorías
            </h4>
            <ul className="space-y-3">
              {["homme", "femme", "unisex", "niche"].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/category/${cat}`}
                    className="text-sm text-gray-500 hover:text-[#C4A265] transition-colors duration-300 uppercase tracking-widest text-[10px]"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.35em] uppercase mb-5">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Buenos Aires, Argentina</li>
              <li>
                <a
                  href="https://wa.me/5491128831895"
                  className="hover:text-[#C4A265] transition-colors"
                >
                  +54 9 11 2883-1895
                </a>
              </li>
              <li>
                <a
                  href="mailto:gowebsolutions4@gmail.com"
                  className="hover:text-[#C4A265] transition-colors"
                >
                  gowebsolutions4@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {["Visa", "Mastercard", "Amex", "MP"].map((m) => (
                <div
                  key={m}
                  className="border border-gray-800 text-center py-1.5 text-[9px] tracking-widest text-gray-600 uppercase"
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] tracking-widest text-gray-600 uppercase">
          <p>© 2026 GOWS Perfumerie. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a href="https://gonzaloorlandoni.vercel.app" className="text-[#C4A265] hover:text-[#D4B480] transition-colors">
              GO Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
