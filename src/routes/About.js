import React from 'react';
import Navbar from "../componants/Navbar"
import Footer from '../componants/Footer';
import HeroImg2 from '../componants/HeroImg2';
import AboutContent from '../componants/AboutContent';
const About=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImg2 heading="ABOUT" text="Crafting Digital Experiences"/>
            <AboutContent/>
            <Footer/>
        </div>
    )
}

export default About;