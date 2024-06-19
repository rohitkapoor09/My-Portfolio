import React, { useState, useEffect } from 'react';
import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
    const [words, setWords] = useState([
        "Software Engineer",
        "Mobile Developer",
        "Web Developer"
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (words && words.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [words]); 
    
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="introImg" />
            </div>    
            <div className="content">
                <p>Hi, I'm Rohit Kapoor.</p>
                <h1>{words[currentIndex]}</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>

            </div>
            
        </div>
    )
}

export default HeroImg;