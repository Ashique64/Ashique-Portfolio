import React, { Suspense, lazy } from "react";
import Preloader from "../../components/Preloader/Preloader";
import Navbar from "../../components/Navbar/Navbar";

const Hero = lazy(() => import("../../Hero/Hero"));
const About = lazy(() => import("../../components/About/About"));
const Frontend = lazy(() => import("../../components/Frontend/Frontend"));
const Backend = lazy(() => import("../../components/Backend/Backend"));
const ParallaxSpacer = lazy(() => import("../../components/ParallaxSpacer/ParallaxSpacer"));
const Projects = lazy(() => import("../../components/Projects/Projects"));
const Contact = lazy(() => import("../../components/Contact/Contact"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

const Home = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Preloader />}>
                <main className="pt-16">
                    <Hero />
                    <About />
                    <Frontend />
                    <ParallaxSpacer />
                    <Backend />
                    <Projects />
                    <Contact />
                    <Footer />
                </main>
            </Suspense>
        </>
    );
};

export default Home;
