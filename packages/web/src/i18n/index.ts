import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';

const resources = {
  fr,
  en,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
