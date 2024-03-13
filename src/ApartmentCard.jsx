import React from 'react'
import { Link } from 'react-router-dom'
import "./Apartment.css"


function stylelink() {
  return { color: "white", textDecoration: "none"};
}

function Apartment( props ) {
const state = {
   AppartmentId: props.id

};


  
  return (
    <div className='Apartment'>
      <Link to="/flat" state= {state} style={stylelink()}>
        <img src={props.imageUrl}/>
     <div>{props.title}</div>
     </Link>
    </div>
  )
  }

export default Apartment
