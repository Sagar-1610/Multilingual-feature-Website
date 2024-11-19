import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hin from "../locales/hi/translation.json";
import fre from "../locales/fr/translation.json";
import kor from "../locales/ko/translation.json";
import eng from "../locales/en/translation.json";
import kan from "../locales/ka/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: eng,
    },
    fr: {
      translation: fre,
    },
    ka: {
      translation: kan,
    },
    hi: {
      translation: hin,
    },
    ko: {
      translation: kor,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
