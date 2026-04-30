import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useToast } from "../../context/ToastContext";

const FALLBACK = "https://placehold.co/800x1066/0a0a0a/C4A265?text=GOWS+Perfumerie";

const Item = ({ id, nombre, precio, categoria, img, marca, stock, descripcion, intensidad, notas, bestseller, isNew, sizes }) => {
  const product = { id, nombre, precio, categoria, img, marca, stock, descripcion, intensidad, notas, bestseller, isNew, sizes };
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToast } = useToast();
  const [added, setAdded] = useState(false);

  const inWishlist = isInWishlist(id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    addToast(`${nombre} agregado al carrito 🛍️`, "success");
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    addToast(
      inWishlist ? `${nombre} eliminado de favoritos` : `${nombre} guardado en favoritos ❤️`,
      inWishlist ? "info" : "success"
    );
  };

  const categoryLabel = { niche: "NICHE", homme: "HOMME", femme: "FEMME", unisex: "UNISEX" };
  const isLowStock = stock <= 6;

  return (
    <Link to={`/item/${id}`} className="group block">
      <div className="bg-white overflow-hidden transition-all duration-400 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
          <img
            src={img}
            alt={nombre}
            onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK; }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Bestseller badge */}
          {bestseller && (
            <span className="absolute top-3 left-3 bg-[#C4A265] text-[#0A0A0A] text-[8px] tracking-widest uppercase px-2 py-1 font-bold">
              ★ Bestseller
            </span>
          )}

          {/* New badge */}
          {isNew && !bestseller && (
            <span className="absolute top-3 left-3 bg-white text-[#0A0A0A] text-[8px] tracking-widest uppercase px-2 py-1 font-bold border border-gray-200">
              Nuevo
            </span>
          )}

          {/* Low stock */}
          {isLowStock && (
            <span className="absolute bottom-14 left-3 bg-red-500 text-white text-[8px] tracking-widest uppercase px-2 py-1">
              ¡Últimas {stock}!
            </span>
          )}

          {/* Category badge */}
          <span
            className="absolute top-3 right-3 text-[9px] tracking-widest uppercase px-2 py-1 font-semibold"
            style={{ background: "rgba(196,162,101,0.9)", color: "#0A0A0A" }}
          >
            {categoryLabel[categoria] || categoria}
          </span>

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            aria-label={inWishlist ? "Quitar de favoritos" : "Agregar a favoritos"}
            className={`absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              inWishlist ? "bg-red-500 text-white" : "bg-white/80 text-gray-400 hover:bg-white hover:text-red-400"
            }`}
          >
            <Heart size={14} fill={inWishlist ? "currentColor" : "none"} />
          </button>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-4 py-2.5 text-[10px] tracking-widest uppercase font-semibold transition-all duration-300"
                style={{ background: added ? "#C4A265" : "#0A0A0A", color: "#fff" }}
              >
                <ShoppingBag size={13} />
                {added ? "Agregado" : "Al Carrito"}
              </button>
              <span className="flex items-center gap-1 bg-white/90 text-black px-3 py-2.5 text-[10px] tracking-widest uppercase">
                <Eye size={13} />
                Ver
              </span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-1">{marca}</p>
          <h3
            className="text-gray-900 text-lg font-light mb-1 leading-tight group-hover:text-[#C4A265] transition-colors duration-300"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {nombre}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-medium text-gray-900">USD ${precio}</span>
            <div className="w-6 h-px bg-[#C4A265]" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
