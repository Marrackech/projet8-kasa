import React from 'react'
import { useState } from 'react';
import "./imageBanner.css"
function ImageBanner(props) {
  //recuperer des elements pour le caroussel
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture ] = useState(0);
  
  const getClassName = (i) => {
    if(i === currentPicture) return "show";
    return "";
  };
  // click next et ne pas surpasser le length
  const moveNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)

   }
   const moveBack = () => {
    const newCurrentPicture = currentPicture -1;
    if(newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
     return;
      
    }
    setCurrentPicture(currentPicture - 1)
    
   }
   //afficher les bouttons seulements si pictures sont superieur a 1 
   const picturesAvailable = () => {
    return pictures && pictures.length > 1
  }
  console.log(picturesAvailable())
  // afficher les images Caroussel
   const getCaroussel = () => {
    if (!picturesAvailable) {

 return false
    }

    return  pictures.map((pic, i) => ( <img key={pic} src={pic} alt="" className={getClassName(i)}/>));
   
     
   }
  
  return (
    <div className='banner'>
      <div className="container">
        {/* appliquer la fonctions */}
      {getCaroussel()}
      {/* <img src={imageUrl} alt="" /> */}
     
</div>
{/* appliquer la condition */}
          {picturesAvailable() && <>
          <button className='btn-next' onClick={moveNext}><i className='fas fa-chevron-left'/></button>
      <button className='btn-back' onClick={moveBack}><i className='fas fa-chevron-right'/></button> 
      </>  }
    </div>
  
  )
}

export default ImageBanner
