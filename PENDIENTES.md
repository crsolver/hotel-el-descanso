# PENDIENTES — Hotel de Montaña El Descanso

Sitio de demostración. Hay datos verificados, precios de referencia y fotos de baja
resolución. **No publicar sin resolver esta lista.**

## 1. Datos confirmados (con fuente)

| Dato | Valor | Fuente |
| --- | --- | --- |
| Nombre | Hotel de Montaña El Descanso | Tripadvisor / Booking |
| Dirección | 300 m al este de las oficinas del MINAE, Ruta 242, San Gerardo de Rivas | Destinia / IMPT |
| Coordenadas | 9.4649, -83.5992 | IMPT |
| Teléfonos | 2742-5061 · 8382-2355 | Lista local / ficha del hotel |
| Correo | hoteleldescanso@hotmail.com | Lista local |
| Habitaciones | 9: 2 con baño privado y 7 con baño compartido | Explore Costa Rica |
| Calificación | 4,8/5 (50 reseñas), #1 de 5 alojamientos en San Gerardo | Tripadvisor |
| Check-in / check-out | 12:00–18:30 / 11:00 | Explore Costa Rica / Booking |
| Recepción | 7:00–18:30, sin check-in fuera de horario | Booking |
| Desayuno | incluido, a la carta, 7:00–11:00; también para llevar | Booking / reseñas |
| Restaurante | cocina local y vegetariana; cierra cerca de las 19:30 | Reseñas |
| Servicios | parqueo gratis, Wi-Fi, sauna, jardín, terraza, transporte al sendero, guarda equipaje | Tripadvisor / Booking |
| Trayectoria | más de 26 años | Explore Costa Rica |

## 2. Placeholders y contradicciones

| Dato | Valor usado | Nota |
| --- | --- | --- |
| Precios | US$45 / 35 / 28 | **Inventados.** No se encontró tarifa pública para este hotel. |
| WhatsApp | 8382-2355 | No confirmado; se usó el móvil de la lista local. |
| Estrellas | 3 | Una ficha dice 3 y otras 2; no hay clasificación oficial. |
| Tipos de habitación | Matrimonial (privada), Doble (compartida), Individual (compartida) | Los nombres y tamaños son inventados. La reseña menciona una “Mountainview Suite” que no se incluyó. |
| Nº de habitaciones | 9 | Booking/Destinia hablan de 2 habitaciones y Explore de 6 disponibles; se usó el total de 9. |
| Mascotas | no se mencionan | **Contradicción:** Tripadvisor dice que se admiten; Booking dice que no. Se omitió. |
| Wi-Fi | incluido | Una FAQ de Destinia dice que no; el resto de las fichas y las reseñas dicen que sí. |
| Dominio | hoteleldescanso.cr | Supuesto. Cambiar en `astro.config.mjs` y `robots.txt`. |

## 3. Fotos: baja resolución y sin licencia confirmada

Las 13 fotos de `public/img/` salen de la galería pública del hotel en HotelPlanner y su
proveedor de contenido. Son del hotel, pero:

- Solo miden **720 x 480 px**. En el hero se ven suaves; hacen falta originales.
- **No hay autorización escrita** para usarlas en un sitio propio.
- Faltan: fachada completa, sauna, baño compartido, habitaciones vacías y el comedor lleno.
- Mapa de archivos: `public/img/LEEME.txt`.

## 4. Reseñas

- Las tres reseñas son citas reales de Tripadvisor y Google, traducidas y editadas.
  Confirmar que el hotel quiera mostrarlas y revisar la atribución.
- La calificación individual (5 estrellas) es una estimación, no el puntaje del huésped.
- Solo se muestran reseñas positivas. El promedio real de Tripadvisor es 4,8/5, así que es
  representativo, pero conviene revisar todas antes de publicar.

## 5. Antes de entregar

- [ ] Confirmar tarifas reales y si el desayuno siempre está incluido.
- [ ] Confirmar WhatsApp, correo y horario de recepción.
- [ ] Confirmar tipos de habitación, tamaños y si hay suite.
- [ ] Aclarar la política de mascotas.
- [ ] Obtener fotos en alta resolución y autorización de uso.
- [ ] Cambiar dominio y sitemap.
- [ ] Probar formularios desde un teléfono (ES y EN).
- [ ] Revisar la traducción al inglés con el hotel.
- [ ] Lighthouse en móvil.
