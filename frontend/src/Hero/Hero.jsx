import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero relative w-full flex items-center justify-center min-h-screen py-0 md:py-16" id="hero">
            <div className="container text-center md:text-start px-8 md:px-12 overflow-hidden">
                <h3 className="uppercase">I am Muhammed Ashique</h3>
                <h1 className="my-4 uppercase inline-block font-bold">Full stack developer</h1>
                <div className="items mt-4 md:mt-6 py-3 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                    <div className="social-links flex justify-center md:justify-start">
                        <a
                            className="mx-1 md:mx-2 p-5 text-center rounded-full inline-flex items-center justify-center"
                            href="https://www.linkedin.com/in/muhammedashique/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn size={20} />
                        </a>

                        <a
                            className="mx-2 p-5 text-center rounded-full inline-flex items-center justify-center"
                            href="https://github.com/muhammedashique"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            className="mx-2 p-5 text-center rounded-full inline-flex items-center justify-center"
                            href="https://twitter.com/muhammedashique"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp size={20} />
                        </a>

                        <a
                            className="mx-2 p-5 text-center rounded-full inline-flex items-center justify-center"
                            href="https://www.instagram.com/muhammedashique/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </div>
                    <a
                        href="#contact"
                        className="contact-btn mx-0 md:mx-6 px-8 py-3 border-2 border-[var(--secondary-color)]"
                    >
                        Contact
                    </a>
                </div>
            </div>
            <div className="scroll-down absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[var(--secondary-color)]">
                <FaChevronDown className="animate-bounce text-2xl" />
                <span className="text-xs mt-1">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
