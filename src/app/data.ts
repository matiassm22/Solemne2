export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  benefits: string[];
  usage: string;
  activePrinciples: string;
  care: string;
  image: string;
  category: string;
  codigo: string;
  estado: string;
  cantidad: number;
}

export const plantsData: Plant[] = [
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis miller",
    benefits: ["Cicatrizante", "Hidratante", "Antiinflamatorio"],
    usage: "Aplicación tópica del gel interno en quemaduras o heridas leves.",
    activePrinciples: "Aloína, vitaminas, minerales, enzimas.",
    care: "Requiere luz solar indirecta y riego escaso (cada 2-3 semanas).",
    image: "https://images.unsplash.com/photo-1684913127590-54e08d09a34b?w=800&q=80&auto=format&fit=crop",
    category: "Cicatrizante",
    codigo: "PL-001",
    estado: "Bueno",
    cantidad: 25
  },
  {
    id: "menta",
    name: "Menta",
    scientificName: "Mentha spicata",
    benefits: ["Digestiva", "Alivia el dolor de cabeza", "Refrescante"],
    usage: "Infusión de hojas frescas o secas, 2-3 veces al día.",
    activePrinciples: "Mentol, mentona, flavonoides.",
    care: "Mucha agua y sombra parcial. Se propaga fácilmente.",
    image: "https://images.unsplash.com/photo-1618130070080-91f4d55a2383?w=800&q=80&auto=format&fit=crop",
    category: "Digestiva",
    codigo: "PL-002",
    estado: "Bueno",
    cantidad: 40
  },
  {
    id: "manzanilla",
    name: "Manzanilla",
    scientificName: "Matricaria chamomilla",
    benefits: ["Calmante", "Digestiva", "Antiinflamatoria"],
    usage: "Infusión de flores secas antes de dormir o después de comer.",
    activePrinciples: "Camazuleno, apigenina, bisabolol.",
    care: "Pleno sol, riego moderado. Suelo bien drenado.",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80&auto=format&fit=crop",
    category: "Calmante",
    codigo: "PL-003",
    estado: "Crítico",
    cantidad: 5
  },
  {
    id: "romero",
    name: "Romero",
    scientificName: "Salvia rosmarinus",
    benefits: ["Estimulante cognitivo", "Antioxidante", "Digestivo"],
    usage: "Infusión, aceite esencial, o uso culinario.",
    activePrinciples: "Ácido rosmarínico, alcanfor, carnosol.",
    care: "Mucho sol, poca agua. Sensible al exceso de humedad.",
    image: "https://images.unsplash.com/photo-1607721098274-e54cbfab475d?w=800&q=80&auto=format&fit=crop",
    category: "Estimulante",
    codigo: "PL-004",
    estado: "Bueno",
    cantidad: 15
  },
  {
    id: "lavanda",
    name: "Lavanda",
    scientificName: "Lavandula angustifolia",
    benefits: ["Relajante", "Antiséptica", "Ayuda al sueño"],
    usage: "Aceite esencial, infusión, o bolsitas aromáticas.",
    activePrinciples: "Linalol, acetato de linalilo.",
    care: "Pleno sol, suelo árido y bien drenado. Poca agua.",
    image: "https://images.unsplash.com/photo-1600699260716-d5ed9a3f9efe?w=800&q=80&auto=format&fit=crop",
    category: "Calmante",
    codigo: "PL-005",
    estado: "Crítico",
    cantidad: 8
  },
  {
    id: "calendula",
    name: "Caléndula",
    scientificName: "Calendula officinalis",
    benefits: ["Cicatrizante", "Antimicrobiana", "Antiinflamatoria"],
    usage: "Cremas, pomadas o compresas para la piel.",
    activePrinciples: "Flavonoides, triterpenos, saponinas.",
    care: "Sol directo o semisombra. Riego regular.",
    image: "https://images.unsplash.com/photo-1632602304887-8439a8a14f37?w=800&q=80&auto=format&fit=crop",
    category: "Cicatrizante",
    codigo: "PL-006",
    estado: "Bueno",
    cantidad: 30
  },
  {
    id: "boldo",
    name: "Boldo",
    scientificName: "Peumus boldus",
    benefits: ["Digestivo", "Hepatoprotector", "Antiespasmódico"],
    usage: "Infusión de hojas secas después de las comidas, 1 taza al día.",
    activePrinciples: "Boldina, taninos, flavonoides, aceites esenciales.",
    care: "Clima mediterráneo, tolera sequía. Nativo de Chile, prefiere suelo bien drenado.",
    image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=800&q=80&auto=format&fit=crop",
    category: "Digestiva",
    codigo: "PL-007",
    estado: "Bueno",
    cantidad: 22
  },
  {
    id: "jengibre",
    name: "Jengibre",
    scientificName: "Zingiber officinale",
    benefits: ["Antiinflamatorio", "Digestivo", "Alivia náuseas", "Antibacteriano"],
    usage: "Infusión de raíz fresca rallada con limón y miel, 2-3 veces al día.",
    activePrinciples: "Gingeroles, shogaoles, zingerona.",
    care: "Sombra parcial, suelo húmedo y rico en materia orgánica. Temperatura cálida.",
    image: "https://images.unsplash.com/photo-1630623093145-f606591c2546?w=800&q=80&auto=format&fit=crop",
    category: "Antiinflamatorio",
    codigo: "PL-008",
    estado: "Bueno",
    cantidad: 18
  },
  {
    id: "toronjil",
    name: "Toronjil",
    scientificName: "Melissa officinalis",
    benefits: ["Calmante del sistema nervioso", "Digestivo", "Antiviral", "Mejora el sueño"],
    usage: "Infusión de hojas frescas o secas, 1-2 tazas al día especialmente en la noche.",
    activePrinciples: "Ácido rosmarínico, flavonoides, aceites esenciales (citral, linalol).",
    care: "Semisombra o sol suave. Suelo húmedo. Crece rápidamente, requiere podas frecuentes.",
    image: "https://images.unsplash.com/photo-1622576454275-729fbf6aa6eb?w=800&q=80&auto=format&fit=crop",
    category: "Calmante",
    codigo: "PL-009",
    estado: "Bueno",
    cantidad: 35
  },
  {
    id: "oregano",
    name: "Orégano",
    scientificName: "Origanum vulgare",
    benefits: ["Antibacteriano", "Antioxidante", "Digestivo", "Antifúngico"],
    usage: "Infusión de hojas o uso directo en preparaciones culinarias medicinales.",
    activePrinciples: "Carvacrol, timol, flavonoides, vitaminas A y C.",
    care: "Pleno sol, suelo bien drenado. Resistente a la sequía. Poda regular para mayor densidad.",
    image: "https://images.unsplash.com/photo-1690877468013-f5c174498a53?w=800&q=80&auto=format&fit=crop",
    category: "Antibacteriano",
    codigo: "PL-010",
    estado: "Crítico",
    cantidad: 7
  }
];