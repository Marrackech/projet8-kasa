import React, { PureComponent } from 'react'
import "./AboutPage.css";
import "./Banner.jsx";
import "./AppartmentPage.css";
import AppartmentDescription from './AppartmentDescription.jsx';


export class AboutPage extends PureComponent {
  render() {
    return (
        <>
     
        <span className="About__img">
      <div className='Baner'>
<imageBanner />
        <img src="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTLNyrrRrpstuwD2GphEBlUMEqR1T6FitfxxS~kZrBdIf5ywvIrpDqV1y70A3pK4n0a~v4hS7sBvCry9zWJpTkDXOe7~KqfjUd3xRbpguZTVG1OD5LBY-XoZMYnRZaVbw18GsROHiXReCl~ljUbDd3Ya04HwddkizLbl6o7wVrHdpVnp7qAVqA1r8Bjm53JM~zThvOA2kiTVi9rqRLndbDuuM2dZF97LsZAq16qEfAv7EX9n1IeJYPenRNqVQIKxlmKUiSemWWpCvJMBq1Z2U~HTcdAkeTDeyH4vmamOnaGsKWyjEsROPrAHiK-IfihjnbcU0fI2hwktlGT6cRv20Q__" alt="Banner" /> 

      </div>
</span>
<span className='About__description'>
 
  <AppartmentDescription title="Fiabilité" content="commentaires"/>
  <AppartmentDescription title="Respect" content="commentaires"/>
  <AppartmentDescription title="Service" content="commentaires"/>
  <AppartmentDescription title="Sécurité" content="commentaires"/>
  </span>

       
  </>
    )
  }
}

export default AboutPage
