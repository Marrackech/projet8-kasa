// import React from 'react'
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom'
// import "./AppartmentPage.css"
// import  { useState } from 'react';
// import ImageBanner from './imageBanner.jsx';
// import AppartmentTitle from './AppartmentTitle.jsx';
// import AppartmentDescription from './AppartmentDescription.jsx'
// import AppartmentEquipement from './AppartmentEquipement.jsx';

// function AppartmentPage() {
//   const location = useLocation();

//   const [ Flat, setFlat] = useState(null);


// useEffect(fetchDataApartment, []);

// function fetchDataApartment() {
//   fetch("db.json")
//   .then((res) => res.json()) // récupérer mon fichier db.json
//   .then((flats) => {
//     const flat = flats.find((flat) => flat.id === location.state.AppartmentId)
//    setFlat(flat)
//   })

// }

// if (Flat == null)
// return <div>charging ...</div>


  




//   return (
//     <div className="AppartmentPage">
     
    
//         <ImageBanner pictures={ Flat.pictures} />
//     <AppartmentTitle flat={Flat}/>
//     <div className="flex-containerD">
    
//     <AppartmentDescription title="Description" content={Flat.description}/>
//     <AppartmentEquipement title="Équipements" content={Flat.equipments}/>
//     </div>
//     </div>

 
//   )
// }

// export default AppartmentPage

// 2

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ImageBanner from './imageBanner.jsx';
// import AppartmentTitle from './AppartmentTitle.jsx';
// import AppartmentDescription from './AppartmentDescription.jsx';
// import AppartmentEquipement from './AppartmentEquipement.jsx';

// function AppartmentPage() {
//   const location = useLocation();
//   const [flat, setFlat] = useState(null);

//   useEffect(() => {
//     fetchDataApartment();
//   }, [location.state.AppartmentId]);

//   function fetchDataApartment() {
//     fetch("db.json")
//       .then((res) => res.json()) // récupérer mon fichier db.json
//       .then((flats) => {
//         const flat = flats.find((flat) => flat.id === location.state.AppartmentId);
//         setFlat(flat);
//       });
//   }

//   if (!flat)
//     return <div>Chargement ...</div>;

//   return (
//     <div className="AppartmentPage">
//       <ImageBanner pictures={flat.pictures} />
//       <AppartmentTitle flat={flat} />
//       <div className="flex-containerD">
//         <AppartmentDescription title="Description" content={flat.description} />
//         <AppartmentEquipement title="Équipements" content={flat.equipments} />
//       </div>
//     </div>
//   );
// }

// export default AppartmentPage;

//3

// import React, { useState, useEffect } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import ImageBanner from './imageBanner.jsx';
// import AppartmentTitle from './AppartmentTitle.jsx';
// import AppartmentDescription from './AppartmentDescription.jsx';
// import AppartmentEquipement from './AppartmentEquipement.jsx';

// function AppartmentPage() {
//   const location = useLocation();
//   const history = useHistory();
//   const [flat, setFlat] = useState(null);

//   useEffect(() => {
//     fetchDataApartment();
//     updateUrlWithId();
//   }, [location.state.AppartmentId]);

//   function fetchDataApartment() {
//     fetch("db.json")
//       .then((res) => res.json()) 
//       .then((flats) => {
//         const flat = flats.find((flat) => flat.id === location.state.AppartmentId);
//         setFlat(flat);
//       });
//   }

//   function updateUrlWithId() {
//     const { pathname } = history.location;
//     const newPathname = `${pathname}/${location.state.AppartmentId}`;
//     history.replace({ pathname: newPathname });
//   }

//   if (!flat)
//     return <div>Chargement ...</div>;

//   return (
//     <div className="AppartmentPage">
//       <ImageBanner pictures={flat.pictures} />
//       <AppartmentTitle flat={flat} />
//       <div className="flex-containerD">
//         <AppartmentDescription title="Description" content={flat.description} />
//         <AppartmentEquipement title="Équipements" content={flat.equipments} />
//       </div>
//     </div>
//   );
// }

