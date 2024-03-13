import React from 'react'
import "./AppartmentEquipements.css"
import { useState } from 'react';
function AppartmentEquipement(props) {
    const [showContent1, setShowContent1] = useState(false);
    const Show1 = () => {
        setShowContent1(!showContent1)
      }
  return (
    <div className='descriptionArea'>
        <div className="description">
      
      <div className="description__header"onClick={Show1}>

      <label>{props.title}</label>
        <i className="fa-solid fa-chevron-down" ></i>

        </div>
   {/* liste des equipements */}
        {showContent1 && (
  <div className="description__content">
    <ul>
      {props.content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)}      
       
     
       
       
        
             
    </div>
    </div>
  )
}

export default AppartmentEquipement

