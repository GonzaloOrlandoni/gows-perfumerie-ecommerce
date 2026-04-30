// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ⚠️  REEMPLAZÁ con tus credenciales reales de Firebase Console
// Firebase Console → Tu Proyecto → Project Settings → Your apps
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO_ID",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
  measurementId: "TU_MEASUREMENT_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (base de datos)
export const db = getFirestore(app);

// Initialize Analytics (opcional)
// export const analytics = getAnalytics(app);

export default app;

/*
  📋 INSTRUCCIONES PARA CONECTAR FIREBASE:
  
  1. Ir a https://console.firebase.google.com/
  2. Crear un nuevo proyecto o seleccionar el existente
  3. Ir a Project Settings → Your apps → Web app (</>)
  4. Copiar el firebaseConfig y reemplazar arriba
  
  5. En Firestore Database:
     - Crear colección "productos"
     - Subir los productos del asyncMock.js como documentos
     - Configurar reglas de seguridad (leer: público, escribir: autenticado)
  
  6. En src/asyncMock.js, reemplazar getProducts por:
     import { collection, getDocs, doc, getDoc } from "firebase/firestore";
     import { db } from "../firebase/config";
     
     export const getProducts = async () => {
       const snap = await getDocs(collection(db, "productos"));
       return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
     };
     
     export const getProductById = async (id) => {
       const snap = await getDoc(doc(db, "productos", id));
       if (!snap.exists()) throw new Error("Producto no encontrado");
       return { id: snap.id, ...snap.data() };
     };
*/
