export const categories = [
  { id: 'entradas', name: 'Entradas', icon: '🥟' },
  { id: 'sopas', name: 'Sopas', icon: '🍜' },
  { id: 'chaufas', name: 'Chaufas', icon: '🍚' },
  { id: 'tallarines', name: 'Tallarines', icon: '🍝' },
  { id: 'combinados', name: 'Combinados', icon: '🥡' },
  { id: 'aeropuertos', name: 'Aeropuertos', icon: '✈️' },
  { id: 'lomos', name: 'Lomos', icon: '🥩' },
  { id: 'alitas', name: 'Alitas', icon: '🍗' },
  { id: 'chancho', name: 'Carne de Chancho', icon: '🐷' },
  { id: 'pollos', name: 'Pollos', icon: '🐔' },
  { id: 'res', name: 'Res', icon: '🥓' },
  { id: 'langostinos', name: 'Langostinos', icon: '🦐' },
  { id: 'dulces', name: 'Platos Dulces', icon: '🍮' },
  { id: 'porciones', name: 'Porciones', icon: '🍱' },
  { id: 'extras', name: 'Extras', icon: '➕' },
  { id: 'bebidas', name: 'Bebidas y Mates', icon: '🍵' },
];

export const menuItems = [
  // ── ENTRADAS ──
  { id: 1, name: 'Wantán Frito', price: 10, category: 'entradas', description: 'Crujientes wantanes rellenos de carne' },
  { id: 2, name: 'Wantán al Vapor', price: 10, category: 'entradas', description: 'Wantanes al vapor con salsa especial' },
  { id: 3, name: 'Rollitos Primavera', price: 12, category: 'entradas', description: 'Rollitos crujientes rellenos de verduras' },
  { id: 4, name: 'Siu May', price: 12, category: 'entradas', description: 'Dumplings al vapor estilo cantonés' },
  { id: 5, name: 'Chi Jau Kay', price: 14, category: 'entradas', description: 'Pollo frito con salsa de ostión' },
  { id: 6, name: 'Kam Lu Wantan', price: 15, category: 'entradas', description: 'Wantán frito con salsa agridulce especial' },

  // ── SOPAS ──
  { id: 10, name: 'Sopa Wantán', price: 12, category: 'sopas', description: 'Caldo con wantanes, verduras y fideos' },
  { id: 11, name: 'Sopa de Pollo', price: 10, category: 'sopas', description: 'Caldo reconfortante de pollo con fideos' },
  { id: 12, name: 'Sopa de Res', price: 14, category: 'sopas', description: 'Caldo de res con verduras y fideos' },
  { id: 13, name: 'Sopa de Langostinos', price: 18, category: 'sopas', description: 'Caldo especial con langostinos frescos' },
  { id: 14, name: 'Sopa Fu Chi Fa', price: 12, category: 'sopas', description: 'Sopa tradicional con frijol chino' },
  { id: 15, name: 'Sopa de Chancho', price: 13, category: 'sopas', description: 'Sopa con carne de chancho y verduras' },

  // ── CHAUFAS ──
  { id: 20, name: 'Chaufa de Pollo', price: 16, category: 'chaufas', description: 'Arroz salteado con pollo y verduras' },
  { id: 21, name: 'Chaufa de Carne', price: 18, category: 'chaufas', description: 'Arroz salteado con carne de res' },
  { id: 22, name: 'Chaufa de Chancho', price: 17, category: 'chaufas', description: 'Arroz salteado con carne de chancho' },
  { id: 23, name: 'Chaufa de Langostinos', price: 22, category: 'chaufas', description: 'Arroz salteado con langostinos frescos' },
  { id: 24, name: 'Chaufa Especial', price: 20, category: 'chaufas', description: 'Arroz con pollo, carne, langostinos y verduras' },
  { id: 25, name: 'Chaufa de Verduras', price: 14, category: 'chaufas', description: 'Arroz salteado con verduras frescas' },

  // ── TALLARINES ──
  { id: 30, name: 'Tallarín de Pollo', price: 16, category: 'tallarines', description: 'Tallarines salteados con pollo' },
  { id: 31, name: 'Tallarín de Carne', price: 18, category: 'tallarines', description: 'Tallarines salteados con carne de res' },
  { id: 32, name: 'Tallarín de Chancho', price: 17, category: 'tallarines', description: 'Tallarines salteados con chancho' },
  { id: 33, name: 'Tallarín de Langostinos', price: 22, category: 'tallarines', description: 'Tallarines con langostinos frescos' },
  { id: 34, name: 'Tallarín Especial', price: 20, category: 'tallarines', description: 'Tallarines con pollo, carne y langostinos' },
  { id: 35, name: 'Tallarín de Verduras', price: 14, category: 'tallarines', description: 'Tallarines salteados con verduras' },

  // ── COMBINADOS ──
  { id: 40, name: 'Combinado de Pollo', price: 20, category: 'combinados', description: 'Chaufa + Tallarín de pollo' },
  { id: 41, name: 'Combinado de Carne', price: 22, category: 'combinados', description: 'Chaufa + Tallarín de carne' },
  { id: 42, name: 'Combinado de Chancho', price: 21, category: 'combinados', description: 'Chaufa + Tallarín de chancho' },
  { id: 43, name: 'Combinado de Langostinos', price: 26, category: 'combinados', description: 'Chaufa + Tallarín de langostinos' },
  { id: 44, name: 'Combinado Especial', price: 24, category: 'combinados', description: 'Chaufa + Tallarín especial de la casa' },

  // ── AEROPUERTOS ──
  { id: 50, name: 'Aeropuerto de Pollo', price: 18, category: 'aeropuertos', description: 'Arroz con fideos y pollo salteado' },
  { id: 51, name: 'Aeropuerto de Carne', price: 20, category: 'aeropuertos', description: 'Arroz con fideos y carne de res' },
  { id: 52, name: 'Aeropuerto de Chancho', price: 19, category: 'aeropuertos', description: 'Arroz con fideos y chancho' },
  { id: 53, name: 'Aeropuerto de Langostinos', price: 24, category: 'aeropuertos', description: 'Arroz con fideos y langostinos' },
  { id: 54, name: 'Aeropuerto Especial', price: 22, category: 'aeropuertos', description: 'Arroz con fideos, pollo, carne y langostinos' },

  // ── LOMOS ──
  { id: 60, name: 'Lomo Saltado', price: 20, category: 'lomos', description: 'Lomo fino salteado con papas y arroz' },
  { id: 61, name: 'Lomo de Pollo', price: 18, category: 'lomos', description: 'Pollo salteado estilo lomo con papas' },
  { id: 62, name: 'Lomo de Chancho', price: 19, category: 'lomos', description: 'Chancho salteado estilo lomo' },
  { id: 63, name: 'Lomo de Langostinos', price: 25, category: 'lomos', description: 'Langostinos salteados estilo lomo' },

  // ── ALITAS ──
  { id: 70, name: 'Alitas Fritas', price: 16, category: 'alitas', description: 'Alitas crujientes con salsa especial' },
  { id: 71, name: 'Alitas BBQ Oriental', price: 18, category: 'alitas', description: 'Alitas glaseadas con salsa BBQ oriental' },
  { id: 72, name: 'Alitas Picantes', price: 17, category: 'alitas', description: 'Alitas con salsa picante china' },
  { id: 73, name: 'Alitas Agridulces', price: 17, category: 'alitas', description: 'Alitas bañadas en salsa agridulce' },

  // ── CHANCHO ──
  { id: 80, name: 'Chancho con Tamarindo', price: 20, category: 'chancho', description: 'Carne de chancho con salsa de tamarindo' },
  { id: 81, name: 'Chancho Agridulce', price: 19, category: 'chancho', description: 'Chancho frito con salsa agridulce' },
  { id: 82, name: 'Chancho Chi Jau', price: 20, category: 'chancho', description: 'Chancho frito con salsa de ostión' },
  { id: 83, name: 'Chancho Tipakay', price: 20, category: 'chancho', description: 'Chancho frito con salsa tipakay' },

  // ── POLLOS ──
  { id: 90, name: 'Pollo Chi Jau Kay', price: 18, category: 'pollos', description: 'Pollo frito con salsa de ostión' },
  { id: 91, name: 'Pollo Tipakay', price: 18, category: 'pollos', description: 'Pollo frito con salsa tipakay' },
  { id: 92, name: 'Pollo con Piña', price: 18, category: 'pollos', description: 'Pollo saltado con piña fresca' },
  { id: 93, name: 'Pollo con Verduras', price: 17, category: 'pollos', description: 'Pollo salteado con verduras chinas' },
  { id: 94, name: 'Pollo Agridulce', price: 18, category: 'pollos', description: 'Pollo frito con salsa agridulce' },

  // ── RES ──
  { id: 100, name: 'Res con Brócoli', price: 22, category: 'res', description: 'Carne de res salteada con brócoli' },
  { id: 101, name: 'Res con Verduras', price: 22, category: 'res', description: 'Carne de res salteada con verduras' },
  { id: 102, name: 'Res con Tamarindo', price: 23, category: 'res', description: 'Carne de res con salsa de tamarindo' },
  { id: 103, name: 'Res Chi Jau', price: 23, category: 'res', description: 'Carne de res frita con salsa de ostión' },

  // ── LANGOSTINOS ──
  { id: 110, name: 'Langostinos al Ajo', price: 25, category: 'langostinos', description: 'Langostinos salteados al ajillo' },
  { id: 111, name: 'Langostinos con Verduras', price: 25, category: 'langostinos', description: 'Langostinos salteados con verduras' },
  { id: 112, name: 'Langostinos Tipakay', price: 26, category: 'langostinos', description: 'Langostinos fritos con salsa tipakay' },
  { id: 113, name: 'Langostinos Agridulces', price: 26, category: 'langostinos', description: 'Langostinos con salsa agridulce' },
  { id: 114, name: 'Langostinos Empanizados', price: 26, category: 'langostinos', description: 'Langostinos crujientes empanizados' },

  // ── DULCES ──
  { id: 120, name: 'Picarones Chinos', price: 10, category: 'dulces', description: 'Masa dulce frita con miel oriental' },
  { id: 121, name: 'Banana Frita', price: 8, category: 'dulces', description: 'Banana caramelizada con canela' },
  { id: 122, name: 'Wantán de Dulce', price: 10, category: 'dulces', description: 'Wantán frito relleno de dulce' },

  // ── PORCIONES ──
  { id: 130, name: 'Porción de Arroz', price: 5, category: 'porciones', description: 'Porción de arroz blanco graneado' },
  { id: 131, name: 'Porción de Papa Frita', price: 6, category: 'porciones', description: 'Papas fritas crujientes' },
  { id: 132, name: 'Porción de Ensalada', price: 6, category: 'porciones', description: 'Ensalada fresca del día' },
  { id: 133, name: 'Porción de Wantán', price: 8, category: 'porciones', description: 'Porción extra de wantán frito' },

  // ── EXTRAS ──
  { id: 140, name: 'Salsa de Soya', price: 2, category: 'extras', description: 'Porción de salsa de soya' },
  { id: 141, name: 'Salsa de Tamarindo', price: 3, category: 'extras', description: 'Porción de salsa de tamarindo' },
  { id: 142, name: 'Ají Oriental', price: 2, category: 'extras', description: 'Ají especial de la casa' },
  { id: 143, name: 'Huevo Frito', price: 3, category: 'extras', description: 'Huevo frito extra' },

  // ── BEBIDAS ──
  { id: 150, name: 'Gaseosa Personal', price: 4, category: 'bebidas', description: 'Coca-Cola, Inca Kola, Sprite' },
  { id: 151, name: 'Gaseosa 1L', price: 8, category: 'bebidas', description: 'Coca-Cola, Inca Kola, Sprite 1 litro' },
  { id: 152, name: 'Chicha Morada', price: 5, category: 'bebidas', description: 'Chicha morada artesanal' },
  { id: 153, name: 'Limonada', price: 5, category: 'bebidas', description: 'Limonada fresca natural' },
  { id: 154, name: 'Mate de Hierba Luisa', price: 4, category: 'bebidas', description: 'Infusión caliente de hierba luisa' },
  { id: 155, name: 'Mate de Manzanilla', price: 4, category: 'bebidas', description: 'Infusión caliente de manzanilla' },
  { id: 156, name: 'Mate de Anís', price: 4, category: 'bebidas', description: 'Infusión caliente de anís' },
  { id: 157, name: 'Agua Mineral', price: 3, category: 'bebidas', description: 'Agua mineral sin gas / con gas' },
];
