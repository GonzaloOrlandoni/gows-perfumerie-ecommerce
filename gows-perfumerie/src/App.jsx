import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CartSidebar from './components/Cart/CartSidebar';
import Hero from './components/Hero/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen" style={{ background: 'var(--warm-white)' }}>
          <Navbar />
          <CartSidebar />

          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <ItemListContainer greeting="Descubrí tu Fragancia Ideal" />
                  </>
                }
              />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetail />} />
              <Route
                path="*"
                element={
                  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                    <h1 className="text-6xl font-light mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                      404
                    </h1>
                    <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">
                      Página no encontrada
                    </p>
                    <a href="/" className="bg-black text-white px-8 py-3 text-xs tracking-widest uppercase">
                      Volver al inicio
                    </a>
                  </div>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
