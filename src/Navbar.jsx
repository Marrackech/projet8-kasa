import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return <nav className="navbar">
   
    <div className='navbarLogo'>
       <Link to="/">
        <img src="../logo/logo.png" alt="logo"></img>
   </Link> </div>

    <div className="liens">
    <Link to="/" >Acceuil</Link>
    <Link to="/about">
    <div>A propos</div>
</Link>
    </div>
  </nav>
 
}

export default Navbar
