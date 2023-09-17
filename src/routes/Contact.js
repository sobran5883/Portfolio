import React from 'react';
import Navbar from '../componants/Navbar';
import Footer from '../componants/Footer';
import HeroImg2 from '../componants/HeroImg2';
import Form from '../componants/Form';
const Contact=()=>{
    return(
        <div>
            <Navbar/>
            <HeroImg2 heading='CONTACT' text="Lets have 
            a chat"/>
            <Form/>
            <Footer/>
        </div>
    )
};

export default Contact;