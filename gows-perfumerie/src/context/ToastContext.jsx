import { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

const ToastContext = createContext();

const ICONS = {
  success: <CheckCircle size={18} className="text-emerald-400 shrink-0" />,
  error: <XCircle size={18} className="text-red-400 shrink-0" />,
  info: <Info size={18} className="text-blue-400 shrink-0" />,
};

const BORDERS = {
  success: "border-l-emerald-400",
  error: "border-l-red-400",
  info: "border-l-blue-400",
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type, visible: true }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Toast container */}
      <div
        className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-3 pointer-events-none"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 bg-[#0A0A0A]/95 backdrop-blur-sm border-l-4 ${BORDERS[toast.type]} text-white px-4 py-3 rounded-r-lg shadow-2xl max-w-sm min-w-[280px] animate-fade-in`}
          >
            {ICONS[toast.type]}
            <p className="text-sm font-light flex-1">{toast.message}</p>
            <button
              onClick={() => dismiss(toast.id)}
              className="text-gray-500 hover:text-white transition-colors ml-2 pointer-events-auto"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de ToastProvider");
  return ctx;
};
