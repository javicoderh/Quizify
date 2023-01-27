import React from "react";
import { useContext, useState } from "react";
import { LanguageProvider,  } from "../contexts/LanguageContext"
import LanguageContext from "../contexts/LanguageContext";

const Index = () => {
  
const initialLanguage = 'en'
const { texts, handleLanguage } = useContext<any>(LanguageContext)
 

return (
 <div className="App-header">
  <header>  
  <div className="redSquare"></div>
  <div className="greenSquare"></div>
  <div className="blueSquare"></div>
  <div className="yellowSquare"></div>
  <h2 className="tools">QuizTools</h2>
  <nav>
   <h3>{texts.headerProduct}</h3>
   <h3>{texts.headerPricing}</h3>
   <h3>{texts.headerQuiz}</h3>
   <h3>Blog</h3>         
  </nav>
  <div className="LangFlag">
  <h3 className="headerLang">{texts.pageLanguage}</h3>
  <button className="flagButton" onClick={handleLanguage}><img className="flag" src={texts.flagURL} width="35" height="20" alt="" /></button>
  </div>
  <button className="createQuizz">{texts.headerButton}</button>
 </header>
 <h2 className="result">{texts.screenTit}</h2>
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
 <div className="resultScreen">
  <div className="resultScreenContent">
   <img src="https://scontent.fscl11-2.fna.fbcdn.net/v/t39.30808-6/326274439_741676943722414_1277584229060021232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=NV8VahXQnE0AX9F-WD9&tn=Gt7aswZVcFH4kO-i&_nc_ht=scontent.fscl11-2.fna&oh=00_AfC_aAoUvu6PPpce_j3LIQLOP0csCFAZFuGNA_dYIhP7Ag&oe=63CD5F5A" height="100" alt="" />
   <h3 className="screenText">{texts.screenText}</h3>
  </div>
 </div>
 </div>
 
)
}

export default Index