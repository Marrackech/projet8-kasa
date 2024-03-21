import React from 'react'
import { useState } from 'react'
import "./AppartmentDescription.css"

function AppartmentDescription(props) {
  const [showContent, setShowContent] = useState(false)
  const Show = () => {
    setShowContent(!showContent)
  }
  return (
    <div className='descriptionArea'>
      
    <div className="description">
      <div className="description__header" >
        <label>{props.title}</label>
        <i className="fa-solid fa-chevron-down"onClick={Show} ></i>
        </div>


        
        {showContent && <div className="description__content"><p>{props.content} </p></div>
        }

        
       
        
    </div>
  
</div>
    
  )
}

export default AppartmentDescription
