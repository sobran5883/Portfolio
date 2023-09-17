import React from 'react'
import { Component } from "react";
import IntroImg from "../assets/img2.jpg";
class HeroImg2 extends Component{
    render(){
        return(
            <div className='hero'>
                 <div className="mask">
                    <img className="into-img" src={IntroImg} alt="IntroImg"/>
                </div>
                <div className='content'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImg2;