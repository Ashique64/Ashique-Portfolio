import React from "react";
import Hero from "../../Hero/Hero";
import About from "../../components/About/About";
import Frontend from "../../components/Frontend/Frontend";
import Backend from "../../components/Backend/Backend";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Frontend />
            <Backend />
        </>
    );
};

export default Home;
