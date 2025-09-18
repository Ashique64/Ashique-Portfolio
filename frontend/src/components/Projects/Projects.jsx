import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "./Projects.scss";

gsap.registerPlugin(ScrollTrigger, SplitText);

const projectsData = [
  { id: 1, name: "Repsking", image: "/images/project-2.png", link: "https://repsking.in/" },
    { id: 2, name: "Hotel Varahi Grand", image: "/images/project-1.png", link: "https://hotelvarahigrand.com/" },
    { id: 3, name: "MindZen Techno", image: "/images/project-3.png", link: "https://www.mindzentechno.com/" },
    { id: 4, name: "Kalabam", image: "/images/project-4.png", link: "https://kalabam.vercel.app/" },
    { id: 5, name: "Netflix", image: "/images/project-5.png", link: "https://netflix-react-js-ten.vercel.app/" },
    { id: 6, name: "Laundry", image: "/images/project-6.png", link: "https://laundry-orcin-one.vercel.app/" },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const desktopCardsRef = useRef([]);
    const titleRef = useRef();
    const descriptionRef = useRef();

    useGSAP(() => {
        const section = sectionRef.current;
        const cards = desktopCardsRef.current;

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

        ScrollTrigger.matchMedia({
            "(min-width: 768px)": () => {
                gsap.set(cards, { xPercent: 20 });

                gsap.to(cards, {
                    xPercent: -100 * (cards.length - 1),
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${section.offsetWidth} `,
                        scrub: 1.5,
                        pin: true,
                        anticipatePin: 1,
                    },
                });
            },
            "(max-width: 767px)": () => {
                gsap.fromTo(
                    ".projects-grid .card",
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div
            id="projects"
            ref={sectionRef}
            className="projects relative w-full flex items-center justify-center min-h-screen py-20 md:py-12"
        >
            <div className="container px-6 md:px-12 overflow-hidden">
                <div className="content-row mb-12 border-b border-white/20 flex flex-col md:flex-row justify-between items-center py-4 ">
                    <div className="title mb-6 md:mb-0">
                        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold">
                            Projects
                        </h2>
                    </div>
                    <div className="description w-full md:w-1/2">
                        <p ref={descriptionRef} className="text-lg text-gray-300 leading-relaxed">
                            A collection of my recent work showcasing creativity, problem-solving, and technical expertise.
                        </p>
                    </div>
                </div>

                <div className="projects-row hidden md:flex gap-8 py-6">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => (desktopCardsRef.current[index] = el)}
                            className="card group relative min-w-[670px] min-h-[420px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />

                                <div className="card-overlay absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-2xl font-semibold">{project.name}</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="projects-grid grid grid-cols-2 gap-4 py-6 md:hidden">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="card group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.name} className="w-full h-32 object-cover" />
                                {/* <div className="name p-3 text-center text-sm text-white font-[var(--primary-font)]">
                                    {project.name}
                                </div> */}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
