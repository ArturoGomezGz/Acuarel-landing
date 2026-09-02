/**
 * Datos de negocio de Piscinas Acuarel.
 *
 * Todo lo verificado sale del sitio actual (piscinasacuarel.com).
 * Los campos marcados con PENDIENTE hay que confirmarlos con el cliente
 * antes de publicar — ver la sección 5 del README.
 */

export const site = {
  nombre: 'Piscinas Acuarel',
  tagline: 'Diseño y construcción de piscinas en concreto armado',
  descripcion:
    'Diseñamos, construimos y damos mantenimiento a piscinas en concreto armado desde 1980. ' +
    'Hoteles, residencias, escuelas de natación y balnearios en toda la República Mexicana.',
  url: 'https://www.piscinasacuarel.com',
  fundacion: 1980,
} as const;

/** Años de operación, calculados para que el dato no se congele como en el sitio actual. */
export const aniosExperiencia = new Date().getFullYear() - site.fundacion;

export const contacto = {
  telefonos: [
    { display: '(33) 3627-3634', tel: '+523336273634' },
    { display: '(33) 3810-7600', tel: '+523338107600' },
    { display: '(33) 3811-4238', tel: '+523338114238' },
  ],
  // Número de WhatsApp de la empresa. Si algún día dejara de usarse,
  // basta poner `mostrarWhatsapp` en false para ocultar el botón flotante.
  whatsapp: '+523334606118',
  mostrarWhatsapp: true,
  mensajeWhatsapp:
    'Hola, me interesa cotizar una piscina con Piscinas Acuarel. ¿Me pueden dar informes?',
  // PENDIENTE: email oficial de la empresa.
  email: null as string | null,
  direccion: {
    calle: 'Paseo de las Lomas No. 58',
    colonia: 'Fracc. Lomas del Colli',
    cp: '45010',
    ciudad: 'Zapopan',
    estado: 'Jalisco',
    pais: 'México',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Paseo+de+las+Lomas+58+Lomas+del+Colli+Zapopan+Jalisco',
  // PENDIENTE: confirmar si la página de Facebook sigue activa.
  redes: [{ nombre: 'Facebook', url: 'https://www.facebook.com/piscinaacuarel/' }],
} as const;

export const direccionUnaLinea = [
  contacto.direccion.calle,
  contacto.direccion.colonia,
  `C.P. ${contacto.direccion.cp}`,
  `${contacto.direccion.ciudad}, ${contacto.direccion.estado}`,
].join(', ');

export const whatsappUrl = `https://wa.me/${contacto.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
  contacto.mensajeWhatsapp,
)}`;

/**
 * Endpoint del formulario de contacto (Formspree, Web3Forms o similar).
 * Se define en `.env` como PUBLIC_FORM_ENDPOINT. Mientras esté vacío, el
 * formulario se muestra deshabilitado con un aviso en lugar de fallar en silencio.
 */
export const formEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT ?? '';
