import { useState, useEffect, useRef } from "react";
import { X, Search } from "lucide-react";
import { getProducts } from "../../asyncMock";
import { Link } from "react-router-dom";

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  // Load all products once
  useEffect(() => {
    getProducts().then(setAllProducts);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Filter products
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allProducts.filter(
      (p) =>
        p.nombre.toLowerCase().includes(q) ||
        p.marca.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q) ||
        (p.descripcion && p.descripcion.toLowerCase().includes(q)),
    );
    setResults(filtered.slice(0, 6));
  }, [query, allProducts]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl animate-fade-in">
        <div className="max-w-3xl mx-auto px-4 py-6">
          {/* Search input */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
            <Search size={20} className="text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar fragancias, marcas..."
              className="flex-1 text-lg font-light text-gray-900 outline-none placeholder:text-gray-300"
            />
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Results */}
          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            {query && results.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-sm tracking-wider">
                  Sin resultados para "{query}"
                </p>
              </div>
            )}

            {!query && (
              <div className="py-6">
                <p className="text-[10px] tracking-[0.3em] text-[#C4A265] uppercase mb-4">
                  Categorías populares
                </p>
                <div className="flex flex-wrap gap-2">
                  {["niche", "homme", "femme", "unisex"].map((cat) => (
                    <Link
                      key={cat}
                      to={`/category/${cat}`}
                      onClick={onClose}
                      className="px-4 py-2 border border-gray-200 text-xs tracking-widest uppercase text-gray-600 hover:border-[#C4A265] hover:text-[#C4A265] transition-all duration-300"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {results.length > 0 && (
              <div className="space-y-1">
                <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-3">
                  {results.length} resultado{results.length > 1 ? "s" : ""}
                </p>
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/item/${product.id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-14 h-16 overflow-hidden bg-gray-50 flex-shrink-0">
                      <img
                        src={product.img}
                        alt={product.nombre}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/800x1066/0a0a0a/C4A265?text=GOWS+Perfumerie";
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] tracking-widest text-gray-400 uppercase">
                        {product.marca}
                      </p>
                      <p
                        className="text-base font-light text-gray-900 group-hover:text-[#C4A265] transition-colors truncate"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {product.nombre}
                      </p>
                      <p className="text-xs text-gray-400 capitalize">
                        {product.categoria}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900 shrink-0">
                      USD ${product.precio}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
