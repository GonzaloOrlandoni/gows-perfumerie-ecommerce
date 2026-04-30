import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver al inicio"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-lg hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-300"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
