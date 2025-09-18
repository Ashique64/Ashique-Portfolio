import React, { Suspense, lazy } from "react";

const Hero = lazy(() => import("../../Hero/Hero"));
const About = lazy(() => import("../../components/About/About"));
const Frontend = lazy(() => import("../../components/Frontend/Frontend"));
const Backend = lazy(() => import("../../components/Backend/Backend"));
const ParallaxSpacer = lazy(() => import("../../components/ParallaxSpacer/ParallaxSpacer"));
const Projects = lazy(() => import("../../components/Projects/Projects"));
const Contact = lazy(() => import("../../components/Contact/Contact"));

const Home = () => {
    return (
        <Suspense fallback={<div>Loading section...</div>}>
            <Hero />
            <About />
            <Frontend />
            <ParallaxSpacer />
            <Backend />
            <Projects />
            <Contact />
        </Suspense>
    );
};

export default Home;
