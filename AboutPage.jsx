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
        <img src="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ViPOAUfmvIsTmvxNO7MY7ENfINckT98U00BKo3cnNqkAgi1YW4bUhq~Z~iJd5KNOc0zIvmLxeGFbYScarrul6-VkFqIC3o2N-0khvvXi0a3g3iG4~aZYnlinQhHKiojCPxcShjwQr1ILbVXLiA5CB15vY0pQ03nEkYeXm~2MQizSmt9nub9ogDz9~nsw6oF1LEu4v6qb4KvdX-swA5pJbB6GoEOiJiWc0JXeCKvynQQvdqx5pvs1SaKjobNUVdd9f1jDrCyVYoB6j1tvfXTsZZWoQe8X9nlbdUNBJBdQzZgRoX1gfgNRmSHY53I6r7-He6LsUMVlhz2T10vfiqhX3g__" alt="Banner" />
        


      </div>

</span>
<br></br> 
<span className='About__description'>
 
  <AppartmentDescription title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
  <AppartmentDescription title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>
  <AppartmentDescription title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>
  <AppartmentDescription title="Sécurité" content="Le sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité étabilis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/><br></br>
  </span>

       
  </>
    )
  }
}

export default AboutPage
