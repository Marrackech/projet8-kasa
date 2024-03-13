import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import "./AppartmentPage.css"
import  { useState } from 'react';
import ImageBanner from './imageBanner.jsx';
import AppartmentTitle from './AppartmentTitle.jsx';
import AppartmentDescription from './AppartmentDescription.jsx'
import AppartmentEquipement from './AppartmentEquipement.jsx';

function AppartmentPage() {
  const location = useLocation();

  const [ Flat, setFlat] = useState(null);


useEffect(fetchDataApartment, []);

function fetchDataApartment() {
  fetch("db.json")
  .then((res) => res.json()) // récupérer mon fichier db.json
  .then((flats) => {
    const flat = flats.find((flat) => flat.id === location.state.AppartmentId)
   setFlat(flat)
  })

}

if (Flat == null)
return <div>charging ...</div>


  




  return (
    <div className="AppartmentPage">
     
    
        <ImageBanner pictures={ Flat.pictures} />
    <AppartmentTitle flat={Flat}/>
    <div className="flex-containerD">
    
    <AppartmentDescription title="Description" content={Flat.description}/>
    <AppartmentEquipement title="Équipements" content={Flat.equipments}/>
    </div>
    </div>

 
  )
}

export default AppartmentPage
