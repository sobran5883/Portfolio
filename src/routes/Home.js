import React from 'react';
import Navbar from '../componants/Navbar';
import HeroImg from '../componants/HeroImg';
import Work from '../componants/work';
import Footer from '../componants/Footer';

const Home=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImg/>
            <Work/>
            <Footer/>
        </div>
    );
};

export default Home;