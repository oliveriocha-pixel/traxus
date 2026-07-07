// Fuente única de casos de éxito de TRAXUS.
// Consumida por el Home (components/home/cases-section.tsx) y por /casos (app/casos/page.tsx).
// Cada caso lleva un campo `product` ("freeze" | "cedi" | "vna") para poder cruzarlo en el
// futuro con su página de producto, y un flag `featured` para los 3 destacados del Home
// (uno por producto).

export type CaseProduct = "freeze" | "cedi" | "vna"
export type CaseColor = "freeze" | "amber" | "dark"

export interface CaseStudy {
  slug: string
  product: CaseProduct
  featured: boolean
  name: string
  /** Subtítulo largo para la página /casos */
  subtitle: string
  /** Subtítulo corto para las tarjetas del Home */
  subtitleShort: string
  /** Descripción larga para la página /casos */
  text: string
  /** Descripción corta para las tarjetas del Home */
  textShort: string
  /** Etiquetas largas para /casos */
  applications: string[]
  /** Etiquetas cortas para el Home */
  applicationsShort: string[]
  image: string
  alt: string
  color: CaseColor
}

export const cases: CaseStudy[] = [
  {
    slug: "centro-refrigerado-bajio",
    product: "freeze",
    featured: true,
    name: "Centro Refrigerado Bajío",
    subtitle: "Infraestructura de cadena fría — Toluca",
    subtitleShort: "Cadena fría — Toluca",
    text: "La operación requería un piso industrial preparado para exposición continua a humedad, bajas temperaturas y tráfico intensivo de montacargas dentro de áreas de refrigeración y congelación.",
    textShort:
      "Piso industrial para exposición continua a humedad, bajas temperaturas y tráfico intensivo en áreas de refrigeración y congelación.",
    applications: [
      "Cold storage",
      "Cámaras de refrigeración",
      "Operación de congelación",
      "Industria alimentaria",
      "Cadena fría industrial",
    ],
    applicationsShort: ["Cold storage", "Cámaras de refrigeración", "Cadena fría"],
    image: "/images/casos/cold-storage-toluca.jpg",
    alt: "Piso industrial para operación refrigerada y almacenamiento cold storage",
    color: "freeze",
  },
  {
    slug: "centro-logistico-norte",
    product: "cedi",
    featured: true,
    name: "Centro Logístico Norte",
    subtitle: "Plataforma logística de alta densidad — Estado de México",
    subtitleShort: "Alta densidad — Estado de México",
    text: "La operación requería una superficie industrial preparada para almacenamiento de alta densidad, tráfico repetitivo de montacargas y operación logística continua dentro de un centro de distribución de gran escala.",
    textShort:
      "Superficie industrial para almacenamiento de alta densidad, tráfico repetitivo de montacargas y operación logística continua.",
    applications: [
      "Centros logísticos",
      "Centros de distribución",
      "Fulfillment",
      "Almacenamiento industrial",
      "Tráfico intensivo de montacargas",
    ],
    applicationsShort: ["Centros logísticos", "Fulfillment", "Distribución"],
    image: "/images/casos/centro-distribucion.jpg",
    alt: "Piso industrial logístico para centro de distribución de alta densidad",
    color: "dark",
  },
  {
    slug: "plataforma-logistica-occidente",
    product: "vna",
    featured: true,
    name: "Plataforma Logística Occidente",
    subtitle: "Almacén de pasillos angostos (VNA) — Jalisco",
    subtitleShort: "Pasillos angostos — Jalisco",
    text: "La operación requería un piso de planicidad crítica para equipos trilaterales en pasillos angostos, con almacenamiento de alta densidad y tolerancias milimétricas sostenidas a gran altura.",
    textShort:
      "Piso de planicidad crítica para equipos trilaterales en pasillos angostos, con tolerancias milimétricas a gran altura.",
    applications: [
      "Almacenes VNA",
      "Pasillos angostos",
      "Equipos trilaterales",
      "Racking de gran altura",
      "Planicidad certificada Fmin",
    ],
    applicationsShort: ["Almacenes VNA", "Pasillos angostos", "Planicidad Fmin"],
    image: "/images/casos/logistico-jalisco.jpg",
    alt: "Plataforma logística de pasillos angostos con piso de planicidad certificada",
    color: "amber",
  },
  {
    slug: "plataforma-aeroindustrial-bajio",
    product: "cedi",
    featured: false,
    name: "Plataforma Aeroindustrial Bajío",
    subtitle: "Manufactura especializada — Querétaro",
    subtitleShort: "Manufactura — Querétaro",
    text: "El proyecto requería una superficie industrial estable para procesos de manufactura continua, circulación industrial especializada y operación de alta precisión.",
    textShort:
      "Superficie industrial estable para procesos de manufactura continua y operación de alta precisión.",
    applications: [
      "Manufactura industrial",
      "Industria especializada",
      "Producción continua",
      "Operación de precisión",
      "Instalaciones industriales",
    ],
    applicationsShort: ["Manufactura industrial", "Producción continua", "Alta precisión"],
    image: "/images/casos/manufactura-aeroespacial.jpg",
    alt: "Piso industrial para manufactura aeroespacial y operación continua",
    color: "dark",
  },
  {
    slug: "complejo-industrial-central",
    product: "cedi",
    featured: false,
    name: "Complejo Industrial Central",
    subtitle: "Instalación industrial y almacenamiento especializado — Estado de México",
    subtitleShort: "Almacenamiento especializado — Edo. de México",
    text: "El proyecto requería una superficie industrial preparada para almacenamiento especializado, circulación industrial y operación continua bajo condiciones de alta exigencia operacional.",
    textShort:
      "Superficie industrial para almacenamiento especializado, circulación industrial y operación continua de alta exigencia.",
    applications: [
      "Almacenamiento especializado",
      "Instalaciones industriales",
      "Operación continua",
      "Industria química",
      "Manufactura industrial",
    ],
    applicationsShort: ["Almacenamiento especializado", "Operación continua", "Industria química"],
    image: "/images/casos/almacenamiento-especializado.jpg",
    alt: "Piso industrial para instalación industrial y almacenamiento especializado",
    color: "amber",
  },
  {
    slug: "centro-distribucion-pacifico",
    product: "cedi",
    featured: false,
    name: "Centro de Distribución Pacífico",
    subtitle: "Operación logística regional — Guadalajara",
    subtitleShort: "Logística regional — Guadalajara",
    text: "La operación requería una superficie preparada para movimiento continuo de mercancía, almacenamiento industrial de alta rotación y circulación repetitiva de montacargas dentro de áreas logísticas y de distribución.",
    textShort:
      "Superficie para movimiento continuo de mercancía, alta rotación y circulación repetitiva de montacargas.",
    applications: [
      "Centros de distribución",
      "Operación logística",
      "Almacenamiento industrial",
      "Plataformas logísticas",
      "Tráfico intensivo de montacargas",
    ],
    applicationsShort: ["Centros de distribución", "Operación logística", "Alta rotación"],
    image: "/images/casos/centro-distribucion-guadalajara.jpg",
    alt: "Piso industrial para centro de distribución y operación logística",
    color: "dark",
  },
]

/** Los 3 casos destacados del Home — uno por producto (Freeze / CEDI / VNA). */
export const featuredCases: CaseStudy[] = cases.filter((c) => c.featured)
