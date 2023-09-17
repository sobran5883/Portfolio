import React from 'react';
import Navbar from "../componants/Navbar"
import Footer from '../componants/Footer';
import HeroImg2 from '../componants/HeroImg2'
import Work from '../componants/work';
const Project=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImg2 heading="PROJECTS" text="some of my most recent works"/>
            <Work/>
            <Footer/>
        </div>
    )
}


export default Project;