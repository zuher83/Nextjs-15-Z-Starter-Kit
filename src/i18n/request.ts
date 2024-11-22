import type { LanguagesType } from '../types/languages';

import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale as LanguagesType)) {
    locale = routing.defaultLocale;
  }

  // When using Turbopack, this will enable HMR for `en`
  return {
    locale,
    messages: (
      await (locale === 'en'
        ? import('../../messages/en.json')
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
