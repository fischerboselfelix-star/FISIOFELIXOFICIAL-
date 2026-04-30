import { defineMiddleware } from 'astro:middleware';

const supportedLangs = ['es', 'en', 'de', 'fr', 'ru'];

export const onRequest = defineMiddleware(({ request, redirect }, next) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Si ya está en una ruta de idioma, no redirigir
  const isLangRoute = supportedLangs.some(lang => 
    pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );
  
  if (isLangRoute || pathname !== '/') return next();

  // Leer el idioma del navegador
  const acceptLanguage = request.headers.get('accept-language') || '';
  const browserLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();

  if (supportedLangs.includes(browserLang) && browserLang !== 'es') {
    return redirect(`/${browserLang}`);
  }

  return next();
});
