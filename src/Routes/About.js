import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import AboutContent from "../Components/AboutContent";

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="ABOUT." text="Greetings! I'm Rohit, a dedicated software engineer specializing in mobile development. My journey in the world of technology began with a passion for problem-solving and a curiosity about how things work. This path led me to specialize in crafting seamless, user-centered web experiences that merge creativity with cutting-edge technologies."/>
            <AboutContent />
            <Footer />

        </div>
    )
}


export default About;