import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CartSidebar from './components/Cart/CartSidebar';
import ScrollToTop from './components/ui/ScrollToTop';
import AnnouncementBar from './components/ui/AnnouncementBar';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import Hero from './components/Hero/Hero';
import CategoryBanners from './components/Home/CategoryBanners';
import Testimonials from './components/Home/Testimonials';
import Newsletter from './components/Home/Newsletter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import WishlistPage from './components/Wishlist/WishlistPage';

const HomePage = () => (
  <>
    <Hero />
    <CategoryBanners />
    <ItemListContainer greeting="Descubrí tu Fragancia Ideal" />
    <Testimonials />
    <Newsletter />
  </>
);

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
    <p className="text-[#C4A265] text-[10px] tracking-[0.4em] uppercase mb-4">Error 404</p>
    <h1 className="text-7xl font-light text-gray-900 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
      Oops
    </h1>
    <p className="text-gray-500 text-sm tracking-wider mb-10">
      La página que buscás no existe o fue movida.
    </p>
    <a
      href="/"
      className="bg-black text-white px-10 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-[#C4A265] transition-colors duration-300"
    >
      Volver al Inicio
    </a>
  </div>
);

function App() {
  return (
    <HashRouter>
      <ToastProvider>
        <WishlistProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen" style={{ background: 'var(--warm-white)' }}>
              {/* Top announcement ticker */}
              <AnnouncementBar />
              <Navbar />
              <CartSidebar />

              {/* Floating elements */}
              <WhatsAppFloat />
              <ScrollToTop />

              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category/:categoryId" element={<ItemListContainer />} />
                  <Route path="/item/:itemId" element={<ItemDetail />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
            </div>
          </CartProvider>
        </WishlistProvider>
      </ToastProvider>
    </HashRouter>
  );
}

export default App;
