// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Footer from './Footer.jsx'
// import Navbar from './Navbar.jsx'
// import AppartmentPage from './AppartmentPage.jsx'
// import AboutPage from './AboutPage.jsx'
// import ErreurPage from "./ErreurPage.jsx"

// const router = createBrowserRouter([  
//   {errorElement: (
//     <>
//     <Navbar />,
//     <ErreurPage />,
//   <Footer />
//   </>
//     )
//   },
// {

//   path: "/",
//   element: (
//     <>
//   <Navbar />,
//   <App />,
//   <Footer />
//   </>
//   ),
  

// },
// {
//   path: "/flat",
//   element: (
//     <>
//   <Navbar />,
//   <AppartmentPage />
//   <Footer />
//   </>
//   )
  
  

// },

// {
//   path: "/about",
//   element: (
//     <>
//   <Navbar />,
//   <AboutPage />
//   <Footer />
//   </>
//   )
 
// }



// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import AppartmentPage from './AppartmentPage.jsx';
import AboutPage from './AboutPage.jsx';
import ErreurPage from "./ErreurPage.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flat" element={<AppartmentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErreurPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
