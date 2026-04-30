import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";

const WishlistPage = () => {
  const { wishlist, removeItem, clearWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();
  const { addToast } = useToast();

  const handleMoveToCart = (product) => {
    addItem(product);
    toggleWishlist(product);
    addToast(`${product.nombre} movido al carrito 🛍️`, "success");
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-3">Tu selección personal</p>
        <h1 className="text-4xl font-light text-gray-900" style={{ fontFamily: "var(--font-serif)" }}>
          Favoritos
        </h1>
        <div className="w-8 h-px bg-[#C4A265] mx-auto mt-4" />
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Heart size={48} className="text-gray-200 mb-6" />
          <p className="text-xl font-light text-gray-500 mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            Aún no tenés favoritos guardados
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Explorá nuestra colección y guardá las fragancias que más te gusten
          </p>
          <Link
            to="/"
            className="bg-black text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#C4A265] transition-colors"
          >
            Explorar Fragancias
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-8">
            <p className="text-xs text-gray-400 tracking-widest">
              {wishlist.length} {wishlist.length === 1 ? "fragancia" : "fragancias"} guardadas
            </p>
            <button
              onClick={clearWishlist}
              className="text-xs text-gray-400 hover:text-red-400 tracking-widest uppercase transition-colors flex items-center gap-2"
            >
              <Trash2 size={12} /> Limpiar todo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white group">
                <Link to={`/item/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                    <img
                      src={product.img}
                      alt={product.nombre}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-[10px] tracking-widest text-gray-400 uppercase">{product.marca}</p>
                  <Link to={`/item/${product.id}`}>
                    <p
                      className="text-base font-light text-gray-900 hover:text-[#C4A265] transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {product.nombre}
                    </p>
                  </Link>
                  <p className="text-sm text-gray-500 mt-1 mb-4">USD ${product.precio}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-black text-white text-[10px] tracking-widest uppercase hover:bg-[#C4A265] transition-colors"
                    >
                      <ShoppingBag size={12} /> Al carrito
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      aria-label="Quitar de favoritos"
                      className="p-2.5 border border-gray-200 text-gray-400 hover:text-red-400 hover:border-red-200 transition-colors"
                    >
                      <Heart size={14} fill="currentColor" className="text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default WishlistPage;
