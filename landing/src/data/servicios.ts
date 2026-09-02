/**
 * Los 16 productos y servicios del sitio original, reagrupados en tres bloques
 * legibles en lugar de una lista plana. El texto de cada punto conserva el
 * término que usa la empresa.
 */

export type Servicio = {
  id: string;
  titulo: string;
  resumen: string;
  puntos: string[];
  /** Nombre del ícono en `src/components/Icono.astro`. */
  icono: 'construccion' | 'equipamiento' | 'mantenimiento';
};

export const servicios: Servicio[] = [
  {
    id: 'construccion',
    titulo: 'Diseño y construcción',
    resumen:
      'Piscinas en concreto armado proyectadas a la medida del terreno, del uso y del presupuesto: desde una alberca residencial hasta un vaso semiolímpico.',
    puntos: [
      'Diseño y construcción en concreto armado',
      'Nado contracorriente',
      'Fuentes decorativas',
      'Accesorios para hidromasaje',
      'Sistemas de iluminación: tradicional, fibra óptica, LED y rueda de color',
    ],
    icono: 'construccion',
  },
  {
    id: 'equipamiento',
    titulo: 'Equipamiento',
    resumen:
      'Filtración, climatización y automatización con las mejores marcas del mercado, dimensionadas para el volumen real de cada vaso.',
    puntos: [
      'Equipos de filtrado',
      'Calentadores solares y de gas',
      'Bombas de calor comerciales y residenciales',
      'Sistemas de automatización y timers',
      'Cubiertas, enrolladores y cubiertas automáticas',
    ],
    icono: 'equipamiento',
  },
  {
    id: 'mantenimiento',
    titulo: 'Mantenimiento',
    resumen:
      'Programas de mantenimiento y tratamiento de agua para que la piscina esté lista todos los días del año, sin sorpresas.',
    puntos: [
      'Mantenimiento preventivo y correctivo',
      'Cloradores y sanitizadores',
      'Generadores de cloro a base de sal',
      'Productos químicos',
      'Accesorios de limpieza',
    ],
    icono: 'mantenimiento',
  },
];
