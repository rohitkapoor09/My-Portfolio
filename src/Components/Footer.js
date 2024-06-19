import React from "react";
import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight:'2rem' }} />
                        <div>
                            <p>48-A, Lajpat Nagar, Scheme no. 2</p>
                            <p>Alwar, India.</p>
                        </div>
                    </div>
                    
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight:'2rem' }} />+91-8112257710 / 7229803707</h4>
                    </div>
                    <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight:'2rem' }} />kapoor.rohit149@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>This is me Rohit Kapoor. A Software Engineer & Mobile Developer.
                       I enjoy developing pixel perfect user interfaces & intuitive user experience.
                    </p>
                    <div className="social">
                    <a href="https://www.facebook.com"><FaFacebook size={30} style={{color: "#fff", marginRight:'1rem' }} /></a>
                    <FaTwitter size={30} style={{color: "#fff", marginRight:'1rem' }} />
                    <a href="https://www.linkedin.com/mwlite/in/rohit-kapoor-1397001b7"><FaLinkedin size={30} style={{color: "#fff", marginRight:'1rem' }} /></a>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;