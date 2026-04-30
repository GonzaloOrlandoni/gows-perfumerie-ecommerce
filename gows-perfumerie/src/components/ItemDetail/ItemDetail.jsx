import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import { useCart } from "../../context/CartContext";
import { ShoppingBag, ArrowLeft, Minus, Plus, MessageCircle } from "lucide-react";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setLoading(true);
    setError(false);
    getProductById(itemId)
      .then(setProduct)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [itemId]);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  // Skeleton
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16">
        <div className="skeleton aspect-[3/4] w-full rounded" />
        <div className="space-y-4 pt-8">
          <div className="skeleton h-4 w-24 rounded" />
          <div className="skeleton h-10 w-3/4 rounded" />
          <div className="skeleton h-6 w-1/4 rounded" />
          <div className="skeleton h-32 w-full rounded" />
          <div className="skeleton h-12 w-full rounded" />
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-5xl mb-4">🔍</p>
        <h2 className="text-2xl font-light mb-2" style={{ fontFamily: "var(--font-serif)" }}>
          Fragancia no encontrada
        </h2>
        <p className="text-gray-500 mb-8">El producto que buscás no existe o fue removido.</p>
        <Link to="/" className="bg-black text-white px-8 py-3 text-xs tracking-widest uppercase">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const categoryLabels = {
    niche: "Fragancia Niche",
    homme: "Para Él",
    femme: "Para Ella",
    unisex: "Unisex",
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      {/* Breadcrumb */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#C4A265] tracking-widest uppercase mb-10 transition-colors duration-300"
      >
        <ArrowLeft size={14} /> Volver al catálogo
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-gray-50">
            <img
              src={product.img}
              alt={product.nombre}
              className="w-full h-full object-cover"
            />
          </div>
          {product.stock <= 6 && (
            <span className="absolute top-4 left-4 bg-black text-white text-[9px] tracking-widest uppercase px-3 py-1">
              Últimas {product.stock} unidades
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-2">
            {categoryLabels[product.categoria]}
          </p>

          {/* Brand */}
          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-3">
            {product.marca}
          </p>

          {/* Name */}
          <h1
            className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {product.nombre}
          </h1>

          {/* Divider */}
          <div className="w-10 h-px bg-[#C4A265] my-6" />

          {/* Price */}
          <p className="text-2xl font-light text-gray-900 mb-1">
            USD ${product.precio}
          </p>
          <p className="text-xs text-gray-400 tracking-wider mb-6">
            {product.intensidad}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {product.descripcion}
          </p>

          {/* Notes */}
          {product.notas && (
            <div className="border-t border-gray-100 pt-5 mb-8">
              <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-2">Pirámide Olfativa</p>
              <p className="text-sm text-gray-700 font-light italic" style={{ fontFamily: "var(--font-serif)" }}>
                {product.notas}
              </p>
            </div>
          )}

          {/* Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">Cantidad</span>
            <div className="flex items-center border border-gray-200">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="px-5 py-2 text-sm font-medium border-x border-gray-200 min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            <span className="text-xs text-gray-400">{product.stock} disponibles</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAdd}
              className="flex-1 flex items-center justify-center gap-2 py-4 text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300"
              style={{
                background: added ? "#C4A265" : "#0A0A0A",
                color: "#fff",
              }}
            >
              <ShoppingBag size={16} />
              {added ? "¡Agregado al carrito!" : "Agregar al Carrito"}
            </button>

            <a
              href={`https://wa.me/5491128831895?text=${encodeURIComponent(`Hola! Me interesa el perfume ${product.nombre} de ${product.marca}. ¿Tiene disponibilidad?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 border border-gray-200 text-xs tracking-[0.2em] uppercase hover:border-[#C4A265] hover:text-[#C4A265] transition-all duration-300"
            >
              <MessageCircle size={16} />
              Consultar
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
            <div className="text-center">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">Envío</p>
              <p className="text-xs text-gray-700 mt-1">Todo el país</p>
            </div>
            <div className="text-center border-x border-gray-100">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">Garantía</p>
              <p className="text-xs text-gray-700 mt-1">100% Original</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">Pago</p>
              <p className="text-xs text-gray-700 mt-1">Cuotas sin interés</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
