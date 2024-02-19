import React from 'react'
import Navbar from '../Layouts/Header/Nav.js';
import Hometitle from '../Components/Carts/HomeTitle.js';
import AboutUsSection from '../Components/Carts/Aboutus.js';
import Footer from '../Layouts/Footer/Footer.js';

function Landingpage() {
  return (
    <div className='Landingpage'> 
     <Navbar />
     <Hometitle />
     <AboutUsSection/>
     <Footer/>
    </div>
  )
}

export default Landingpage;