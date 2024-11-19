import { createContext, useEffect, useState } from "react";
import i18n from "../i18next/I18next";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const langLoading = localStorage.getItem("lang");
    return langLoading || "en";
  });
  const languages = [
    { code: "en", lang: "English", url: "https://flagsapi.com/US/flat/32.png" },
    { code: "ka", lang: "Kannada", url: "https://flagsapi.com/IN/flat/32.png" },
    { code: "fr", lang: "French", url: "https://flagsapi.com/FR/flat/32.png" },
    { code: "hi", lang: "Hindi", url: "https://flagsapi.com/IN/flat/32.png" },
    { code: "ko", lang: "Korean", url: "https://flagsapi.com/KR/flat/32.png" },
  ];

  useEffect(() => {
    const getLang = localStorage.getItem("lang");
    document.body.dir = i18n.dir(getLang);
    i18n.changeLanguage(getLang);
    setLang(getLang);
  }, [i18n]);

  const ChangeLanguages = (ln) => {
    localStorage.setItem("lang", ln);
    i18n.changeLanguage(ln);
    setLang(ln);
  };
  return (
    <GlobalContext.Provider value={{ ChangeLanguages, languages, lang }}>
      {children}
    </GlobalContext.Provider>
  );
};
