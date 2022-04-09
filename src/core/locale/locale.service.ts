import i18next from 'i18next';
import LanguageDetector, { DetectorOptions } from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from 'assets/locales/en.json';
import es from 'assets/locales/es.json';
import { LANGUAGES } from '../model/translation';

const detectorOpts: DetectorOptions = {
  order: ['localStorage', 'navigator'],
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'locale',
  lookupSessionStorage: 'locale',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
};

const resources: Record<LANGUAGES, { translation: unknown }> = {
  [LANGUAGES.EN]: { translation: en },
  [LANGUAGES.ES]: { translation: es },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    debug: process.env.NODE_ENV === 'development',
    resources,
    fallbackLng: LANGUAGES.EN,
    supportedLngs: Object.keys(resources),
    interpolation: {
      escapeValue: false,
    },
    detection: detectorOpts,
  });

export default i18next;
