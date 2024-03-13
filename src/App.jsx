import React from 'react';

import './App.css';
import Banner from './Banner.jsx';
import AppartmentGrid from './AppartmentGrid.jsx'
import { useLocation, useParams } from 'react-router-dom';
 


function App() {

const location = useLocation();
console.log(location)
  return (
    <div>
     
  
      <Banner />
      <AppartmentGrid />
     
    </div>
  )
}

export default App
