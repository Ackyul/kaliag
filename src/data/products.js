export const categories = [
  { id: 'all', name: 'Todos los Productos', icon: 'fa-cubes' },
  { id: 'generadores', name: 'Generadores Eléctricos', icon: 'fa-bolt' },
  { id: 'bombas', name: 'Motobombas y Electrobombas', icon: 'fa-water' },
  { id: 'motores', name: 'Motores Industriales', icon: 'fa-gauge-high' },
  { id: 'agricultura', name: 'Fumigación y Agricultura', icon: 'fa-seedling' },
  { id: 'fluvial', name: 'Transporte Fluvial Peke Peke', icon: 'fa-anchor' },
  { id: 'taller', name: 'Compresoras y Soldadoras', icon: 'fa-screwdriver-wrench' }
];

export const regions = [
  'Lima Metropolitana & Callao',
  'Loreto (Iquitos / Yurimaguas / Nauta)',
  'Ucayali (Pucallpa / Aguaytía)',
  'Madre de Dios (Puerto Maldonado)',
  'San Martín (Tarapoto / Moyobamba)',
  'Piura / Sullana / Talara',
  'La Libertad (Trujillo)',
  'Arequipa',
  'Cusco',
  'Junín (Huancayo / Satipo / Chanchamayo)',
  'Cajamarca',
  'Lambayeque (Chiclayo)',
  'Ancash (Chimbote / Huaraz)',
  'Ica / Chincha / Pisco',
  'Puno / Juliaca',
  'Huánuco / Tingo María',
  'Ayacucho',
  'Tacna / Moquegua',
  'Otra Región (Despacho Nacional)'
];

