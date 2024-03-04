import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from '../screens/home/Home';
// import Header from '../layout/header/Header';
// import Footer from '../layout/footer/Footer';
import Trial from '../screens/trial/Trial';

export default function Routing() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/trial' element={<Trial />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}
