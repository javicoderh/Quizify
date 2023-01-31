import React from "react";
import { useContext, useState } from "react";
import { LanguageProvider,  } from "../../contexts/LanguageContext"
import LanguageContext from "../../contexts/LanguageContext";
import Header from "../header/Header";
import  QuizForm  from "../form/Form";
import ResultScreen from "../results/Result";

const Index : any = () => {
  
const initialLanguage = 'en'
const { texts, handleLanguage } = useContext<any>(LanguageContext)
 
return (
 <div className="App-header">
  <Header />
  <QuizForm />
  <ResultScreen />
 </div> 
)
}

export default Index