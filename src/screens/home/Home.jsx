import React from "react";
import Header from "../../layout/header/Header";

import GetRDee from "../../sections/Get-R-Dee";
import RealTime from "../../sections/Real-Time";
import LaunchModule from "../../sections/Launch-Module";
import RDeeConnect from "../../sections/R-Dee-Connect";
import GrowingPlatform from "../../sections/Growing-Platform";
import Testimonial from "../../sections/Testimonial";
import Press from '../../sections/Press';
import Standard from "../../sections/Standard";
import PricePlan from "../../sections/PricePlan";
import Footer from "../../layout/footer/Footer";
import Advantage from "../../sections/Advantage";
import RDeeGo from "../../sections/R-Dee-Go";
import Radiologex from "../../sections/Radiologex";
const Home = () => {
  return (
    <div>
      <Header />
      <Radiologex />
      <GetRDee />
      <RealTime />
      <LaunchModule />
      <RDeeConnect />
      <Advantage />
      <RDeeGo />
      <GrowingPlatform />
      <Testimonial />
      <Press/>
      <Standard />
      <PricePlan />
      <Footer />
    </div>
  );
};


export default Home;
