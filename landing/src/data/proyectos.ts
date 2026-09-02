/**
 * Proyectos mostrados en la galería.
 *
 * Las fotografías vienen del sitio original (ver `assets/originales/galeria/` en
 * la raíz del repo). Donde el sitio original nombraba el proyecto se conserva el
 * nombre; el resto se describe por tipo de obra hasta que el cliente confirme
 * a qué obra corresponde cada foto.
 */

import type { ImageMetadata } from 'astro';

import velasVallartaNoche from '../assets/proyectos/velas-vallarta-noche.jpg';
import velasVallartaDia from '../assets/proyectos/velas-vallarta-dia.jpg';
import hotelYuritzi from '../assets/proyectos/hotel-yuritzi.png';
import balnearioAqualandia from '../assets/proyectos/balneario-aqualandia.jpg';
import escuelaCanama from '../assets/proyectos/escuela-canama.png';
import mosaicoDecorativo from '../assets/proyectos/mosaico-decorativo.jpg';
import hotelGuayabitos from '../assets/proyectos/hotel-guayabitos.png';
import formaLibreAerea from '../assets/proyectos/forma-libre-aerea.jpg';
import cascadaRoca from '../assets/proyectos/cascada-roca.jpg';
import jardinTropical from '../assets/proyectos/jardin-tropical.jpg';
import vistaOceano from '../assets/proyectos/vista-oceano.jpg';
import carrilNado from '../assets/proyectos/carril-nado.jpg';
import mosaicoFaunaMarina from '../assets/proyectos/mosaico-fauna-marina.jpg';
import mosaicoCobalto from '../assets/proyectos/mosaico-cobalto.jpg';
import residencialMuroRojo from '../assets/proyectos/residencial-muro-rojo.jpg';
import jacuzziIntegrado from '../assets/proyectos/jacuzzi-integrado.jpg';
import cubiertaTermica from '../assets/proyectos/cubierta-termica.jpg';
import residencialClasica from '../assets/proyectos/residencial-clasica.jpg';

export type Categoria = 'hotelero' | 'residencial' | 'institucional';

export type Proyecto = {
  imagen: ImageMetadata;
  titulo: string;
  ubicacion: string;
  categoria: Categoria;
  /** Texto alternativo descriptivo para lectores de pantalla y SEO. */
  alt: string;
  /** Ocupa dos columnas en la retícula de la galería. */
  destacado?: boolean;
};

export const categorias: Record<Categoria, string> = {
  hotelero: 'Hotelero y turístico',
  residencial: 'Residencial',
  institucional: 'Institucional y deportivo',
};

export const proyectos: Proyecto[] = [
  {
    imagen: velasVallartaDia,
    titulo: 'Velas Vallarta',
    ubicacion: 'Puerto Vallarta, Jalisco',
    categoria: 'hotelero',
    alt: 'Vista aérea del conjunto de albercas del desarrollo Velas Vallarta frente al mar en Puerto Vallarta',
    destacado: true,
  },
  {
    imagen: hotelYuritzi,
    titulo: 'Hotel Yuritzi',
    ubicacion: 'Caleta de Campos, Michoacán',
    categoria: 'hotelero',
    alt: 'Piscina de forma libre con cascada de roca y vista al océano en el Hotel Yuritzi',
  },
  {
    imagen: escuelaCanama,
    titulo: 'Escuela de Natación Canamá',
    ubicacion: 'Zapopan, Jalisco',
    categoria: 'institucional',
    alt: 'Alberca techada con carriles de nado señalizados en la Escuela de Natación Canamá',
  },
  {
    imagen: balnearioAqualandia,
    titulo: 'Balneario Aqualandia',
    ubicacion: 'Tepatitlán, Jalisco',
    categoria: 'institucional',
    alt: 'Panorámica del balneario Aqualandia con alberca recreativa, toboganes y palapas',
    destacado: true,
  },
  {
    imagen: hotelGuayabitos,
    titulo: 'Alberca hotelera de forma libre',
    ubicacion: 'Rincón de Guayabitos, Nayarit',
    categoria: 'hotelero',
    alt: 'Vista aérea de una alberca hotelera de forma libre rodeada de camastros y palmeras',
  },
  {
    imagen: mosaicoDecorativo,
    titulo: 'Mosaico decorativo a la medida',
    ubicacion: 'Zona metropolitana de Guadalajara',
    categoria: 'residencial',
    alt: 'Piscina residencial de forma libre con un mural de mosaico veneciano en el fondo',
    destacado: true,
  },
  {
    imagen: cascadaRoca,
    titulo: 'Piscina con cascada de roca',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Piscina residencial con cascada de roca artificial y enrollador de cubierta térmica',
  },
  {
    imagen: carrilNado,
    titulo: 'Carril de nado',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Carril de nado alargado con acabado en mosaico azul y grecas, sobre deck de madera',
  },
  {
    imagen: formaLibreAerea,
    titulo: 'Vaso de forma libre',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Vista aérea de una piscina residencial de forma libre con escalón de acceso',
  },
  {
    imagen: vistaOceano,
    titulo: 'Alberca con vista al océano',
    ubicacion: 'Costa de Nayarit',
    categoria: 'hotelero',
    alt: 'Alberca rectangular elevada con vista al océano Pacífico entre palmeras',
  },
  {
    imagen: mosaicoFaunaMarina,
    titulo: 'Mosaicos de fauna marina',
    ubicacion: 'Costa de Nayarit',
    categoria: 'hotelero',
    alt: 'Piscina de forma libre en obra con mosaicos de una tortuga y un pez en el fondo',
  },
  {
    imagen: jardinTropical,
    titulo: 'Piscina en jardín tropical',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Piscina residencial integrada a un jardín con palmeras y macetas de barro',
  },
  {
    imagen: mosaicoCobalto,
    titulo: 'Acabado en mosaico cobalto',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Piscina residencial con acabado en mosaico azul cobalto, banca sumergida y cubierta automática',
  },
  {
    imagen: jacuzziIntegrado,
    titulo: 'Piscina con jacuzzi integrado',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Piscina rectangular con jacuzzi integrado en una esquina y muro de piedra al fondo',
  },
  {
    imagen: residencialMuroRojo,
    titulo: 'Alberca residencial con banca',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Alberca residencial con banca sumergida, jardín y muro rojo al fondo',
  },
  {
    imagen: cubiertaTermica,
    titulo: 'Alberca con cubierta térmica',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Alberca residencial con enrollador y cubierta térmica azul recogida en un extremo',
  },
  {
    imagen: residencialClasica,
    titulo: 'Alberca residencial clásica',
    ubicacion: 'Jalisco',
    categoria: 'residencial',
    alt: 'Alberca residencial rectangular con greca de mosaico y jardín florido alrededor',
  },
];

export { velasVallartaNoche };
