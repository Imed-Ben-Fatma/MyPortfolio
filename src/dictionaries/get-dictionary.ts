const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'fr') => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries['en']();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
