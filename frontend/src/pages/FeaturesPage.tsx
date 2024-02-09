import React, { useState } from "react"; 
import { PriceLayout } from '../components/pricing/PriceLayout';
import { LandingPageNavbar } from '../components/landingPage/Navbar';
import { Footer } from '../components/footer/Footer';
import { Features } from '../components/features/Features';

export default function FeaturesPage(props) {
  return (
    <div>
      <LandingPageNavbar/>
      <Features/>
      <Footer/>
    </div>
  );
}