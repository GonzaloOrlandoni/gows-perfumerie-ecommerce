import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";

// Skeleton card
const SkeletonCard = () => (
  <div className="bg-white">
    <div className="skeleton aspect-[3/4] w-full" />
    <div className="p-4 space-y-2">
      <div className="skeleton h-3 w-1/2 rounded" />
      <div className="skeleton h-5 w-3/4 rounded" />
      <div className="skeleton h-3 w-1/4 rounded" />
    </div>
  </div>
);

const categoryTitles = {
  homme: { title: "HOMME", sub: "Para él — Frescas, amaderadas e intensas" },
  femme: { title: "FEMME", sub: "Para ella — Florales, gourmands y sensuales" },
  unisex: { title: "UNISEX", sub: "Sin fronteras — Para todos los géneros" },
  niche: { title: "NICHE", sub: "Alta perfumería — Exclusivas y únicas" },
};

const SORT_OPTIONS = [
  { value: "default", label: "Destacados" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "name-asc", label: "Nombre: A - Z" },
];

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");
  const [showSort, setShowSort] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((response) => {
        const filtered = categoryId
          ? response.filter((p) => p.categoria === categoryId)
          : response;
        setProducts(filtered);
        setSorted(filtered);
        setSortBy("default");
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  // Sort logic
  useEffect(() => {
    const arr = [...products];
    if (sortBy === "price-asc") arr.sort((a, b) => a.precio - b.precio);
    else if (sortBy === "price-desc") arr.sort((a, b) => b.precio - a.precio);
    else if (sortBy === "name-asc")
      arr.sort((a, b) => a.nombre.localeCompare(b.nombre));
    setSorted(arr);
  }, [sortBy, products]);

  const catInfo = categoryId ? categoryTitles[categoryId] : null;
  const currentSortLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label;

  return (
    <div
      id="catalogo"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in"
    >
      {/* Section header */}
      <div className="text-center mb-10">
        {catInfo ? (
          <>
            <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-3">
              {catInfo.sub}
            </p>
            <h2
              className="text-4xl font-light text-gray-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {catInfo.title}
            </h2>
          </>
        ) : (
          <>
            <p className="text-[10px] tracking-[0.4em] text-[#C4A265] uppercase mb-3">
              Colección Completa
            </p>
            <h2
              className="text-4xl font-light text-gray-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {greeting || "Todas las Fragancias"}
            </h2>
          </>
        )}
        <div className="w-8 h-px bg-[#C4A265] mx-auto mt-5" />
      </div>

      {/* Toolbar */}
      {!loading && sorted.length > 0 && (
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs text-gray-400 tracking-widest">
            {sorted.length} {sorted.length === 1 ? "fragancia" : "fragancias"}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-xs tracking-widest text-gray-600 hover:text-[#C4A265] transition-colors border border-gray-200 px-4 py-2"
            >
              <SlidersHorizontal size={13} />
              {currentSortLabel}
            </button>
            {showSort && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 shadow-lg z-20 w-52">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setShowSort(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-xs tracking-wider transition-colors ${
                      sortBy === opt.value
                        ? "text-[#C4A265] bg-gray-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : sorted.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🌸</p>
          <p className="text-gray-400 text-sm tracking-wider">
            No hay fragancias en esta categoría por el momento.
          </p>
        </div>
      ) : (
        <ItemList productos={sorted} />
      )}
    </div>
  );
};

export default ItemListContainer;
