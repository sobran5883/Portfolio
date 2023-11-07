import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "green", marginRight: "2rem" }} />
                        <div>
                            <p>F13 IET Hostel</p>
                            <p>Lucknow India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: "blue", marginRight: "2rem" }} /> +917619920344
                        </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: "pink", marginRight: "2rem" }} />sobran0621@gmail.com
                        </h4>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h4>About me</h4>
                <p>"Hello, I'm SOBRAN RAJAK.</p>
                <div className='social'>
                    <a href='https://github.com/sobran5883'><FaGithub size={30} style={{ color: 'pink', marginRight: "1rem" }} /></a>
                    <a href='https://www.instagram.com/sobran5883/'><FaInstagram size={30} style={{ color: 'red', marginRight: "1rem" }} /></a>
                    <a href='linkedin.com/in/sobran-rajak-311285227'><FaLinkedin size={30} style={{ color: '#0077B5', marginRight: "1rem" }} /></a>

                </div>
            </div>
        </div>
    )
}

export default Footer;