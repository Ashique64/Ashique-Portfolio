import React from "react";
import Hero from "../../Hero/Hero";
import About from "../../components/About/About";
import Frontend from "../../components/Frontend/Frontend";
import Backend from "../../components/Backend/Backend";
import ParallaxSpacer from "../../components/ParallaxSpacer/ParallaxSpacer";
import Projects from "../../components/Projects/Projects";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Frontend />
            <ParallaxSpacer />
            <Backend />
            <Projects />
        </>
    );
};

export default Home;
