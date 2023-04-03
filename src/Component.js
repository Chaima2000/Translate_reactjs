import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css';
import { changeLanguage } from 'i18next';
import etat from "./img/etats-unis.png";
import fr from "./img/la-france.png";
import ital from "./img/italie.png";
function Component() {
    const {t, i18n} = useTranslation()

  // const onChangeLang = (e)=>{
  //   i18n.changeLanguage(e.target.value)
  // }
  useEffect(()=>{
    for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
      const element = document.getElementsByClassName('lang')[index];
      if(element.value === i18n.language){
        element.setAttribute("selected", "true")
      }
    }
  })
  return (
    <div className="App">
      <p> {t("title")} </p>
      <div className="images">
         <img src={fr} alt="france"/>
         <img src={etat} alt="etas_unis"/>
         <img src={ital} alt="ital"/>
      </div>
      <div className="buttons"> 
        <button value="fr" onClick={(e)=>changeLanguage(e.target.value)}>Français</button>
        <button value="en" onClick={(e)=>changeLanguage(e.target.value)}>Anglais</button>
        <button value="ital" onClick={(e)=>changeLanguage(e.target.value)}>Italie</button>
        {/* <select onChange={onChangeLang}>
          <option value="en">En</option>
          <option value="fr">Fr</option>
          <option value="ital">Ital</option>
        </select> */}
      </div>
    </div>
  )
}

export default Component
