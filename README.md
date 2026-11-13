# Hotel de Montaña El Descanso — sitio web (ES/EN)

Sitio estático del **Hotel de Montaña El Descanso**, en San Gerardo de Rivas, Pérez Zeledón:
la base clásica para subir al Cerro Chirripó.

Identidad propia: verde profundo, ocre y papel de piedra, con títulos en Archivo.

> Antes de publicar, leer **[PENDIENTES.md](./PENDIENTES.md)**. Los precios son inventados y
> las fotos son de baja resolución y sin autorización escrita.

## Identidad

- **Tipografías:** Archivo (títulos), Source Sans 3 (texto), IBM Plex Mono (etiquetas).
- **Colores:** verde profundo `#191f1a` / `#242c25`, ocre `#b9852f`, papel `#f6f3ea`.
- **Detalles:** esquinas rectas, línea ocre en las etiquetas, borde superior ocre en las
  tarjetas de habitación y un favicon de montaña con sol.

## Datos usados

| Dato | Valor | Fuente |
| --- | --- | --- |
| Dirección | 300 m al este del MINAE, Ruta 242 | Destinia |
| Teléfonos | 2742-5061 · 8382-2355 | Lista local |
| Correo | hoteleldescanso@hotmail.com | Lista local |
| Habitaciones | 9 (2 privadas, 7 compartidas) | Explore Costa Rica |
| Rating | 4,8/5 (50 reseñas) | Tripadvisor |
| Check-in / out | 12:00–18:30 / 11:00 | Booking |
| Servicios | restaurante, desayuno, parqueo, Wi-Fi, sauna, jardín, transporte al sendero | Tripadvisor |
| Precios | desde US$28 | **placeholder** |

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321 · /en/ para inglés
npm run build     # /dist
npm run preview
```

## Rutas

| Página | Español | Inglés |
| --- | --- | --- |
| Portada | `/` | `/en/` |
| Habitaciones | `/habitaciones/` | `/en/rooms/` |
| Matrimonial | `/habitaciones/matrimonial/` | `/en/rooms/matrimonial/` |
| Doble | `/habitaciones/doble/` | `/en/rooms/doble/` |
| Individual | `/habitaciones/individual/` | `/en/rooms/individual/` |

## Estructura

- `src/data/hotel.ts` — contenido ES/EN, precios, habitaciones, galería y SEO.
- `src/data/ui.ts` — botones, formularios, navegación.
- `src/lib/i18n.ts` — rutas y cambio de idioma.
- `src/views/` — páginas compartidas.
- `src/components/` — secciones.
- `src/styles/global.css` — colores, tipografías y estilos.
- `public/img/` — 13 fotos del hotel (ver `LEEME.txt`).

## Cuando el hotel confirme datos

1. Editar `shared` en `src/data/hotel.ts` (teléfono, WhatsApp, correo, horarios, coordenadas).
2. Actualizar `rooms` en `hotels.es` y `hotels.en`.
3. Reemplazar las fotos en `public/img/` y ajustar `image` si cambia el nombre.
4. Cambiar `site` en `astro.config.mjs` y el sitemap en `robots.txt`.
5. Revisar la traducción al inglés.
