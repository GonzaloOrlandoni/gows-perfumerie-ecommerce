import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

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

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((response) => {
        if (categoryId) {
          setProducts(response.filter((p) => p.categoria === categoryId));
        } else {
          setProducts(response);
        }
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  const catInfo = categoryId ? categoryTitles[categoryId] : null;

  return (
    <div id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      {/* Section header */}
      <div className="text-center mb-12">
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

      {/* Loading skeletons */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🌸</p>
          <p className="text-gray-400 text-sm tracking-wider">
            No hay fragancias en esta categoría por el momento.
          </p>
        </div>
      ) : (
        <>
          <p className="text-xs text-gray-400 tracking-widest mb-8 text-center">
            {products.length} {products.length === 1 ? "fragancia" : "fragancias"}
          </p>
          <ItemList productos={products} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
