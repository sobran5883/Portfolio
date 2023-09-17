import React, {useEffect, useState} from "react";

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImg=()=>{
    const [greeting, setGreeting] = useState('');
    const greetingText ="Hi, I'M A WEBDEVELOPER";
    const typingSpeed=100;
    useEffect(()=>{
        let currentIndex=0;
        const typeNextCharacter=()=>{
            if(currentIndex<greetingText.length){
                setGreeting(greetingText.substring(0,currentIndex+1));
                currentIndex++;
                setTimeout(typeNextCharacter,typingSpeed);
            }
        };
        // Start typing when the component mounts (page loads)
        typeNextCharacter();
    },[]);
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p>{greeting}</p>
                <h1>ReactJS and NodeJs Developer.</h1>
                <div>
                    <Link to="/project" className="btn">Project</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg;