/**
 * HOTEL DE MONTAÑA EL DESCANSO — San Gerardo de Rivas, Pérez Zeledón.
 *
 * Fuentes: Explore Costa Rica, Tripadvisor, Destinia, IMPT, HotelPlanner,
 * Booking.com y reseñas de huéspedes.
 *
 * Los valores marcados PLACEHOLDER no están confirmados. Ver PENDIENTES.md.
 * Las fotos vienen de la galería pública del hotel y son de baja resolución.
 */

export interface Room {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  capacity: number;
  beds: string;
  size: string;
  features: string[];
  image: string | null;
  imageAlt: string;
}

export interface Amenity {
  icon: string;
  title: string;
  text: string;
}

export interface Attraction {
  name: string;
  distance: string;
  text: string;
}

export interface Review {
  name: string;
  origin: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface GalleryItem {
  image: string | null;
  alt: string;
  caption: string;
  tone: number;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  text?: string;
}

export interface Hotel {
  name: string;
  shortName: string;
  legalName: string;
  stars: number;
  tagline: string;
  description: string;
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  contact: {
    phone: string;
    phoneHref: string;
    whatsapp: string;
    email: string;
    address: string;
    city: string;
    mapsQuery: string;
    coords: { lat: number; lng: number };
    social: { label: string; href: string }[];
  };
  checkIn: string;
  checkOut: string;
  currency: string;
  priceFrom: number;
  hero: {
    image: string | null;
    alt: string;
    eyebrow: string;
    titleLead: string;
    titleEm: string;
    titleTail: string;
    facts: { icon: string; text: string }[];
  };
  amenities: Amenity[];
  rooms: Room[];
  attractions: Attraction[];
  gallery: GalleryItem[];
  reviews: Review[];
  sections: {
    rooms: SectionCopy;
    amenities: SectionCopy;
    gallery: SectionCopy;
    location: SectionCopy;
    reviews: { eyebrow: string; title: string };
    contact: {
      eyebrow: string;
      title: string;
      text: string;
      formTitle: string;
      formText: string;
    };
  };
  pages: {
    rooms: {
      eyebrow: string;
      title: string;
      text: string;
      description: string;
    };
  };
  seo: { title: string; description: string; image?: string };
}

const shared = {
  // PLACEHOLDER: una ficha dice 3 estrellas y otras 2; no hay clasificación oficial.
  stars: 3,
  contact: {
    phone: '+506 2742 5061',
    phoneHref: '+50627425061',
    // PLACEHOLDER: se usa el móvil de la ficha del hotel; confirmar WhatsApp.
    whatsapp: '50683822355',
    email: 'hoteleldescanso@hotmail.com',
    address: '300 m al este de las oficinas del MINAE, Ruta 242',
    city: 'San Gerardo de Rivas, Pérez Zeledón, San José, Costa Rica',
    mapsQuery:
      'Hotel de Montaña El Descanso, San Gerardo de Rivas, Pérez Zeledón, Costa Rica',
    coords: { lat: 9.4649, lng: -83.5992 },
    social: [],
  },
  checkIn: '12:00',
  checkOut: '11:00',
  currency: 'USD',
  // PLACEHOLDER: no se encontró tarifa oficial para este hotel.
  priceFrom: 28,
} satisfies Partial<Hotel>;

export const hotels: Record<'es' | 'en', Hotel> = {
  es: {
    ...shared,
    name: 'Hotel de Montaña El Descanso',
    shortName: 'El Descanso',
    legalName: 'Hotel de Montaña El Descanso',
    tagline: 'Su base en San Gerardo de Rivas, camino al Chirripó',
    description:
      'Hotel de montaña con más de 26 años en San Gerardo de Rivas, a 300 metros de las oficinas del MINAE. Nueve habitaciones, restaurante, desayuno incluido, sauna, jardín y transporte al inicio del sendero del Chirripó.',

    intro: {
      eyebrow: 'La casa',
      title: 'Un descanso antes de subir',
      paragraphs: [
        'El Descanso está sobre la Ruta 242, a 300 metros de las oficinas del MINAE y a unos dos kilómetros del inicio del sendero al Chirripó. Es una casa de madera con jardín, terrazas y vistas al valle, atendida por la misma familia desde hace más de 26 años.',
        'Aquí se duerme, se come bien y se sale temprano. Preparan desayuno para llevar, guardan el equipaje mientras usted sube y lo llevan al punto cero del sendero. A la vuelta hay ducha caliente, sauna y una mesa puesta.',
      ],
      highlights: [
        'Transporte al sendero',
        'Desayuno incluido',
        'Restaurante propio',
      ],
    },

    hero: {
      image: '/img/jardin-hero.jpg',
      alt: 'Hotel de Montaña El Descanso entre árboles y jardín, con el valle al fondo',
      eyebrow: 'San Gerardo de Rivas · Valle del Chirripó',
      titleLead: 'Descanse aquí',
      titleEm: 'antes y después',
      titleTail: 'del Chirripó',
      facts: [
        { icon: 'coffee', text: 'Desayuno incluido' },
        { icon: 'tour', text: 'Transporte al sendero' },
        { icon: 'water', text: 'Sauna' },
        { icon: 'parking', text: 'Parqueo gratis' },
      ],
    },

    amenities: [
      {
        icon: 'utensils',
        title: 'Restaurante',
        text: 'Comida casera, con opciones vegetarianas y cerveza local.',
      },
      {
        icon: 'coffee',
        title: 'Desayuno incluido',
        text: 'A la carta, de 7:00 a 11:00; también para llevar.',
      },
      {
        icon: 'tour',
        title: 'Transporte al sendero',
        text: 'Traslado al punto cero del Chirripó, coordinado con recepción.',
      },
      {
        icon: 'parking',
        title: 'Parqueo gratis',
        text: 'Estacionamiento privado dentro de la propiedad.',
      },
      {
        icon: 'wifi',
        title: 'Wi-Fi gratis',
        text: 'Internet inalámbrico en las habitaciones y áreas comunes.',
      },
      {
        icon: 'water',
        title: 'Sauna',
        text: 'Para descansar los músculos después de la caminata.',
      },
      {
        icon: 'leaf',
        title: 'Jardín y terraza',
        text: 'Árboles, flores y sillas para ver el atardecer sobre la montaña.',
      },
      {
        icon: 'bag',
        title: 'Guarda equipaje',
        text: 'Deje sus cosas mientras sube al Chirripó.',
      },
      {
        icon: 'clock',
        title: 'Recepción 7:00–18:30',
        text: 'Avise si llega más tarde para coordinar la entrada.',
      },
      {
        icon: 'users',
        title: 'Ambiente familiar',
        text: 'Atención de la familia que vive en la casa.',
      },
      {
        icon: 'utensils',
        title: 'Cena con reserva',
        text: 'Cocina abierta hasta cerca de las 19:30; reserve al llegar.',
      },
      {
        icon: 'calendar',
        title: 'Información de rutas',
        text: 'Mapa del valle, horarios del parque y consejos locales.',
      },
    ],

    rooms: [
      {
        slug: 'matrimonial',
        name: 'Habitación Matrimonial',
        tagline: 'Baño privado',
        description:
          'Habitación de madera con cama doble, ropa de cama de algodón y baño privado con ducha de lluvia. Ventana al jardín y calefacción para las noches frías de montaña.',
        price: 45,
        capacity: 2,
        beds: '1 cama doble',
        // PLACEHOLDER: tamaño estimado.
        size: 'Aprox. 16 m²',
        features: [
          'Baño privado',
          'Ducha de lluvia',
          'Ropa de cama de algodón',
          'Wi-Fi',
          'Ventana al jardín',
          'Desayuno incluido',
        ],
        image: '/img/habitacion-matrimonial.jpg',
        imageAlt: 'Habitación matrimonial con cama de madera y cuadro de colores',
      },
      {
        slug: 'doble',
        name: 'Habitación Doble',
        tagline: 'Baño compartido',
        description:
          'Habitación con dos camas y baño compartido en el pasillo, con duchas amplias y agua caliente. Es la opción que eligen muchas parejas y grupos que suben al Chirripó.',
        price: 35,
        capacity: 3,
        beds: '2 camas dobles',
        // PLACEHOLDER: tamaño estimado.
        size: 'Aprox. 18 m²',
        features: [
          'Baño compartido',
          'Agua caliente',
          'Wi-Fi',
          'Ventana al jardín',
          'Desayuno incluido',
        ],
        image: '/img/habitacion-doble.jpg',
        imageAlt: 'Habitación doble con dos camas y colchas de flores',
      },
      {
        slug: 'individual',
        name: 'Habitación Individual',
        tagline: 'La opción sencilla',
        description:
          'Cuarto pequeño con una cama individual y baño compartido, pensado para quien viaja solo y quiere gastar poco. Tiene lo necesario: cama cómoda, agua caliente y desayuno.',
        price: 28,
        capacity: 1,
        beds: '1 cama individual',
        // PLACEHOLDER: tamaño estimado.
        size: 'Aprox. 10 m²',
        features: [
          'Baño compartido',
          'Agua caliente',
          'Wi-Fi',
          'Desayuno incluido',
        ],
        image: '/img/habitacion-individual.jpg',
        imageAlt: 'Habitación individual con cama y ventana',
      },
    ],

    attractions: [
      {
        name: 'Sendero al Chirripó (km 0)',
        distance: '2 km · transporte',
        text: 'El hotel coordina el traslado al inicio de la ruta.',
      },
      {
        name: 'Reserva Cloudbridge',
        distance: '2 km',
        text: 'Senderos de bosque nuboso y observación de aves.',
      },
      {
        name: 'Jardines Secretos',
        distance: '200 m',
        text: 'Jardín botánico y cafetería, a dos minutos a pie.',
      },
      {
        name: 'Aguas termales Gevi',
        distance: '1 km',
        text: 'Pozas naturales para después de la caminata.',
      },
      {
        name: 'Quesos Canaan',
        distance: '1,7 km',
        text: 'Fábrica de queso de la zona, con visita y degustación.',
      },
      {
        name: 'San Isidro de El General',
        distance: '40 min en carro',
        text: 'Ciudad, buses, bancos y supermercados.',
      },
    ],

    gallery: [
      {
        image: '/img/jardin-hero.jpg',
        alt: 'Casa de madera del hotel rodeada de jardín y árboles',
        caption: 'La casa y el jardín',
        tone: 1,
      },
      {
        image: '/img/montana.jpg',
        alt: 'Vista del valle y las montañas desde el hotel',
        caption: 'El valle',
        tone: 2,
      },
      {
        image: '/img/atardecer.jpg',
        alt: 'Atardecer sobre el Cerro Chirripó',
        caption: 'Atardecer en el Chirripó',
        tone: 3,
      },
      {
        image: '/img/restaurante.jpg',
        alt: 'Comedor con mesas de madera y cortinas rojas',
        caption: 'El comedor',
        tone: 4,
      },
      {
        image: '/img/terraza.jpg',
        alt: 'Terraza con sillón y piso de madera',
        caption: 'La terraza',
        tone: 5,
      },
      {
        image: '/img/entrada.jpg',
        alt: 'Entrada del hotel con bancas de madera',
        caption: 'Entrada',
        tone: 6,
      },
      {
        image: '/img/sendero.jpg',
        alt: 'Dos caminantes en un sendero verde',
        caption: 'Camino al Chirripó',
        tone: 7,
      },
      {
        image: '/img/catarata.jpg',
        alt: 'Catarata entre vegetación',
        caption: 'Cataratas de la zona',
        tone: 8,
      },
    ],

    reviews: [
      {
        name: 'Hannah',
        origin: 'Viajera desde Dubái',
        rating: 5,
        text: 'Hazel es la mejor anfitriona que se puede pedir. Respondió todas nuestras dudas antes de subir al Chirripó, nos preparó desayuno para llevar (con opción vegana), guardó el equipaje mientras estábamos en el refugio y nos llevó al inicio del sendero. A la vuelta pudimos ducharnos y hasta nos acercaron al cajero.',
        date: 'Marzo 2022',
        source: 'Tripadvisor',
      },
      {
        name: 'Gea',
        origin: 'Viaje en familia',
        rating: 5,
        text: 'Nos quedamos tres noches, con la subida al Chirripó en medio. Nos sentimos muy bien recibidos, la gente es encantadora. Las habitaciones estaban limpias y agradables, y tenían muchas opciones vegetarianas deliciosas para la cena.',
        date: 'Noviembre 2018',
        source: 'Tripadvisor',
      },
      {
        name: 'Thomas Bornheim',
        origin: 'Huésped de Google',
        rating: 5,
        text: 'Un hotel maravilloso. Los anfitriones son increíbles y el desayuno y la cena son excelentes. El cocinero se formó en Sonoma y realmente sabe lo que hace. Recomiendo reservar las comidas al llegar; la cocina cierra cerca de las 19:30.',
        date: 'Marzo 2018',
        source: 'Google',
      },
    ],

    sections: {
      rooms: {
        eyebrow: 'Habitaciones',
        title: 'Dormir temprano, salir temprano',
        text: 'Nueve habitaciones sencillas, dos con baño privado y siete con baño compartido. Todas incluyen desayuno y acceso al jardín.',
      },
      amenities: {
        eyebrow: 'Servicios',
        title: 'Pensado para la montaña',
        text: 'Transporte, desayuno para llevar, guarda equipaje y una ducha caliente a la vuelta.',
      },
      gallery: {
        eyebrow: 'Galería',
        title: 'La casa, el valle y el Chirripó',
        text: 'Fotos del hotel y de su entorno. Toque una imagen para verla más grande.',
      },
      location: {
        eyebrow: 'Ubicación',
        title: 'A 300 metros del MINAE',
        text: 'Sobre la Ruta 242, en San Gerardo de Rivas. El sendero al Chirripó empieza a dos kilómetros y el hotel coordina el traslado.',
      },
      reviews: {
        eyebrow: 'Huéspedes',
        title: 'Historias de quienes subieron',
      },
      contact: {
        eyebrow: 'Reservas',
        title: 'Escriba o llame al hotel',
        text: 'Avise a qué hora llega y si quiere transporte al sendero, desayuno para llevar o cena. La recepción atiende de 7:00 a 18:30.',
        formTitle: 'Consultar disponibilidad',
        formText: 'Indique las fechas y le confirmamos por WhatsApp o correo.',
      },
    },

    pages: {
      rooms: {
        eyebrow: 'Habitaciones',
        title: 'Tres formas de descansar',
        text: 'Baño privado o compartido, desayuno incluido y el jardín a la puerta.',
        description:
          'Habitaciones y precios del Hotel de Montaña El Descanso, San Gerardo de Rivas, Pérez Zeledón.',
      },
    },

    seo: {
      title: 'Hotel de montaña en San Gerardo de Rivas, camino al Chirripó',
      description:
        'Hotel con más de 26 años en San Gerardo de Rivas, a 300 m del MINAE. Habitaciones con baño privado o compartido, restaurante, desayuno incluido, sauna, jardín y transporte al sendero del Chirripó.',
      image: '/img/jardin-hero.jpg',
    },
  },

  en: {
    ...shared,
    name: 'Hotel de Montaña El Descanso',
    shortName: 'El Descanso',
    legalName: 'Hotel de Montaña El Descanso',
    tagline: 'Your base in San Gerardo de Rivas, on the way to Chirripó',
    description:
      'Mountain hotel with more than 26 years in San Gerardo de Rivas, 300 metres from the MINAE office. Nine rooms, restaurant, breakfast included, sauna, garden and transport to the Chirripó trailhead.',

    intro: {
      eyebrow: 'The house',
      title: 'A rest before the climb',
      paragraphs: [
        'El Descanso sits on Route 242, 300 metres from the MINAE office and about two kilometres from the start of the Chirripó trail. It is a wooden house with a garden, terraces and valley views, run by the same family for more than 26 years.',
        'Here you sleep, eat well and leave early. They pack breakfast to go, keep your bags while you climb and drive you to kilometre zero. When you come back there is a hot shower, a sauna and a table set for dinner.',
      ],
      highlights: [
        'Transport to the trailhead',
        'Breakfast included',
        'On-site restaurant',
      ],
    },

    hero: {
      image: '/img/jardin-hero.jpg',
      alt: 'Hotel de Montaña El Descanso among trees and gardens, with the valley behind',
      eyebrow: 'San Gerardo de Rivas · Chirripó Valley',
      titleLead: 'Rest here',
      titleEm: 'before and after',
      titleTail: 'Chirripó',
      facts: [
        { icon: 'coffee', text: 'Breakfast included' },
        { icon: 'tour', text: 'Trailhead transport' },
        { icon: 'water', text: 'Sauna' },
        { icon: 'parking', text: 'Free parking' },
      ],
    },

    amenities: [
      {
        icon: 'utensils',
        title: 'Restaurant',
        text: 'Home cooking, with vegetarian options and local beer.',
      },
      {
        icon: 'coffee',
        title: 'Breakfast included',
        text: 'Cooked to order, 7:00 to 11:00; packed breakfast available.',
      },
      {
        icon: 'tour',
        title: 'Trailhead transport',
        text: 'Transfer to Chirripó kilometre zero, arranged at reception.',
      },
      {
        icon: 'parking',
        title: 'Free parking',
        text: 'Private parking on the property.',
      },
      {
        icon: 'wifi',
        title: 'Free Wi-Fi',
        text: 'Wireless internet in the rooms and common areas.',
      },
      {
        icon: 'water',
        title: 'Sauna',
        text: 'For sore legs after the hike.',
      },
      {
        icon: 'leaf',
        title: 'Garden and terrace',
        text: 'Trees, flowers and chairs to watch the sun set over the mountain.',
      },
      {
        icon: 'bag',
        title: 'Luggage storage',
        text: 'Leave your things while you climb Chirripó.',
      },
      {
        icon: 'clock',
        title: 'Reception 7:00–18:30',
        text: 'Let us know if you arrive later so we can arrange check-in.',
      },
      {
        icon: 'users',
        title: 'Family-run',
        text: 'Looked after by the family who lives in the house.',
      },
      {
        icon: 'utensils',
        title: 'Dinner by reservation',
        text: 'Kitchen open until about 19:30; book when you arrive.',
      },
      {
        icon: 'calendar',
        title: 'Trail information',
        text: 'Valley map, park schedules and local advice.',
      },
    ],

    rooms: [
      {
        slug: 'matrimonial',
        name: 'Double Room',
        tagline: 'Private bathroom',
        description:
          'A wooden room with a double bed, cotton bedding and a private bathroom with a rain shower. Garden window and heating for cold mountain nights.',
        price: 45,
        capacity: 2,
        beds: '1 double bed',
        size: 'Approx. 16 m²',
        features: [
          'Private bathroom',
          'Rain shower',
          'Cotton bedding',
          'Wi-Fi',
          'Garden window',
          'Breakfast included',
        ],
        image: '/img/habitacion-matrimonial.jpg',
        imageAlt: 'Double room with a wooden bed and a colourful painting',
      },
      {
        slug: 'doble',
        name: 'Twin Room',
        tagline: 'Shared bathroom',
        description:
          'A room with two beds and a shared bathroom in the hall, with roomy showers and hot water. A common choice for couples and groups heading up Chirripó.',
        price: 35,
        capacity: 3,
        beds: '2 double beds',
        size: 'Approx. 18 m²',
        features: [
          'Shared bathroom',
          'Hot water',
          'Wi-Fi',
          'Garden window',
          'Breakfast included',
        ],
        image: '/img/habitacion-doble.jpg',
        imageAlt: 'Twin room with two beds and floral covers',
      },
      {
        slug: 'individual',
        name: 'Single Room',
        tagline: 'The simple option',
        description:
          'A small room with a single bed and shared bathroom, for solo travellers watching their budget. It has what you need: a comfortable bed, hot water and breakfast.',
        price: 28,
        capacity: 1,
        beds: '1 single bed',
        size: 'Approx. 10 m²',
        features: ['Shared bathroom', 'Hot water', 'Wi-Fi', 'Breakfast included'],
        image: '/img/habitacion-individual.jpg',
        imageAlt: 'Single room with a bed and a window',
      },
    ],

    attractions: [
      {
        name: 'Chirripó trailhead (km 0)',
        distance: '2 km · transfer',
        text: 'The hotel arranges the transfer to the start of the route.',
      },
      {
        name: 'Cloudbridge Reserve',
        distance: '2 km',
        text: 'Cloud forest trails and birdwatching.',
      },
      {
        name: 'Jardines Secretos',
        distance: '200 m',
        text: 'Botanical garden and café, two minutes on foot.',
      },
      {
        name: 'Gevi hot springs',
        distance: '1 km',
        text: 'Natural pools for after the hike.',
      },
      {
        name: 'Canaan Cheeses',
        distance: '1.7 km',
        text: 'Local cheese factory with tours and tastings.',
      },
      {
        name: 'San Isidro de El General',
        distance: '40 min drive',
        text: 'City, buses, banks and supermarkets.',
      },
    ],

    gallery: [
      {
        image: '/img/jardin-hero.jpg',
        alt: 'Wooden hotel house surrounded by garden and trees',
        caption: 'The house and garden',
        tone: 1,
      },
      {
        image: '/img/montana.jpg',
        alt: 'View of the valley and mountains from the hotel',
        caption: 'The valley',
        tone: 2,
      },
      {
        image: '/img/atardecer.jpg',
        alt: 'Sunset over Cerro Chirripó',
        caption: 'Sunset over Chirripó',
        tone: 3,
      },
      {
        image: '/img/restaurante.jpg',
        alt: 'Dining room with wooden tables and red curtains',
        caption: 'The dining room',
        tone: 4,
      },
      {
        image: '/img/terraza.jpg',
        alt: 'Terrace with an armchair and wooden floor',
        caption: 'The terrace',
        tone: 5,
      },
      {
        image: '/img/entrada.jpg',
        alt: 'Hotel entrance with wooden benches',
        caption: 'Entrance',
        tone: 6,
      },
      {
        image: '/img/sendero.jpg',
        alt: 'Two hikers on a green trail',
        caption: 'On the way to Chirripó',
        tone: 7,
      },
      {
        image: '/img/catarata.jpg',
        alt: 'Waterfall surrounded by vegetation',
        caption: 'Local waterfalls',
        tone: 8,
      },
    ],

    reviews: [
      {
        name: 'Hannah',
        origin: 'Traveller from Dubai',
        rating: 5,
        text: 'Hazel is the best host you could ask for. She answered all our questions before the Chirripó hike, prepared a packed breakfast (with a vegan option), kept our bags while we were at base camp and drove us to the trailhead. When we got back we could shower and she even took us to the ATM.',
        date: 'March 2022',
        source: 'Tripadvisor',
      },
      {
        name: 'Gea',
        origin: 'Family trip',
        rating: 5,
        text: 'We stayed three nights with the Chirripó climb in between. We felt very welcome, the people are lovely. The rooms were clean and nice, and they had plenty of delicious vegetarian options for dinner.',
        date: 'November 2018',
        source: 'Tripadvisor',
      },
      {
        name: 'Thomas Bornheim',
        origin: 'Google guest',
        rating: 5,
        text: 'A wonderful hotel. The hosts are amazing and breakfast and dinner are excellent. The cook trained in Sonoma and really knows what he is doing. I recommend booking meals when you arrive; the kitchen closes around 19:30.',
        date: 'March 2018',
        source: 'Google',
      },
    ],

    sections: {
      rooms: {
        eyebrow: 'Rooms',
        title: 'Sleep early, leave early',
        text: 'Nine simple rooms, two with a private bathroom and seven with a shared one. All include breakfast and access to the garden.',
      },
      amenities: {
        eyebrow: 'Amenities',
        title: 'Built for the mountain',
        text: 'Transport, packed breakfast, luggage storage and a hot shower when you get back.',
      },
      gallery: {
        eyebrow: 'Gallery',
        title: 'The house, the valley and Chirripó',
        text: 'Photos of the hotel and its surroundings. Tap an image to see it larger.',
      },
      location: {
        eyebrow: 'Location',
        title: '300 metres from the MINAE office',
        text: 'On Route 242, in San Gerardo de Rivas. The Chirripó trail starts two kilometres away and the hotel arranges the transfer.',
      },
      reviews: {
        eyebrow: 'Guests',
        title: 'Stories from those who climbed',
      },
      contact: {
        eyebrow: 'Bookings',
        title: 'Write or call the hotel',
        text: 'Tell us what time you arrive and whether you want trailhead transport, packed breakfast or dinner. Reception is open 7:00 to 18:30.',
        formTitle: 'Check availability',
        formText: 'Send your dates and we will confirm by WhatsApp or email.',
      },
    },

    pages: {
      rooms: {
        eyebrow: 'Rooms',
        title: 'Three ways to rest',
        text: 'Private or shared bathroom, breakfast included and the garden at your door.',
        description:
          'Rooms and rates at Hotel de Montaña El Descanso, San Gerardo de Rivas, Pérez Zeledón.',
      },
    },

    seo: {
      title: 'Mountain hotel in San Gerardo de Rivas, on the way to Chirripó',
      description:
        'Hotel with more than 26 years in San Gerardo de Rivas, 300 m from the MINAE office. Rooms with private or shared bathroom, restaurant, breakfast included, sauna, garden and transport to the Chirripó trailhead.',
      image: '/img/jardin-hero.jpg',
    },
  },
};
