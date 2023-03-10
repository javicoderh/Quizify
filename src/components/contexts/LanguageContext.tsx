import { Children, createContext } from "react";
import { useState } from "react";
import { translations, initialLanguage } from "./translations";


const LanguageContext = createContext("");
interface LanguageInterface {
  children: React.ReactNode
}
const LanguageProvider =  (props: LanguageInterface) => {
const [ language, setLanguage ] = useState <string> (initialLanguage);
const [ texts, setTexts ] = useState(translations[language]); 
  

const handleLanguage = () => {
 if (language === "en") {
 setLanguage("es")
 setTexts(translations.es)
 }
 if (language === "es"){
 setLanguage("en")
 setTexts(translations.en)
 } 
 };
 
 
const data : any = { language, texts, handleLanguage };
return (
 <LanguageContext.Provider value={data}>{props.children}</LanguageContext.Provider>
)
};


export { LanguageProvider };
export default LanguageContext