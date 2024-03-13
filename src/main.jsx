import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import AppartmentPage from './AppartmentPage.jsx'
import AboutPage from './AboutPage.jsx'
import ErreurPage from "./ErreurPage.jsx"

const router = createBrowserRouter([  
  {errorElement: (
    <>
    <Navbar />,
    <ErreurPage />,
  <Footer />
  </>
    )
  },
{

  path: "/",
  element: (
    <>
  <Navbar />,
  <App />,
  <Footer />
  </>
  ),
  

},
{
  path: "/flat",
  element: (
    <>
  <Navbar />,
  <AppartmentPage />
  <Footer />
  </>
  )
  
  

},

{
  path: "/about",
  element: (
    <>
  <Navbar />,
  <AboutPage />
  <Footer />
  </>
  )
 
}



]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
