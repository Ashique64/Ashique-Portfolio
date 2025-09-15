import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaSass, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import "./Frontend.scss";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Frontend = () => {
    const frontendRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const skillsRef = useRef();

    const frontendSkills = [
        {
            name: "React.js",
            icon: <FaReact />,
            color: "#61DAFB",
        },
        {
            name: "Bootstrap",
            icon: <FaBootstrap />,
            color: "#7952B3",
        },
        {
            name: "HTML5",
            icon: <FaHtml5 />,
            color: "#E34F26",
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt />,
            color: "#1572B6",
        },
        {
            name: "SCSS",
            icon: <FaSass />,
            color: "#CC6699",
        },
        {
            name: "JavaScript",
            icon: <FaJsSquare />,
            color: "#F7DF1E",
        },
        {
            name: "Redux",
            icon: <SiRedux />,
            color: "#764ABC",
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss />,
            color: "#06B6D4",
        },
    ];

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: frontendRef.current,
            start: "top top",
            end: "bottom+=50% top",
            scrub: 1,
            fastScrollEnd: true,
        });

        document.fonts.ready.then(() => {
            if (titleRef.current) {
                const titleSplit = new SplitText(titleRef.current, { type: "chars" });

                gsap.fromTo(
                    titleSplit.chars,
                    {
                        opacity: 0,
                        y: 100,
                        rotationX: -90,
                    },
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
                    {
                        opacity: 0,
                        y: 20,
                    },
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
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.8,
                    },
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
        });
    }, []);

    return (
        <div
            ref={frontendRef}
            className="frontend relative w-full flex items-center justify-center min-h-screen lg:max-h-screen py-8 md:py-12"
            id="frontend"
        >
            <div className="container px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
                <h2 ref={titleRef} className="title font-bold mb-6 md:mb-5 text-center py-2">
                    Frontend
                </h2>

                <div className="description-section max-w-4xl mx-auto mb-12 md:mb-16 text-center">
                    <p ref={descriptionRef} className="description leading-relaxed opacity-90">
                        I specialize in creating responsive, user-friendly interfaces that deliver seamless digital
                        experiences. With expertise in modern JavaScript frameworks and styling technologies, I build
                        interactive web applications that are both visually appealing and highly functional across all
                        devices.
                    </p>
                </div>

                <div
                    ref={skillsRef}
                    className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-3/4 md:w-full max-w-3xl justify-items-center"
                >
                    {frontendSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card group relative px-2 py-3 rounded-2xl backdrop-blur-sm border-2 border-opacity-20 hover:border-opacity-40 transition-all duration-300 flex flex-col items-center justify-center text-center"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                borderColor: skill.color,
                            }}
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

export default Frontend;
