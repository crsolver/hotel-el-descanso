/**
 * Rutas y utilidades de idioma.
 *
 * Español vive en la raíz (/) y inglés bajo /en/.
 * Al agregar un idioma nuevo, sumarlo aquí y en `src/data/hotel.ts` y `src/data/ui.ts`.
 */
export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export const routes: Record<
  Locale,
  { home: string; rooms: string; room: (slug: string) => string; base: string }
> = {
  es: {
    home: '/',
    rooms: '/habitaciones/',
    room: (slug) => `/habitaciones/${slug}/`,
    base: '',
  },
  en: {
    home: '/en/',
    rooms: '/en/rooms/',
    room: (slug) => `/en/rooms/${slug}/`,
    base: '/en',
  },
};

export function localeFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'es';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/** Devuelve la URL equivalente de la página actual en el otro idioma. */
export function altPath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const targetRoutes = routes[target];

  if (clean === '/' || clean === '/en') return targetRoutes.home;
  if (/^\/(habitaciones|en\/rooms)$/.test(clean)) return targetRoutes.rooms;

  const room = clean.match(/^\/(?:habitaciones|en\/rooms)\/([^/]+)$/);
  if (room) return targetRoutes.room(room[1]);

  return targetRoutes.home;
}
