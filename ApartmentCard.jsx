import React from 'react'
import { Link } from 'react-router-dom'
import "./Apartment.css"


function stylelink() {
  return { color: "white", textDecoration: "none", wordBreak: "break"};
}

function Apartment( props ) {
const state = {
   AppartmentId: props.id

};


  
  return (
    // afficher l image et le titres dans les apparCards
    <div className='Apartment'>
      <Link to="/flat" state= {state}>
        <img src={props.imageUrl}/>
     <div style={stylelink()}>{props.title}</div>
     </Link>
    </div>
  )
  }

export default Apartment
