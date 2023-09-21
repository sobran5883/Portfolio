import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img7.jpg"
import img2 from "../assets/img2.jpg"
const AboutContent =()=>{
    return(
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Hello there! I'm SOBRAN RAJAK BHEL Jhansi Uttarpradesh, I embark on this digital adventure with a degree in CSE-AI, but it was my insatiable curiosity and the endless possibilities of web development that truly captured my heart.</p>
                  <p>I believe that web development is an art form, and I see myself as a digital artist crafting beautiful, user-friendly experiences. My passion for React.js and Node.js stems from their power to transform ideas into interactive realities. It's that 'aha' moment when a project comes together that keeps me addicted to the world of coding.</p>
                <Link to="/contact"><button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={img1} className="img" alt="img"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={img2} className="img" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;