# 🌸 GOWS Perfumerie

<div align="center">

![GOWS Perfumerie Banner](./public/preview.png)

**E-commerce de fragancias de alta gama · Luxury Perfume Store**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Firebase](https://img.shields.io/badge/Firebase-Ready-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)

[Ver Demo](#) · [Reportar Bug](https://github.com/GonzaloOrlandoni/gows-perfumerie-ecommerce/issues) · [Ver Portfolio](https://gonzaloorlandoni.vercel.app)

</div>

---

## 📖 Descripción

**GOWS Perfumerie** es un e-commerce de fragancias premium desarrollado con React 19 y Vite. Diseñado con una estética de lujo editorial (inspirado en marcas como Le Labo y Byredo), el proyecto integra un sistema de carrito persistente, favoritos, búsqueda en tiempo real y checkout directo a WhatsApp.

Desarrollado como parte del portfolio de **[GO Web Solutions](https://gonzaloorlandoni.vercel.app)** — Agencia de Diseño Web.

---

## ✨ Features

| Feature                        | Descripción                                                  |
| ------------------------------ | ------------------------------------------------------------ |
| 🛍️ **Carrito persistente**     | Estado guardado en `localStorage`, sobrevive al refresco     |
| ❤️ **Wishlist / Favoritos**    | Guardá productos para después, también persiste              |
| 🔍 **Búsqueda en tiempo real** | Filtra por nombre, marca, categoría y descripción            |
| 🔔 **Sistema de Toasts**       | Notificaciones success/error/info con auto-dismiss           |
| 📦 **Catálogo completo**       | 12 fragancias en 4 categorías (Niche, Homme, Femme, Unisex)  |
| 🔽 **Ordenar productos**       | Por precio (asc/desc) y nombre (A-Z)                         |
| 📱 **Mobile responsive**       | Menú hamburguesa, diseño adaptativo completo                 |
| 🌟 **Productos relacionados**  | En la página de detalle, productos de la misma categoría     |
| 💬 **Checkout por WhatsApp**   | Mensaje pre-formateado con el detalle del pedido             |
| 🏷️ **Category banners**        | Grid visual de navegación por categoría                      |
| ⭐ **Testimonios**             | Sección de reseñas de clientes                               |
| 📧 **Newsletter**              | Captura de email para suscripción                            |
| 🔝 **Scroll to top**           | Botón flotante para volver al inicio                         |
| 🔥 **Firebase ready**          | Config lista para conectar Firestore como base de datos real |

---

## 🛠️ Tech Stack

```
Frontend:
├── React 19          → UI y gestión de estado
├── Vite 7            → Bundler y dev server ultrarrápido
├── TailwindCSS 4     → Utility-first styling
├── React Router 7    → Client-side routing (SPA)
└── Lucide React      → Iconografía consistente

Estado Global:
├── CartContext       → Carrito de compras
├── WishlistContext   → Productos favoritos
└── ToastContext      → Notificaciones

Backend / Infraestructura:
└── Firebase          → Firestore (listo para conectar)

Tipografía:
├── Cormorant Garamond → Headings luxuriosos (Google Fonts)
└── Inter              → Body text limpio
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js `>=18`
- npm `>=9`

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/GonzaloOrlandoni/gows-perfumerie-ecommerce.git

# 2. Entrar al directorio del proyecto
cd gows-perfumerie-ecommerce/gows-perfumerie

# 3. Instalar dependencias
npm install

# 4. Correr en modo desarrollo
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en el navegador.

### Otros comandos

```bash
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Lint con ESLint
```

---

## 🔥 Conectar Firebase (opcional)

El proyecto actualmente usa datos mock (`asyncMock.js`). Para conectar una base de datos real:

**1. Configurar credenciales**

Editá `src/firebase/config.js` con tus credenciales de [Firebase Console](https://console.firebase.google.com):

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  // ...
};
```

**2. Crear colección en Firestore**

En Firestore Database, creá una colección llamada `productos` y subí los documentos del archivo `asyncMock.js`.

**3. Actualizar las funciones de datos**

En `asyncMock.js`, reemplazá `getProducts` y `getProductById` con las versiones de Firestore que se encuentran comentadas en `src/firebase/config.js`.

---

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                          # Root: providers + routing
├── index.css                        # Design tokens (gold palette, fonts)
├── asyncMock.js                     # 12 productos (reemplazable por Firebase)
│
├── context/
│   ├── CartContext.jsx              # Carrito global + checkout WhatsApp
│   ├── WishlistContext.jsx          # Favoritos persistentes
│   └── ToastContext.jsx             # Sistema de notificaciones
│
├── firebase/
│   └── config.js                    # Firebase setup + instrucciones
│
└── components/
    ├── Navbar/Navbar.jsx            # Navbar: search, wishlist, cart, mobile
    ├── Hero/Hero.jsx                # Hero landing luxury
    ├── Home/
    │   ├── CategoryBanners.jsx      # Grid visual de categorías
    │   ├── Testimonials.jsx         # Reseñas de clientes
    │   └── Newsletter.jsx           # Captura de email
    ├── Item/Item.jsx                # Product card + wishlist + toast
    ├── ItemList/ItemList.jsx        # Grid de productos
    ├── ItemListContainer/           # Contenedor: fetch + sort + skeleton
    ├── ItemDetail/
    │   ├── ItemDetail.jsx           # Página detalle completa
    │   └── RelatedProducts.jsx      # Productos relacionados
    ├── Cart/CartSidebar.jsx         # Carrito lateral slide-in
    ├── Search/SearchModal.jsx       # Modal de búsqueda en tiempo real
    ├── Wishlist/WishlistPage.jsx    # Página de favoritos
    ├── Footer/Footer.jsx            # Footer dark luxury
    └── ui/ScrollToTop.jsx           # Botón scroll-to-top
```

---

## 🌐 Rutas

| Ruta                    | Componente          | Descripción                                          |
| ----------------------- | ------------------- | ---------------------------------------------------- |
| `/`                     | `HomePage`          | Hero + Banners + Catálogo + Testimonios + Newsletter |
| `/category/:categoryId` | `ItemListContainer` | Catálogo filtrado (homme, femme, unisex, niche)      |
| `/item/:itemId`         | `ItemDetail`        | Detalle de producto + relacionados                   |
| `/wishlist`             | `WishlistPage`      | Productos guardados como favoritos                   |
| `*`                     | `NotFound`          | Página 404 elegante                                  |

---

## 📦 Catálogo de Productos

| #   | Nombre                     | Marca                    | Categoría | Precio   |
| --- | -------------------------- | ------------------------ | --------- | -------- |
| 1   | Santal 33                  | Le Labo                  | Niche     | USD $210 |
| 2   | Baccarat Rouge 540         | Maison Francis Kurkdjian | Niche     | USD $325 |
| 3   | Oud Wood                   | Tom Ford                 | Niche     | USD $280 |
| 4   | Sauvage Elixir             | Dior                     | Homme     | USD $160 |
| 5   | Bleu de Chanel EDP         | Chanel                   | Homme     | USD $145 |
| 6   | Y EDP Intense              | YSL                      | Homme     | USD $110 |
| 7   | Coco Mademoiselle          | Chanel                   | Femme     | USD $165 |
| 8   | Miss Dior Blooming Bouquet | Dior                     | Femme     | USD $130 |
| 9   | La Vie Est Belle           | Lancôme                  | Femme     | USD $120 |
| 10  | CK One Gold                | Calvin Klein             | Unisex    | USD $85  |
| 11  | Acqua di Giò Profondo      | Giorgio Armani           | Unisex    | USD $115 |
| 12  | Libre Intense              | YSL                      | Unisex    | USD $140 |

---

## 📞 Contacto y Checkout

El checkout está integrado con **WhatsApp** al número `+54 9 11 2883-1895`. Al finalizar la compra, se genera automáticamente un mensaje formateado con los productos, cantidades y total.

---

## 👨‍💻 Autor

**Gonzalo Orlandoni** — GO Web Solutions

[![Portfolio](https://img.shields.io/badge/Portfolio-gonzaloorlandoni.vercel.app-black?style=flat-square)](https://gonzaloorlandoni.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-GonzaloOrlandoni-181717?style=flat-square&logo=github)](https://github.com/GonzaloOrlandoni)
[![Email](https://img.shields.io/badge/Email-gowebsolutions4@gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:gowebsolutions4@gmail.com)

---

## 📄 Licencia

Este proyecto es parte del portfolio de **GO Web Solutions**. Todos los derechos reservados © 2026.
