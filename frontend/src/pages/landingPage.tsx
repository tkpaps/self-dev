import React, { useState } from "react"; 
import { LandingPageNavbar } from '../components/landingPage/Navbar';
import { LandingHero } from '../components/landingPage/LandingHero';
import { Footer } from '../components/footer/Footer';
import { NewsLetter } from '../components/landingPage/NewsLetter';

export default function LandingPage(props) {
  return (
    <div>
      <LandingPageNavbar/>
      <LandingHero/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

