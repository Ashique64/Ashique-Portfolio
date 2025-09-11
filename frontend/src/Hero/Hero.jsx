import React, { useRef } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.scss";

gsap.registerPlugin(TextPlugin, SplitText, ScrollTrigger);

const Hero = () => {
    const heroRef = useRef();
    const h4Ref = useRef();
    const h1Ref = useRef();
    const socialLinksRef = useRef();
    const btnsRef = useRef();
    const scrollDownRef = useRef();

    useGSAP(
        () => {
            const tl = gsap.timeline();

            const splitH1 = new SplitText(h1Ref.current, { type: "words,chars" });

            tl.fromTo(
                h4Ref.current,
                { text: "" },
                {
                    duration: 1.5,
                    text: "I am Muhammed Ashique",
                    ease: "none",
                }
            )
                .from(
                    splitH1.chars,
                    {
                        opacity: 0,
                        y: 60,
                        stagger: {
                            amount: 1.5,
                            from: "random",
                        },
                        ease: "back.out(1.7)",
                        duration: 0.8,
                    },
                    "-=0.5"
                )
                .fromTo(
                    socialLinksRef.current.querySelectorAll("a"),
                    {
                        opacity: 0,
                        x: 30,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        stagger: { amount: 0.15, from: "start" },
                        ease: "back.out(1.7)",
                        duration: 0.6,
                    },
                    "-=0.5"
                )
                .fromTo(
                    btnsRef.current,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        ease: "elastic.out(1, 0.5)",
                        duration: 0.8,
                    },
                    "-=0.3"
                )
                .fromTo(
                    scrollDownRef.current,
                    { y: 0, opacity: 0 },
                    {
                        y: 15,
                        opacity: 1,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut",
                        duration: 1.2,
                    }
                );
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                scrub: 1,
                anticipatePin: 1,
                refreshPriority: -1,
            });
        },
        { scope: heroRef }
    );

    return (
        <section
            ref={heroRef}
            className="hero relative w-full flex items-center justify-center min-h-screen py-0 md:py-16"
            id="hero"
        >
            <div className="container text-center md:text-start px-8 md:px-12 overflow-hidden">
                <h3 ref={h4Ref} className="uppercase">
                    I am Muhammed Ashique
                </h3>
                <h1 ref={h1Ref} className="my-4 uppercase inline-block font-bold">
                    Full stack developer
                </h1>
                <div className="items mt-4 md:mt-6 py-6 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                    <div ref={socialLinksRef} className="social-links flex justify-center md:justify-start">
                        <a
                            className="mx-1 md:mx-2 p-5 text-center rounded-full inline-flex items-center justify-center"
                            href="https://www.linkedin.com/in/muhammed-ashique-k-p-9a03b0267/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn size={20} />
                        </a>

                        <a
                            className="mx-2 p-5 text-center rounded-full inline-flex items-center justify-center"
                            href="https://github.com/Ashique64"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            className="mx-2 p-5 text-center rounded-full inline-flex items-center justify-center"
                            href="https://wa.me/918606128064"
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
                        ref={btnsRef}
                        href="#contact"
                        className="contact-btn mx-0 md:mx-6 px-8 py-3 border-2 border-[var(--secondary-color)]"
                    >
                        Contact me
                    </a>
                </div>
            </div>
            <div
                ref={scrollDownRef}
                className="scroll-down absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[var(--secondary-color)]"
            >
                <FaChevronDown className="animate-bounce text-2xl" />
                <span className="text-xs mt-1">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
