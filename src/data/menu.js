export const categories = [
  { id: 'sopas', name: 'Sopas', icon: '🍜' },
  { id: 'entradas', name: 'Entradas y Porciones', icon: '🥟' },
  { id: 'chaufas', name: 'Chaufas', icon: '🍚', hasAppetizer: true },
  { id: 'tallarines', name: 'Tallarines', icon: '🍝', hasAppetizer: true },
  { id: 'combinados', name: 'Combinados', icon: '🥡', hasAppetizer: true },
  { id: 'aeropuertos', name: 'Aeropuertos', icon: '✈️', hasAppetizer: true },
  { id: 'lomos', name: 'Lomos', icon: '🥩', hasAppetizer: true },
  { id: 'alitas', name: 'Alitas y Chicharrones', icon: '🍗', hasAppetizer: true },
  { id: 'pollos', name: 'Carne de Pollos', icon: '🐔', hasAppetizer: true },
  { id: 'res', name: 'Carne de Res', icon: '🥓', hasAppetizer: true },
  { id: 'chancho', name: 'Carne de Chancho', icon: '🐷', hasAppetizer: true },
  { id: 'langostinos', name: 'Langostinos', icon: '🦐', hasAppetizer: true },
  { id: 'especiales', name: 'Platos Dulces y Especiales', icon: '🌟', hasAppetizer: true },
  { id: 'bebidas', name: 'Mates y Bebidas', icon: '🍵' },
];

