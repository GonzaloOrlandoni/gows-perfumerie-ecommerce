const perfumes = [
  // NICHE
  {
    id: "1",
    nombre: "Santal 33",
    marca: "Le Labo",
    precio: 210,
    categoria: "niche",
    descripcion: "Un ícono contemporáneo que redefine la esencia del sándalo. Notas de cardamomo, iris, violeta, cedro australiano y sándalo cremoso. La fragancia más icónica de la última década.",
    notas: "Cardamomo · Iris · Violeta · Cedro · Sándalo",
    intensidad: "Eau de Parfum",
    stock: 8,
    img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    nombre: "Baccarat Rouge 540",
    marca: "Maison Francis Kurkdjian",
    precio: 325,
    categoria: "niche",
    descripcion: "La fragancia más deseada del mundo. Azafrán luminoso, jazmín y amberwood se fusionan en una estela que permanece horas. Una obra maestra de la perfumería francesa.",
    notas: "Azafrán · Jazmín · Amberwood · Cedro · Almizcle",
    intensidad: "Eau de Parfum",
    stock: 4,
    img: "https://images.unsplash.com/photo-1583445013765-48c2201c8144?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    nombre: "Oud Wood",
    marca: "Tom Ford",
    precio: 280,
    categoria: "niche",
    descripcion: "Oud exótico, cedro chino, sándalo y vainilla en una composición que transporta a los mercados de Oriente. Oscuro, cálido y absolutamente único.",
    notas: "Oud · Sándalo · Cedro chino · Pimienta · Vainilla",
    intensidad: "Eau de Parfum",
    stock: 6,
    img: "https://images.unsplash.com/photo-1547887538-047409092ce7?auto=format&fit=crop&q=80&w=800",
  },
  // HOMME
  {
    id: "4",
    nombre: "Sauvage Elixir",
    marca: "Dior",
    precio: 160,
    categoria: "homme",
    descripcion: "La expresión más concentrada e intensa del Sauvage. Notas de canela picante, sándalo y nuez de gálbano. Para el hombre que no pasa desapercibido.",
    notas: "Pomelo · Nuez de gálbano · Canela · Sándalo",
    intensidad: "Parfum",
    stock: 15,
    img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    nombre: "Bleu de Chanel EDP",
    marca: "Chanel",
    precio: 145,
    categoria: "homme",
    descripcion: "Madera aromática fresca y elegante. Notas de limón siciliano, bergamota y menta se funden con cedro y sándalo. La fragancia del hombre moderno y sofisticado.",
    notas: "Limón · Bergamota · Menta · Cedro · Sándalo",
    intensidad: "Eau de Parfum",
    stock: 20,
    img: "https://images.unsplash.com/photo-1541643600914-78b084683702?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    nombre: "Y EDP Intense",
    marca: "Yves Saint Laurent",
    precio: 110,
    categoria: "homme",
    descripcion: "Fresco, moderno y audaz. Manzana verde brillante, bergamota e iris sobre una base de cedro y almizcle. El perfume que define una generación.",
    notas: "Manzana · Bergamota · Iris · Salvia · Cedro",
    intensidad: "Eau de Parfum",
    stock: 18,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=800",
  },
  // FEMME
  {
    id: "7",
    nombre: "Coco Mademoiselle",
    marca: "Chanel",
    precio: 165,
    categoria: "femme",
    descripcion: "Un ícono de la feminidad contemporánea. Apertura cítrica de naranja y mandarina seguida de un corazón floral de rosa y jazmín sobre base de pachulí y vetiver.",
    notas: "Naranja · Rosa · Jazmín · Pachulí · Vetiver",
    intensidad: "Eau de Parfum",
    stock: 14,
    img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "8",
    nombre: "Miss Dior Blooming Bouquet",
    marca: "Dior",
    precio: 130,
    categoria: "femme",
    descripcion: "Un ramo eterno de peonía, rosa damascena y almizcle blanco. Fresco, romántico y femenino. Un clásico renovado para la mujer de hoy.",
    notas: "Peonía · Rosa damascena · Almizcle blanco",
    intensidad: "Eau de Toilette",
    stock: 16,
    img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "9",
    nombre: "La Vie Est Belle",
    marca: "Lancôme",
    precio: 120,
    categoria: "femme",
    descripcion: "La felicidad hecha fragancia. Iris de Florencia, pralinée y vainilla bourbon crean una gourmand floral adictiva y atemporal que conquista a primera aspiración.",
    notas: "Iris · Pralinée · Vainilla bourbon · Pachulí",
    intensidad: "Eau de Parfum",
    stock: 22,
    img: "https://images.unsplash.com/photo-1590156562745-5b35b7c9c6d1?auto=format&fit=crop&q=80&w=800",
  },
  // UNISEX
  {
    id: "10",
    nombre: "CK One Gold",
    marca: "Calvin Klein",
    precio: 85,
    categoria: "unisex",
    descripcion: "Una relectura dorada del ícono unisex más famoso. Limón brillante, mandarina, flor de azahar y madera de cedro. Para compartir, para los dos.",
    notas: "Limón · Mandarina · Azahar · Ámbar · Cedro",
    intensidad: "Eau de Toilette",
    stock: 30,
    img: "https://images.unsplash.com/photo-1592945403431-76be2b79e47f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "11",
    nombre: "Acqua di Giò Profondo",
    marca: "Giorgio Armani",
    precio: 115,
    categoria: "unisex",
    descripcion: "El mar en estado puro. Mineralidad de bergamota y limón con mineralidad acuática, vetiver y madera oscura. La frescura mediterránea en su máxima expresión.",
    notas: "Bergamota · Mineralidad · Lavanda · Vetiver · Madera",
    intensidad: "Eau de Parfum",
    stock: 25,
    img: "https://images.unsplash.com/photo-1548449112-96a38a643324?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "12",
    nombre: "Libre Intense",
    marca: "Yves Saint Laurent",
    precio: 140,
    categoria: "unisex",
    descripcion: "La libertad hecha fragancia. Lavanda de Provenza, flor de naranjo y una base cálida de vainilla y almizcle. Para quienes no siguen las reglas.",
    notas: "Lavanda · Flor de naranjo · Vainilla · Almizcle",
    intensidad: "Eau de Parfum Intense",
    stock: 12,
    img: "https://images.unsplash.com/photo-1601295452898-4a2c29efa1d4?auto=format&fit=crop&q=80&w=800",
  },
];

export const getProducts = (categoria = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoria) {
        resolve(perfumes.filter((p) => p.categoria === categoria));
      } else {
        resolve(perfumes);
      }
    }, 600);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = perfumes.find((p) => p.id === id);
      if (product) resolve(product);
      else reject(new Error("Producto no encontrado"));
    }, 400);
  });
};