// export default AppartmentPage;
 

//4

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ImageBanner from './imageBanner.jsx';
// import AppartmentTitle from './AppartmentTitle.jsx';
// import AppartmentDescription from './AppartmentDescription.jsx';
// import AppartmentEquipement from './AppartmentEquipement.jsx';

// function AppartmentPage() {
//   const location = useLocation();
//   const [flat, setFlat] = useState(null);

//   useEffect(() => {
//     fetchDataApartment();
//   }, [location.state.AppartmentId]);

//   function fetchDataApartment() {
//     fetch("db.json")
//       .then((res) => res.json()) 
//       .then((flats) => {
//         const flat = flats.find((flat) => flat.id === location.state.AppartmentId);
//         setFlat(flat);
//       });
//   }

//   if (!flat)
//     return <div>Chargement ...</div>;

//   return (
//     <div className="AppartmentPage">
//       <ImageBanner pictures={flat.pictures} />
//       <AppartmentTitle flat={flat} />
//       <div className="flex-containerD">
//         <AppartmentDescription title="Description" content={flat.description} />
//         <AppartmentEquipement title="Équipements" content={flat.equipments} />
//       </div>
//     </div>
//   );
// }

// export default AppartmentPage;


//5

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ImageBanner from './imageBanner.jsx';
// import AppartmentTitle from './AppartmentTitle.jsx';
// import AppartmentDescription from './AppartmentDescription.jsx';
// import AppartmentEquipement from './AppartmentEquipement.jsx';

// function AppartmentPage() {
//   const location = useLocation();
//   const [flat, setFlat] = useState(null);
//   const [apartmentId, setApartmentId] = useState(null);

//   useEffect(() => {
//     if (location.state && location.state.AppartmentId) {
//       setApartmentId(location.state.AppartmentId);
//       fetchDataApartment(location.state.AppartmentId);
//     }
//   }, [location.state]);

//   function fetchDataApartment(id) {
//     fetch("db.json")
//       .then((res) => res.json()) 
//       .then((flats) => {
//         const flat = flats.find((flat) => flat.id === id);
//         setFlat(flat);
//       });
//   }

//   if (!flat)
//     return <div>Chargement ...</div>;

//   // Récupérer l'ID de l'appartement et l'utiliser dans l'URL
//   const apartmentUrl = `/flat/${apartmentId}`;

//   return (
//     <div className="AppartmentPage">
//       <ImageBanner pictures={flat.pictures} />
//       <AppartmentTitle flat={flat} />
//       <div className="flex-containerD">
//         <AppartmentDescription title="Description" content={flat.description} />
//         <AppartmentEquipement title="Équipements" content={flat.equipments} />
//       </div>
//     </div>
//   );
// }

// export default AppartmentPage;


//6
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageBanner from './imageBanner.jsx';
import AppartmentTitle from './AppartmentTitle.jsx';
import AppartmentDescription from './AppartmentDescription.jsx';
import AppartmentEquipement from './AppartmentEquipement.jsx';

function AppartmentPage() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);
  const [apartmentId, setApartmentId] = useState(null);

  useEffect(() => {
    if (location.state && location.state.AppartmentId) {
      const id = location.state.AppartmentId;
      setApartmentId(id);
      fetchDataApartment(id);
    }
  }, [location.state]);

  function fetchDataApartment(id) {
    fetch("db.json")
      .then((res) => res.json()) 
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);
        setFlat(flat);
      });
  }

  if (!flat)
    return <div>Chargement ...</div>;

  // Construire l'URL de l'appartement avec l'ID
  const apartmentUrl = `/flat/${apartmentId}`;

  return (
    <div className="AppartmentPage">
      <ImageBanner pictures={flat.pictures} />
      <AppartmentTitle flat={flat} />
      <div className="flex-containerD">
        <AppartmentDescription title="Description" content={flat.description} />
        <AppartmentEquipement title="Équipements" content={flat.equipments} />
      </div>
    </div>
  );
}

export default AppartmentPage;
