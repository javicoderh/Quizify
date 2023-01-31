import React from "react";
import { useContext, useState } from "react";
import { LanguageProvider,  } from "../../contexts/LanguageContext"
import LanguageContext from "../../contexts/LanguageContext";
import './form.css';

const QuizForm : any = () => {
 const initialLanguage = 'en'
 const { texts, handleLanguage } = useContext<any>(LanguageContext)


return (
<div className="quizForm">
  <h2>{texts.quizFormTittle}</h2>
  <p>
   {texts.quizFormP}
  </p>
  <div className="inputs">  
   <label htmlFor="topic">{texts.quizTopic}</label>
   <input name="topic" type="text" className="topic" placeholder={texts.quizTopicPlaceholder} />
   <div className="inputNest">
    <div className="inputInnerNest">
     <label htmlFor="questionsNumber">{texts.questionsNumber}</label>
     <input className="qNumber" name="questionsNumber" type="text" placeholder="5" />
    </div>
    <div className="inputInnerNest2">
     <label className="spLabel" htmlFor="language">{texts.questionsLanguage}</label>
     <select className="lang" name="language" id="" defaultValue="Spanish">
      <option value="es">Spanish</option>
      <option value="en">English</option>
     </select>
    </div>
   </div>
   <label htmlFor="long">{texts.choicesNumber}</label>
    <input name="long" id="" className="long" placeholder="1"></input>
   <div className="inputNest">
   <div className="inputInnerNest3 marginRight">
    <label className="spLabel" htmlFor="difficulty">{texts.difficulty}</label>
    <select className="lang" name="difficulty" id="">
     <option value="es">Spanish</option>
     <option value="en" selected>{texts.difficultyPlaceholder}</option>
    </select>
    </div>
    <div className="inputInnerNest3">
     <label className="spLabel" htmlFor="comments">{texts.answerComments}</label>
     <select className="lang" name="comments" id="">
      <option value="es">Spanish</option>
      <option value="en" selected>{texts.answerCommentsPlaceholder}</option>
     </select>
    </div>
   </div>  
   <button className="submit">{texts.formButton}</button>   
  </div>
</div>
)}

export default QuizForm