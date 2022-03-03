import { useState, createContext } from "react";
export const LanguageContext = createContext();

function LanguageProvider(props) {
  const [language, setLanguage] = useState("spanish");

  const changeLanguage = (evt) => setLanguage(evt.target.value);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
