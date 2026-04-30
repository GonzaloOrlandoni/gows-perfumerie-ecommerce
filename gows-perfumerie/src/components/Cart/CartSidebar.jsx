import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

const CartSidebar = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    handleWhatsAppCheckout,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <aside className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2
              className="text-xl font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Mi Carrito
            </h2>
            <p className="text-xs text-gray-400 tracking-wider">
              {getTotalItems()} {getTotalItems() === 1 ? "artículo" : "artículos"}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingBag size={48} className="text-gray-200 mb-4" />
              <p
                className="text-xl font-light text-gray-500 mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Tu carrito está vacío
              </p>
              <p className="text-sm text-gray-400">
                Explorá nuestra colección de fragancias
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-gray-50">
                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden bg-gray-50">
                    <img
                      src={item.img}
                      alt={item.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                      {item.marca}
                    </p>
                    <p
                      className="text-sm font-light text-gray-900 leading-tight"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {item.nombre}
                    </p>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      USD ${(item.precio * item.quantity).toLocaleString()}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="px-3 text-xs border-x border-gray-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4">
            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="text-xs tracking-widest text-gray-400 uppercase">
                Total Estimado
              </span>
              <span className="text-xl font-light" style={{ fontFamily: "var(--font-serif)" }}>
                USD ${getTotalPrice().toLocaleString()}
              </span>
            </div>

            <p className="text-[10px] text-gray-400 text-center">
              Precio final + envío coordinado por WhatsApp
            </p>

            {/* Checkout CTA */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#20BC5A] transition-colors duration-300"
            >
              <MessageCircle size={18} />
              Finalizar por WhatsApp
            </button>

            {/* Clear */}
            <button
              onClick={clearCart}
              className="w-full text-xs text-gray-400 hover:text-red-400 tracking-widest uppercase transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartSidebar;