export const menuItems = [
  // ── 1. SOPAS ──
  { id: 101, name: 'Sopa de Pollo', price: 8.50, category: 'sopas', description: 'Caldo reconfortante de pollo' },
  { id: 102, name: 'Sopa de Kión', price: 8.50, category: 'sopas', description: 'Sopa especial con jengibre' },
  { id: 103, name: 'Sopa de Pollo con Verduras', price: 9.00, category: 'sopas', description: 'Caldo de pollo con vegetales frescos' },
  { id: 104, name: 'Sopa Fu Chi Fú', price: 12.00, category: 'sopas', description: 'Sopa tradicional con clara de huevo' },
  { id: 105, name: 'Sopa Pack Pow', price: 12.00, category: 'sopas', description: 'Sopa especial con verduras y carnes mixtas' },
  { id: 106, name: 'Sopa Tiao', price: 15.00, category: 'sopas', description: 'La especialidad de la casa con todo' },

  // ── 2. ENTRADAS Y PORCIONES ──
  { id: 201, name: 'Wantán Frito (1 Docena)', price: 8.00, category: 'entradas', description: '12 unidades crocantes' },
  { id: 202, name: 'Wantán Frito (1/2 Docena)', price: 4.50, category: 'entradas', description: '6 unidades crocantes' },
  { id: 203, name: 'Arroz Blanco', price: 3.00, category: 'entradas', description: 'Porción de arroz blanco graneado' },
  { id: 204, name: 'Arroz Chaufa', price: 6.00, category: 'entradas', description: 'Porción de chaufa solo' },
  { id: 205, name: 'Hojuelas Fritas', price: 8.00, category: 'entradas', description: 'Crocantes hojuelas de wantán' },
  { id: 206, name: 'Durazno de Almíbar', price: 10.00, category: 'entradas', description: 'Postre dulce' },
  { id: 207, name: 'Piña en Almíbar', price: 10.00, category: 'entradas', description: 'Postre dulce' },

  // ── 3. CHAUFAS ──
  { id: 301, name: 'Chaufa de Hot Dog', price: 10.00, category: 'chaufas', description: 'Clásico chaufa con trozos de hot dog', sizes: [{ name: 'Normal', price: 10 }, { name: 'Grande', price: 24 }] },
  { id: 302, name: 'Chaufa de Pollo', price: 10.00, category: 'chaufas', description: 'Nuestro plato bandera con pollo', sizes: [{ name: 'Normal', price: 10 }, { name: 'Grande', price: 24 }] },
  { id: 303, name: 'Chaufa de Res', price: 13.00, category: 'chaufas', description: 'Con carne de res seleccionada', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 26 }] },
  { id: 304, name: 'Chaufa de Chancho', price: 13.00, category: 'chaufas', description: 'Con sabroso chancho asado', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 26 }] },
  { id: 305, name: 'Chaufa de Langostino', price: 18.00, category: 'chaufas', description: 'Con langostinos frescos', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 32 }] },
  { id: 306, name: 'Chaufa Samsem', price: 22.00, category: 'chaufas', description: 'Variedad especial de la casa', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 32 }] },
  { id: 307, name: 'Chaufa Especial', price: 22.00, category: 'chaufas', description: 'Con carnes mixtas y verduras', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 32 }] },
  { id: 308, name: 'Chaufa de Champiñones', price: 13.00, category: 'chaufas', description: 'Opción vegetariana con champiñones', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 28 }] },
  { id: 309, name: 'Chaufa con Huevo de Codorniz', price: 18.00, category: 'chaufas', description: 'Chaufa decorado con huevos de codorniz', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },

  // ── 4. TALLARINES ──
  { id: 401, name: 'Tallarín de Pollo', price: 13.00, category: 'tallarines', description: 'Saltado con pollo y verduras', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 28 }] },
  { id: 402, name: 'Tallarín de Res', price: 15.00, category: 'tallarines', description: 'Saltado con carne de res', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 30 }] },
  { id: 403, name: 'Tallarín de Chancho', price: 15.00, category: 'tallarines', description: 'Saltado con chancho asado', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 32 }] },
  { id: 404, name: 'Tallarín con Champiñones', price: 15.00, category: 'tallarines', description: 'Saltado con champiñones frescos', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 30 }] },
  { id: 405, name: 'Tallarín con Langostinos', price: 24.00, category: 'tallarines', description: 'Saltado con langostinos', sizes: [{ name: 'Normal', price: 24 }, { name: 'Grande', price: 35 }] },
  { id: 406, name: 'Tallarín Especial', price: 22.00, category: 'tallarines', description: 'Con carnes mixtas', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 34 }] },
  { id: 407, name: 'Tallarín Samsi', price: 22.00, category: 'tallarines', description: 'Estilo Samsi', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 32 }] },
  { id: 408, name: 'Tallarín Taypa', price: 22.00, category: 'tallarines', description: 'Estilo Taypa', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 34 }] },
  { id: 409, name: 'Tallarín en Trozos', price: 15.00, category: 'tallarines', description: 'Pollo en trozos con fideos' },
  { id: 410, name: 'Tallarín Frito', price: 18.00, category: 'tallarines', description: 'Fideos fritos crocantes' },

  // ── 5. COMBINADOS ──
  { id: 501, name: 'Combinado con Pollo', price: 13.00, category: 'combinados', description: 'Chaufa + Tallarín de Pollo', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 25 }] },
  { id: 502, name: 'Combinado con Chancho', price: 15.00, category: 'combinados', description: 'Chaufa + Tallarín de Chancho', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 30 }] },
  { id: 503, name: 'Combinado con Res', price: 15.00, category: 'combinados', description: 'Chaufa + Tallarín de Res', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 30 }] },
  { id: 504, name: 'Combinado con Langostinos', price: 20.00, category: 'combinados', description: 'Chaufa + Tallarín de Langostinos', sizes: [{ name: 'Normal', price: 20 }, { name: 'Grande', price: 35 }] },
  { id: 505, name: 'Combinado Especial', price: 24.00, category: 'combinados', description: 'Combinado con todo', sizes: [{ name: 'Normal', price: 24 }, { name: 'Grande', price: 35 }] },
  { id: 506, name: 'Combinado con Champiñones', price: 15.00, category: 'combinados', description: 'Chaufa + Tallarín con Champiñones' },

  // ── 6. AEROPUERTOS ──
  { id: 601, name: 'Aeropuerto de Pollo', price: 12.00, category: 'aeropuertos', description: 'Arroz y fideos con pollo', sizes: [{ name: 'Normal', price: 12 }, { name: 'Grande', price: 28 }] },
  { id: 602, name: 'Aeropuerto de Chancho', price: 15.00, category: 'aeropuertos', description: 'Arroz y fideos con chancho', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 30 }] },
  { id: 603, name: 'Aeropuerto de Res', price: 15.00, category: 'aeropuertos', description: 'Arroz y fideos con res', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 32 }] },
  { id: 604, name: 'Aeropuerto de Langostino', price: 20.00, category: 'aeropuertos', description: 'Arroz y fideos con langostinos', sizes: [{ name: 'Normal', price: 20 }, { name: 'Grande', price: 35 }] },
  { id: 605, name: 'Aeropuerto Especial', price: 24.00, category: 'aeropuertos', description: 'Aeropuerto con todas las carnes', sizes: [{ name: 'Normal', price: 24 }, { name: 'Grande', price: 40 }] },
  { id: 606, name: 'Aeropuerto con Champiñones', price: 15.00, category: 'aeropuertos', description: 'Opción vegetariana', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 32 }] },

  // ── 7. LOMOS ──
  { id: 701, name: 'Lomo de Pollo', price: 13.00, category: 'lomos', description: 'Saltado criollo-oriental de pollo', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 28 }] },
  { id: 702, name: 'Lomo de Res', price: 15.00, category: 'lomos', description: 'Saltado criollo-oriental de res', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 30 }] },
  { id: 703, name: 'Lomo de Chancho', price: 15.00, category: 'lomos', description: 'Saltado criollo-oriental de chancho', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 30 }] },
  { id: 704, name: 'Lomo de Langostino', price: 20.00, category: 'lomos', description: 'Saltado de langostinos' },
  { id: 705, name: 'Lomo Especial', price: 24.00, category: 'lomos', description: 'Saltado con todas las carnes', sizes: [{ name: 'Normal', price: 24 }, { name: 'Grande', price: 35 }] },

  // ── 8. ALITAS Y CHICHARRONES ──
  { id: 801, name: 'Alitas con jugo de Limón', price: 13.00, category: 'alitas', description: 'Alitas con toque ácido de limón', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 20 }] },
  { id: 802, name: 'Alitas Arrebozadas', price: 13.00, category: 'alitas', description: 'Alitas fritas crujientes', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 22 }] },
  { id: 803, name: 'Alitas con Piña', price: 17.00, category: 'alitas', description: 'Alitas agridulces con piña' },
  { id: 804, name: 'Alitas con Durazno', price: 17.00, category: 'alitas', description: 'Alitas dulces con durazno' },
  { id: 805, name: 'Alitas con Aeropuerto', price: 18.00, category: 'alitas', description: 'Combo de alitas + aeropuerto' },
  { id: 806, name: 'Alitas con Chaufa Especial', price: 18.00, category: 'alitas', description: 'Combo de alitas + chaufa especial' },
  { id: 807, name: 'Alitas con Tausi', price: 17.00, category: 'alitas', description: 'Alitas en salsa de tausi' },
  { id: 808, name: 'Chicharrón de Pollo', price: 22.00, category: 'alitas', description: 'Trozos de pollo frito crocante' },
  { id: 809, name: 'Chicharrón de Pollo (piernitas)', price: 24.00, category: 'alitas', description: 'Piernitas fritas crocantes' },

  // ── 9. CARNE DE POLLOS ──
  { id: 901, name: 'Pollo con Verdura', price: 13.00, category: 'pollos', description: 'Pollo saltado con verduras chinas', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 25 }] },
  { id: 902, name: 'Pollo con Tausi', price: 14.00, category: 'pollos', description: 'Pollo en salsa de tausi', sizes: [{ name: 'Normal', price: 14 }, { name: 'Grande', price: 25 }] },
  { id: 903, name: 'Pollo con Brocoli', price: 14.00, category: 'pollos', description: 'Pollo saltado con brócoli', sizes: [{ name: 'Normal', price: 14 }, { name: 'Grande', price: 25 }] },
  { id: 904, name: 'Pollo con Champiñones', price: 15.00, category: 'pollos', description: 'Pollo saltado con champiñones', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 28 }] },
  { id: 905, name: 'Pollo con Frejolito chino', price: 15.00, category: 'pollos', description: 'Pollo saltado con frejolito', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 26 }] },
  { id: 906, name: 'Pollo al Ajo', price: 13.00, category: 'pollos', description: 'Pollo en salsa de ajo', sizes: [{ name: 'Normal', price: 13 }, { name: 'Grande', price: 26 }] },
  { id: 907, name: 'Pollo en Salsa Curri', price: 15.00, category: 'pollos', description: 'Pollo al curry oriental' },
  { id: 908, name: 'Pollo con verdura en trozos', price: 15.00, category: 'pollos', description: 'Pollo y verduras en trozos grandes', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 28 }] },
  { id: 909, name: 'Chi Jao Kay de Pollo', price: 20.00, category: 'pollos', description: 'Pollo frito con salsa de ostión', sizes: [{ name: 'Normal', price: 20 }, { name: 'Grande', price: 30 }] },
  { id: 910, name: 'Enrollado de Pollo', price: 20.00, category: 'pollos', description: 'Pollo enrollado con verduras', sizes: [{ name: 'Normal', price: 20 }, { name: 'Grande', price: 30 }] },
  { id: 911, name: 'Enrollado de Champiñones', price: 22.00, category: 'pollos', description: 'Pollo enrollado con champiñones', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 32 }] },
  { id: 912, name: 'Enrollado de Chancho', price: 22.00, category: 'pollos', description: 'Chancho enrollado especial', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 32 }] },

  // ── 10. CARNE DE RES ──
  { id: 1001, name: 'Res con verdura', price: 16.00, category: 'res', description: 'Res saltada con verduras chinas', sizes: [{ name: 'Normal', price: 16 }, { name: 'Grande', price: 28 }] },
  { id: 1002, name: 'Res con Brocoli', price: 17.00, category: 'res', description: 'Res saltada con brócoli', sizes: [{ name: 'Normal', price: 17 }, { name: 'Grande', price: 32 }] },
  { id: 1003, name: 'Res con Tausi', price: 16.00, category: 'res', description: 'Res en salsa de tausi', sizes: [{ name: 'Normal', price: 16 }, { name: 'Grande', price: 30 }] },
  { id: 1004, name: 'Res con Frejolito chino', price: 17.00, category: 'res', description: 'Res con frejolito chino', sizes: [{ name: 'Normal', price: 17 }, { name: 'Grande', price: 30 }] },
  { id: 1005, name: 'Res con Champiñones', price: 18.00, category: 'res', description: 'Res saltada con champiñones', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },
  { id: 1006, name: 'Res en Salsa Curri', price: 18.00, category: 'res', description: 'Res al curry oriental', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },

  // ── 11. CARNE DE CHANCHO ──
  { id: 1101, name: 'Chancho con Verdura', price: 17.00, category: 'chancho', description: 'Chancho asado con verduras', sizes: [{ name: 'Normal', price: 17 }, { name: 'Grande', price: 28 }] },
  { id: 1102, name: 'Chancho con Champiñones', price: 18.00, category: 'chancho', description: 'Chancho asado con champiñones', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 28 }] },
  { id: 1103, name: 'Chancho con Tausi', price: 18.00, category: 'chancho', description: 'Chancho en salsa de tausi', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },
  { id: 1104, name: 'Chancho al Ajo', price: 17.00, category: 'chancho', description: 'Chancho en salsa de ajo', sizes: [{ name: 'Normal', price: 17 }, { name: 'Grande', price: 30 }] },
  { id: 1105, name: 'Chancho en Salsa Curri', price: 18.00, category: 'chancho', description: 'Chancho al curry', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },
  { id: 1106, name: 'Chancho en Salsa de Ostión', price: 18.00, category: 'chancho', description: 'Chancho en salsa de ostión', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },
  { id: 1107, name: 'Chancho con Frejolito chino', price: 18.00, category: 'chancho', description: 'Chancho con frejolito', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },
  { id: 1108, name: 'Chancho con Brocoli', price: 18.00, category: 'chancho', description: 'Chancho con brócoli', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 30 }] },

  // ── 12. LANGOSTINOS ──
  { id: 1201, name: 'Langostino con Verdura', price: 24.00, category: 'langostinos', description: 'Langostinos con verduras' },
  { id: 1202, name: 'Langostino con Brocoli', price: 22.00, category: 'langostinos', description: 'Langostinos con brócoli' },
  { id: 1203, name: 'Langostino con Champiñones', price: 25.00, category: 'langostinos', description: 'Langostinos con champiñones' },
  { id: 1204, name: 'Langostino con Tausi', price: 22.00, category: 'langostinos', description: 'Langostinos en salsa de tausi' },
  { id: 1205, name: 'Langostino al Ajo', price: 22.00, category: 'langostinos', description: 'Langostinos al ajillo' },

  // ── 13. PLATOS DULCES Y ESPECIALES ──
  { id: 1301, name: 'Kanlú Wantan', price: 20.00, category: 'especiales', description: 'Wantán frito con salsa agridulce especial', sizes: [{ name: 'Normal', price: 20 }, { name: 'Grande', price: 35 }] },
  { id: 1302, name: 'Tipakay', price: 22.00, category: 'especiales', description: 'Plato agridulce especial tipakay', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 36 }] },
  { id: 1303, name: 'Limoncay', price: 20.00, category: 'especiales', description: 'Plato agridulce especial limoncay', sizes: [{ name: 'Normal', price: 20 }, { name: 'Grande', price: 36 }] },
  { id: 1304, name: 'Pollo con Durazno', price: 18.00, category: 'especiales', description: 'Pollo dulce con durazno', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 32 }] },
  { id: 1305, name: 'Pollo con Piña', price: 18.00, category: 'especiales', description: 'Pollo dulce con piña', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 32 }] },
  { id: 1306, name: 'Pollo con Tamarindo', price: 15.00, category: 'especiales', description: 'Pollo en salsa de tamarindo', sizes: [{ name: 'Normal', price: 15 }, { name: 'Grande', price: 35 }] },
  { id: 1307, name: 'Pollo con Frutas', price: 22.00, category: 'especiales', description: 'Pollo con mix de frutas', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 38 }] },
  { id: 1308, name: 'Pollo 5 Sabores', price: 25.00, category: 'especiales', description: 'Explosión de 5 sabores', sizes: [{ name: 'Normal', price: 25 }, { name: 'Grande', price: 35 }] },
  { id: 1309, name: 'Enrollado de Frutas', price: 24.00, category: 'especiales', description: 'Enrollado relleno de frutas', sizes: [{ name: 'Normal', price: 24 }, { name: 'Grande', price: 38 }] },
  { id: 1310, name: 'Chancho con Durazno', price: 20.00, category: 'especiales', description: 'Chancho dulce con durazno', sizes: [{ name: 'Normal', price: 20 }, { name: 'Grande', price: 32 }] },
  { id: 1311, name: 'Chancho con Tamarindo', price: 18.00, category: 'especiales', description: 'Chancho en salsa de tamarindo', sizes: [{ name: 'Normal', price: 18 }, { name: 'Grande', price: 32 }] },
  { id: 1312, name: 'Chancho con Piña', price: 22.00, category: 'especiales', description: 'Chancho dulce con piña', sizes: [{ name: 'Normal', price: 22 }, { name: 'Grande', price: 36 }] },
  { id: 1313, name: 'Langostino con Durazno', price: 22.00, category: 'especiales', description: 'Langostinos dulces con durazno' },
  { id: 1314, name: 'Langostino con Piña', price: 24.00, category: 'especiales', description: 'Langostinos dulces con piña' },

  // ── 14. MATES Y BEBIDAS ──
  { id: 1401, name: 'Infusiones', price: 2.50, category: 'bebidas', description: 'Anís, Manzanilla, Canela, Té...' },
  { id: 1402, name: 'Chicha Morada (1 Litro)', price: 6.00, category: 'bebidas', description: 'Chicha morada casera' },
  { id: 1403, name: 'Chicha Morada (1/2 Litro)', price: 3.50, category: 'bebidas', description: 'Chicha morada casera' },
  { id: 1404, name: 'Gaseosa 1.5 L', price: 8.00, category: 'bebidas', description: 'Inca Kola / Coca Cola' },
  { id: 1405, name: 'Gaseosa Personal', price: 3.00, category: 'bebidas', description: 'Inca Kola / Coca Cola / Fanta...' },
  { id: 1406, name: 'Agua Mineral Cielo', price: 1.50, category: 'bebidas', description: 'Agua mineral sin gas' },
];
