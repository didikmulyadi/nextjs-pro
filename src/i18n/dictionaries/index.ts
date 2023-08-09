/* eslint-disable import/no-unused-modules */
const dictionaries = {
  en: () => import('./en').then((module) => module.default),
  id: () => import('./id').then((module) => module.default),
}

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'id'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const getTranslation = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
