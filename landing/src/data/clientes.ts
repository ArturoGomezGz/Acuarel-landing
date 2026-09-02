import type { ImageMetadata } from 'astro';

import velasVallarta from '../assets/clientes/velas-vallarta.png';
import flamingosGolf from '../assets/clientes/flamingos-golf.png';
import ayuntamientoGuadalajara from '../assets/clientes/ayuntamiento-guadalajara.png';
import acqualandia from '../assets/clientes/acqualandia.png';
import laPuntaManzanillo from '../assets/clientes/la-punta-manzanillo.png';

/** Clientes con logotipo disponible, para el muro de marcas. */
export const logosClientes: { imagen: ImageMetadata; nombre: string }[] = [
  { imagen: velasVallarta, nombre: 'Velas Vallarta' },
  { imagen: flamingosGolf, nombre: 'Club de Golf Flamingos' },
  { imagen: ayuntamientoGuadalajara, nombre: 'H. Ayuntamiento de Guadalajara' },
  { imagen: acqualandia, nombre: 'Acqualandia' },
  { imagen: laPuntaManzanillo, nombre: 'La Punta Manzanillo' },
];

/** Lista completa de clientes atendidos, tal como la publica el sitio actual. */
export const clientes: { nombre: string; ubicacion: string }[] = [
  { nombre: 'Velas Vallarta Desarrollo', ubicacion: 'Puerto Vallarta, Jalisco' },
  { nombre: 'Balneario Aqualandia de Tepa', ubicacion: 'Tepatitlán, Jalisco' },
  { nombre: 'La Punta', ubicacion: 'Manzanillo, Colima' },
  { nombre: 'Club de Golf Flamingos', ubicacion: 'Nuevo Vallarta, Nayarit' },
  { nombre: 'H. Ayuntamiento de Guadalajara', ubicacion: 'Guadalajara, Jalisco' },
  { nombre: 'H. Ayuntamiento de Tonalá', ubicacion: 'Tonalá, Jalisco' },
  { nombre: 'Escuela de Natación Canamá', ubicacion: 'Zapopan, Jalisco' },
  { nombre: 'Hotel Bugambilias', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Hotel Guayabitos', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Hotel Yuritzi', ubicacion: 'Caleta de Campos, Michoacán' },
  { nombre: 'Hotel Las Villas', ubicacion: 'Caleta de Campos, Michoacán' },
  { nombre: 'Hotel El Márquez', ubicacion: 'Barra de Navidad, Jalisco' },
  { nombre: 'Hotel Tlahuasco', ubicacion: 'Villahermosa, Tabasco' },
  { nombre: 'Serena Marina and Golf Residencial', ubicacion: 'Mazatlán, Sinaloa' },
  { nombre: 'Promociones Vacacionales, S.A.', ubicacion: 'Mazatlán, Sinaloa' },
  { nombre: 'Fracc. Las Ceibas', ubicacion: 'Nuevo Vallarta, Nayarit' },
  { nombre: 'Club Rotario', ubicacion: 'Apatzingán, Michoacán' },
  { nombre: 'Balneario de Tocumbo', ubicacion: 'Tocumbo, Michoacán' },
  { nombre: 'Corona de Balsas', ubicacion: 'Playa Azul, Michoacán' },
  { nombre: 'Parque La Loma (remodelación del estanque)', ubicacion: 'Tepic, Nayarit' },
  { nombre: 'Rancho Don Gabriel', ubicacion: 'Sta. Paula, Jalisco' },
  { nombre: 'Suites Lila (remodelación)', ubicacion: 'Guadalajara, Jalisco' },
  { nombre: 'Restaurant Los Delfines', ubicacion: 'Los Ayala, Nayarit' },
  { nombre: 'Paraíso del Pescador', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Posada La Misión', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Posada Jaltemba', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Bungalows El Pescador', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Bungalows Anahí', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Bungalows Noé', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Bungalows Paty', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Bungalows Teocaltiche', ubicacion: 'Guayabitos, Nayarit' },
  { nombre: 'Bungalows Careyes', ubicacion: 'Los Ayala, Nayarit' },
  { nombre: 'Bungalows Alexa', ubicacion: 'Los Ayala, Nayarit' },
  { nombre: 'Bungalows Aruba', ubicacion: 'Los Ayala, Nayarit' },
  { nombre: 'Bungalows Emmanuel', ubicacion: 'Los Ayala, Nayarit' },
  { nombre: 'Bungalows Mar y Paz', ubicacion: 'Los Ayala, Nayarit' },
  { nombre: 'Desarrollo en Guatemala', ubicacion: 'Guatemala' },
];
