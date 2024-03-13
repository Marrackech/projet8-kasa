import React from 'react'
import "./ErreurPage.css"


import { Link } from "react-router-dom";

function ErreurPage() {
  return (
    <>
    <div className='Erreur'>
<h1>404</h1>
<p>Oups! La page que vous demandez n'existe pas.</p>
<Link to="/">
Retourner sur la page d’accueil
</Link>

    </div>
    </>
  )
}

export default ErreurPage
