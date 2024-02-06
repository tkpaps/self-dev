import React, { useState } from "react"; 
import { PriceLayout } from '../components/pricing/PriceLayout';
import { LandingPageNavbar } from '../components/landingPage/Navbar';
import { Footer } from '../components/footer/Footer';
import { FAQ } from '../components/pricing/FAQ';

export default function LandingPage(props) {
  return (
    <div>
      <LandingPageNavbar/>
      <PriceLayout/>
      <FAQ/>
      <Footer/>
    </div>
  );
}