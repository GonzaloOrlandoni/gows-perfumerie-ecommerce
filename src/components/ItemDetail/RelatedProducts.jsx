import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
import { ShoppingBag } from "lucide-react";

const RelatedProducts = ({ currentId, categoria }) => {
  const [related, setRelated] = useState([]);
  const { addItem } = useCart();
  const { addToast } = useToast();

  useEffect(() => {
    getProducts()
      .then((all) =>
        all.filter((p) => p.categoria === categoria && p.id !== currentId)
      )
      .then((filtered) => setRelated(filtered.slice(0, 4)));
  }, [currentId, categoria]);

  if (related.length === 0) return null;

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    addToast(`${product.nombre} agregado al carrito`, "success");
  };

  return (
    <section className="mt-20 border-t border-gray-100 pt-16">
      <div className="text-center mb-10">
        <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-3">
          De la misma familia
        </p>
        <h2
          className="text-2xl font-light text-gray-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          También te puede interesar
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/item/${product.id}`} className="group block">
            <div className="bg-white overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <img
                  src={product.img}
                  alt={product.nombre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button
                  onClick={(e) => handleAdd(e, product)}
                  className="absolute bottom-0 left-0 right-0 bg-black/80 text-white py-2.5 text-[9px] tracking-[0.25em] uppercase flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0"
                >
                  <ShoppingBag size={12} /> Al carrito
                </button>
              </div>
              <div className="pt-3">
                <p className="text-[9px] tracking-widest text-gray-400 uppercase truncate">
                  {product.marca}
                </p>
                <p
                  className="text-sm font-light text-gray-900 truncate group-hover:text-[#C4A265] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {product.nombre}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">USD ${product.precio}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
