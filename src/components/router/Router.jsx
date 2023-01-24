import { HashRouter,Route, Routes } from "react-router-dom";
import { LanguageIndex } from "../index/indexContext";


function Router() {

 return (
 
 <HashRouter>
  <Routes> 
  <Route path="/" element={<LanguageIndex />}/>
  </Routes>
 </HashRouter>
 ) 
 }
 
 export default Router