export const products = [
  {
    id: 'gen-7500',
    name: 'Generador Eléctrico Monofásico KALIAG 7.5 KVA',
    category: 'generadores',
    badge: 'Más Vendido',
    rating: 4.9,
    reviews: 58,
    code: 'KLG-GEN-7500E',
    image: '/images/generator.png',
    description: 'Generador industrial KALIAG European Industry a gasolina con arranque eléctrico y regulador AVR incorporado. Alta resistencia en obras, minería y respaldo comercial.',
    specs: {
      'Marca / Tecnología': 'KALIAG European Industry',
      'Potencia Máxima': '7.5 KVA / 7500 Watts',
      'Potencia Nominal': '7.0 KVA / 7000 Watts',
      'Motor': '4 Tiempos OHV 15.0 HP Refr. por Aire',
      'Sistema de Arranque': 'Eléctrico con llave y Manual retráctil',
      'Capacidad del Tanque': '25 Litros de Gasolina',
      'Autonomía de Operación': '10 Horas (al 50% de carga)',
      'Regulador de Voltaje': 'AVR Automático Integrado',
      'Panel de Salida': '2 Tomacorrientes 220V / 60 Hz + Salida DC 12V',
      'Garantía Oficial': '12 Meses KALIAG Perú'
    },
    tag: 'Energía Continua'
  },
  {
    id: 'gen-diesel-10',
    name: 'Generador Insonorizado Diésel KALIAG 10 KVA Trifásico',
    category: 'generadores',
    badge: 'Industrial European Standard',
    rating: 5.0,
    reviews: 34,
    code: 'KLG-GEN-D10KVA',
    image: '/images/generator.png',
    description: 'Planta eléctrica cabinada insonorizada KALIAG de bajo consumo. Diseñada para empresas, clínicas, centros de datos y campamentos mineros.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Potencia Máxima': '10.0 KVA / 8000W',
      'Voltaje': '220V / 380V Trifásico 60 Hz',
      'Motor': 'Diésel Inyección Directa 4 Tiempos',
      'Nivel de Ruido': '68 dB a 7 metros (Cabinado)',
      'Tanque de Combustible': '30 Litros Diésel',
      'Tablero de Control': 'Pantalla Digital SmartGen con medición de voltaje y horas',
      'Garantía Oficial': '12 Meses KALIAG Perú'
    },
    tag: 'Silencioso & Insonorizado'
  },
  {
    id: 'mb-30x',
    name: 'Motobomba de Agua de 3" Alta Presión KALIAG 7.0 HP',
    category: 'bombas',
    badge: 'Líder en Riego',
    rating: 4.9,
    reviews: 62,
    code: 'KLG-BOMBA-30X',
    image: '/images/motobomba.png',
    description: 'Motobomba autocebante impulsada por motor KALIAG 7 HP. Máxima eficiencia para parcelas agrícolas, drenaje de pozos y trasvase de caudal masivo.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Diámetro Succión / Descarga': '3 Pulgadas (75 mm)',
      'Motor': 'KALIAG 7.0 HP 4 Tiempos OHV',
      'Caudal Máximo': '1,000 L/min (60 m³/h)',
      'Elevación Máxima (H. Max)': '32 Metros',
      'Profundidad de Succión': '8 Metros',
      'Cuerpo de Bomba': 'Aluminio fundido de alta resistencia',
      'Impulsor': 'Hierro fundido tratado anti-desgaste',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Riego Agrícola'
  },
  {
    id: 'mb-alta-presion-2',
    name: 'Motobomba Contra Incendio / Alta Presión 2" KALIAG 9.0 HP',
    category: 'bombas',
    badge: 'Alta Presión',
    rating: 4.8,
    reviews: 27,
    code: 'KLG-BOMBA-2HP-AP',
    image: '/images/motobomba.png',
    description: 'Motobomba KALIAG de alta presión con descarga triple. Diseñada para impulsar agua a gran altura y largas distancias en terrenos inclinados.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Diámetro de Succión': '2 Pulgadas (50 mm)',
      'Salidas de Descarga': '1 de 2" + 2 de 1.5"',
      'Elevación Máxima': '75 Metros (7.5 Bar)',
      'Motor': 'KALIAG 9.0 HP Gasolina 4 Tiempos',
      'Caudal Máximo': '500 L/min',
      'Uso': 'Riego por aspersión, lavado industrial y respuesta contra incendios',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Impulso Vertical'
  },
  {
    id: 'peke-peke-13',
    name: 'Motor Fuera de Borda Peke Peke KALIAG 13 HP',
    category: 'fluvial',
    badge: 'Especial Selva / Oriente',
    rating: 5.0,
    reviews: 94,
    code: 'KLG-PEKE-13HP',
    image: '/images/pekepeke.png',
    description: 'Kit de navegación fluvial de cola larga KALIAG European Industry. Preferido en la Amazonía peruana por su torque en ríos caudalosos y durabilidad marina.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Motor': 'KALIAG 13.0 HP Gasolina 4 Tiempos Reforzado',
      'Longitud de Cola': '2.20 metros en Tubo de Acero Inoxidable 304',
      'Hélice': 'Bronce Marino Especial 3 Palas',
      'Eje Interior': 'Acero templado con bocinas de bronce y rodajes sellados',
      'Sistema de Encendido': 'Manual retráctil de fácil tirón',
      'Aplicación': 'Botes peque peque, colectivos y embarcaciones fluviales',
      'Garantía Oficial': '12 Meses KALIAG Perú'
    },
    tag: 'Navegación Fluvial'
  },
  {
    id: 'peke-peke-16',
    name: 'Kit Motor Fluvial Peke Peke KALIAG 16 HP Encendido Eléctrico',
    category: 'fluvial',
    badge: 'Máxima Potencia',
    rating: 4.9,
    reviews: 41,
    code: 'KLG-PEKE-16E',
    image: '/images/pekepeke.png',
    description: 'Motor marino KALIAG de alta cilindrada con arranque por botón y batería. Diseñado para transporte de carga pesada y pasajeros en ríos del Perú.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Motor': 'KALIAG 16.0 HP 420cc 4 Tiempos',
      'Arranque': 'Eléctrico con llave + Chapa de seguridad + Tirador manual',
      'Longitud de Cola': '2.50 metros reforzada con tratamiento anticorrosivo',
      'Hélice': 'Bronce marino de alta tracción 3 palas',
      'Accesorios': 'Incluye batería de 12V y cables de conexión',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Carga & Pasajeros'
  },
  {
    id: 'fum-parihuela-65',
    name: 'Fumigadora Estacionaria de Parihuela KALIAG 6.5 HP',
    category: 'agricultura',
    badge: 'Uso Agrícola Intensivo',
    rating: 4.9,
    reviews: 52,
    code: 'KLG-FUM-65P',
    image: '/images/fumigadora.png',
    description: 'Fumigadora de parihuela KALIAG sobre chasis reforzado con ruedas. Cabezal con triplex pistones cerámicos para pesticidas y fertilizantes.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Motor': 'KALIAG 6.5 HP Gasolina 4 Tiempos',
      'Bomba de Cabezal': 'Triplex de pistones cerámicos alta resistencia',
      'Presión Regulable': '20 a 45 Bar (650 PSI)',
      'Caudal de Aspersión': '20 a 35 Litros / min',
      'Kit Completo': 'Manguera de alta presión 50m, lanza de fumigación, filtro y mangueras de retornos',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Protección Fitosanitaria'
  },
  {
    id: 'fum-mochila-25',
    name: 'Fumigadora de Mochila a Motor 2 Tiempos KALIAG 25 Litros',
    category: 'agricultura',
    badge: 'Portátil',
    rating: 4.7,
    reviews: 31,
    code: 'KLG-FUM-M25L',
    image: '/images/fumigadora.png',
    description: 'Mochila fumigadora KALIAG motorizada liviana y ergonómica. Excelente en hortalizas, frutales, desinfección de almacenes y galpones.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Capacidad de Tanque': '25 Litros en polietileno UV',
      'Motor': '2 Tiempos monocilíndrico 26cc KALIAG',
      'Presión Máxima': '25 Bar',
      'Lanza Triple': 'Acero inoxidable con 3 boquillas regulables',
      'Arnés': 'Correas acolchadas con protección lumbar',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Fumigación Portátil'
  },
  {
    id: 'motor-ohv-65',
    name: 'Motor a Gasolina Estacionario KALIAG 6.5 HP OHV',
    category: 'motores',
    badge: 'Repuesto Multiuso',
    rating: 4.9,
    reviews: 73,
    code: 'KLG-MOT-65OHV',
    image: '/images/generator.png',
    description: 'Motor estacionario KALIAG de 6.5 HP monocilíndrico universal. Eje cuñero estándar ideal para acoplar a motobombas, picadoras de forraje y mezcladoras.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Potencia Nominal': '6.5 HP (210 cc)',
      'Tipo': '4 Tiempos OHV Inclinado 25°',
      'Diámetro de Eje': '3/4" (19.05 mm) Cuñero',
      'Sensor de Aceite': 'Alerta de bajo nivel con corte automático',
      'Capacidad Aceite': '0.6 Litros (SAE 10W-30)',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Fuerza Universal'
  },
  {
    id: 'motor-ohv-15',
    name: 'Motor a Gasolina KALIAG 15 HP con Arranque Eléctrico',
    category: 'motores',
    badge: 'Alto Torque',
    rating: 5.0,
    reviews: 39,
    code: 'KLG-MOT-15E',
    image: '/images/generator.png',
    description: 'Motor KALIAG 420cc para chancadoras, picadoras industriales, mezcladoras de concreto y embarcaciones.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Potencia Nominal': '15.0 HP (420 cc)',
      'Diámetro de Eje': '1" (25.4 mm) Cuñero',
      'Arranque': 'Eléctrico con llave + Chapa + Arrancador manual',
      'Filtro de Aire': 'Doble elemento (Esponja + Papel seco industrial)',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Potencia Industrial'
  },
  {
    id: 'comp-100l',
    name: 'Compresora de Aire Monoblock 100L KALIAG 3.0 HP',
    category: 'taller',
    badge: 'Taller & Pintura',
    rating: 4.8,
    reviews: 46,
    code: 'KLG-COMP-100L',
    image: '/images/motobomba.png',
    description: 'Compresor neumático KALIAG European Industry con tanque horizontal de 100L. Excelente para talleres mecánicos, pintado y herramientas neumáticas.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Capacidad del Tanque': '100 Litros',
      'Motor Eléctrico': '3.0 HP Monofásico 220V / 60 Hz',
      'Caudal de Aire (CFM)': '10.5 CFM',
      'Presión Máxima': '115 PSI (8 Bar)',
      'Cabezal de Bomba': '2 Cilindros en V con mirilla de aceite',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Equipamiento Neumático'
  },
  {
    id: 'sold-inv-250',
    name: 'Soldadora Inverter IGBT 250A Dual Voltage KALIAG',
    category: 'taller',
    badge: 'Tecnología IGBT',
    rating: 4.9,
    reviews: 35,
    code: 'KLG-WELD-250A',
    image: '/images/generator.png',
    description: 'Equipo de soldar portátil inverter KALIAG de 250 Amperios. Compatible con electrodos E6011, E6013, E7018 de hasta 5/32". Pantalla digital LCD.',
    specs: {
      'Marca': 'KALIAG European Industry',
      'Corriente de Salida': '20 - 250 Amperios Regulable',
      'Voltaje de Entrada': '110V / 220V Monofásico Automático',
      'Tecnología': 'Inverter IGBT de 5ta Generación',
      'Ciclo de Trabajo': '60% a 250A / 100% a 193A',
      'Accesorios Incluidos': 'Porta electrodo, grampa a tierra, careta de mano y cepillo',
      'Garantía Oficial': '12 Meses KALIAG'
    },
    tag: 'Soldadura Digital'
  }
];
