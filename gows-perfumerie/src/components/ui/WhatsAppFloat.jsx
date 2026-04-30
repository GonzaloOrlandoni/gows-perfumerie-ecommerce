import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5491128831895?text=Hola%20GOWS%20Perfumerie!%20Me%20gustar%C3%ADa%20consultar%20sobre%20sus%20fragancias%20%F0%9F%8C%B9"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip */}
      <span className="mr-3 bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap translate-x-2 group-hover:translate-x-0">
        ¿Necesitás ayuda? 💬
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] shadow-xl hover:scale-110 transition-transform duration-300">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle size={26} className="text-white relative z-10" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
