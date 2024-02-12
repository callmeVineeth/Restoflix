import React from 'react';
import  './App.css'
import Header from './Components/Header/Header';
import Welcome from './Components/Header/Page/Welcome';
import Footer from './Components/Header/Page/Footer';
import Partners from './Components/Header/Page/Partners';
import Booking from './Components/Header/Page/Booking';
import Dishes from './Components/Header/Page/Dishes';
import AmbienceSection from './Components/Header/Page/AmbienceSection';
import CountSection from './Components/Header/Page/CountSection';
import DeliverySection from './Components/Header/Page/DeliverySection';

function App() {
  return (
    <div className='App'>
        <Header/>
        <Welcome/>
        <Partners/>
        <Dishes/>
        <AmbienceSection/>
        <DeliverySection/>
        <CountSection/>
        <Booking/>
        <Footer/>

    </div>
  )
}

export default App