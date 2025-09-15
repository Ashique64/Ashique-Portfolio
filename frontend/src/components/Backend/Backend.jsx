import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import "./Backend.scss";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Backend = () => {
    const backendRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const skillsRef = useRef();

    const backendSkills = [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "APIs", icon: <FaDatabase />, color: "#f59e0b" },
        { name: "Django", icon: <SiDjango />, color: "#092E20" },
        { name: "Django REST", icon: <SiDjango />, color: "#44B78B" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
        { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    ];

    useGSAP(() => {
        document.fonts.ready.then(() => {
            if (titleRef.current) {
                const titleSplit = new SplitText(titleRef.current, { type: "chars" });
                gsap.fromTo(
                    titleSplit.chars,
                    { opacity: 0, y: 100, rotationX: -90 },
                    {
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        duration: 1,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "bottom 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            if (descriptionRef.current) {
                const descSplit = new SplitText(descriptionRef.current, { type: "words" });
                gsap.fromTo(
                    descSplit.words,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.05,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: descriptionRef.current,
                            start: "bottom 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            const skillCards = skillsRef.current?.querySelectorAll(".skill-card");
            if (skillCards) {
                gsap.fromTo(
                    skillCards,
                    { opacity: 0, y: 50, scale: 0.8 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: skillsRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // const containerElement = backendRef.current?.querySelector(".container");
            // if (containerElement) {
            //     gsap.to(containerElement, {
            //         scrollTrigger: {
            //             trigger: backendRef.current,
            //             start: "bottom 60%",
            //             end: "bottom top",
            //             markers: true,
            //             scrub: true,
            //         },
            //         filter: "blur(5px)",
            //         scale: 0.5,
            //         ease: "none",
            //     });
            // }
        });
    }, []);

    return (
        <div
            ref={backendRef}
            className="backend relative w-full flex items-center justify-center min-h-screen lg:max-h-screen py-20 md:py-12"
            id="backend"
        >
            <div className="container px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
                <h2 ref={titleRef} className="title  mb-6 md:mb-5 text-center py-2">
                    Backend
                </h2>
                <div className="description-section max-w-4xl mx-auto mb-12 md:mb-16 text-center">
                    <p ref={descriptionRef} className="description leading-relaxed opacity-90">
                        I develop secure, scalable backends using Python, Django, and REST APIs, integrating SQL/NoSQL
                        databases and cloud services like AWS to deliver reliable applications.
                    </p>
                </div>
                <div
                    ref={skillsRef}
                    className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-3/4 md:w-full max-w-3xl justify-items-center"
                >
                    {backendSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card group relative px-2 py-3 rounded-2xl backdrop-blur-sm border-2 border-opacity-20 hover:border-opacity-40 transition-all duration-300 flex flex-col items-center justify-center text-center"
                            style={{ background: "rgba(255, 255, 255, 0.05)", borderColor: skill.color }}
                        >
                            <div
                                className="skill-icon text-2xl md:text-3xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="skill-name mb-1">{skill.name}</h3>
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                style={{ backgroundColor: skill.color }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Backend;
