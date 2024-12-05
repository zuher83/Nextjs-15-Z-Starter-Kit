import type { LanguagesType } from '../types/languages';

import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = (await requestLocale) || 'en';

  // Try to get locale from cookies
  const localCookies = await cookies();
  const cookieLocale = localCookies.get('NEXT_LOCALE')?.value;

  // Use cookie locale if valid, otherwise keep current locale
  if (cookieLocale && routing.locales.includes(cookieLocale as LanguagesType)) {
    locale = cookieLocale;
  }

  // Ensure the locale is valid, if not fallback to 'en'
  if (!routing.locales.includes(locale as LanguagesType)) {
    locale = 'en';
  }

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
      locale,
      messages,
    };
  } catch (error) {
    // If translation file not found, fallback to English
    const messages = (await import('../../messages/en.json')).default;

    return {
      locale: 'en',
      messages,
    };
  }
});
