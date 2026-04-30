import { ShoppingCart, Search, Menu, X, Heart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import SearchModal from "../Search/SearchModal";

const Navbar = () => {
  const { getTotalItems, setIsCartOpen } = useCart();
  const { wishlist } = useWishlist();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const totalItems = getTotalItems();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#C4A265] text-[10px] tracking-[0.3em] uppercase font-medium"
      : "text-gray-500 text-[10px] tracking-[0.3em] uppercase hover:text-gray-900 transition-colors duration-300";

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex flex-col items-center md:items-start">
              <span
                className="text-2xl font-light tracking-[0.35em] text-gray-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                GOWS
              </span>
              <span className="text-[8px] font-light tracking-[0.5em] text-gray-400 -mt-1 uppercase">
                Perfumerie
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-10">
              <NavLink to="/category/homme" className={navLinkClass}>Homme</NavLink>
              <NavLink to="/category/femme" className={navLinkClass}>Femme</NavLink>
              <NavLink to="/category/unisex" className={navLinkClass}>Unisex</NavLink>
              <NavLink to="/category/niche" className={navLinkClass}>Niche</NavLink>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-5">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Buscar"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                aria-label="Favoritos"
                className="relative text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Heart className="w-[18px] h-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative group"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="w-[18px] h-[18px] text-gray-500 group-hover:text-gray-900 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C4A265] text-black text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu */}
      {isMobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsMobileOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-lg font-light tracking-widest" style={{ fontFamily: "var(--font-serif)" }}>
                GOWS Perfumerie
              </span>
              <button onClick={() => setIsMobileOpen(false)}><X size={20} /></button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-6">
              {[
                { to: "/", label: "Inicio" },
                { to: "/category/homme", label: "Homme" },
                { to: "/category/femme", label: "Femme" },
                { to: "/category/unisex", label: "Unisex" },
                { to: "/category/niche", label: "Niche" },
                { to: "/wishlist", label: `Favoritos (${wishlist.length})` },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-xs tracking-[0.3em] uppercase text-gray-600 hover:text-[#C4A265] transition-colors"
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto px-6 pb-8">
              <p className="text-[10px] text-gray-400 tracking-widest">Envíos a todo el país · Pago en cuotas</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
