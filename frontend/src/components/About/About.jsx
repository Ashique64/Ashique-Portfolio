import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import "./About.scss";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef();
  const contentRef = useRef();

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        ScrollTrigger.create({
          trigger: aboutRef.current,
          start: "top top",
          end: "bottom+=20% top",
          pin: true,
          scrub: true,
        });

        document.fonts.ready.then(() => {
          if (contentRef.current) {
            const paragraphs = contentRef.current.querySelectorAll("p");
            paragraphs.forEach((p) => {
              if (p) {
                const split = new SplitText(p, { type: "words" });

                gsap.fromTo(
                  split.words,
                  { color: "var(--accent-color)" },
                  {
                    color: "var(--primary-color)",
                    stagger: 0.08,
                    ease: "none",
                    scrollTrigger: {
                      trigger: p,
                      start: "bottom 60%",
                      end: "bottom top",
                      scrub: true,
                    },
                  }
                );
              }
            });
          }

          const containerElement = aboutRef.current?.querySelector(".container");
          if (containerElement) {
            gsap.to(containerElement, {
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "75% center",
                end: "bottom top",
                scrub: true,
              },
              filter: "blur(5px)",
              scale: 0.5,
              ease: "none",
            });
          }
        });
      },

      "(max-width: 767px)": () => {
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="about relative w-full flex items-center justify-center min-h-screen lg:max-h-screen py-0 md:py-12"
      id="about"
    >
      <div className="container px-6 md:px-12 flex items-center justify-center overflow-hidden">
        <div className="about-row flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-10 py-6">
          <div className="image-section w-full md:w-1/3 flex items-center justify-center py-6">
            <div className="image-wrapper w-72 h-96 relative overflow-hidden ">
              <img
                src="/images/My-image-2.png"
                alt="Muhammed Ashique KP"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div ref={contentRef} className="content-section w-full md:w-2/3 py-6">
            <h3 className="title lg:mb-8">About Me</h3>
            <p className="mb-4 inline-block">
              Hi, I'm{" "}
              <span className="font-semibold text-[var(--primary-color)]">
                Muhammed Ashique KP
              </span>
              , a passionate Full Stack Developer with expertise in
              <span className="font-semibold"> Python, Django, and React.js</span>. 
              I specialize in building responsive, user-friendly web applications that deliver 
              seamless digital experiences. <br /> <br /> With strong front-end skills in{" "}
              <span className="font-semibold">React</span> and{" "}
              <span className="font-semibold">Tailwind</span>, combined with back-end expertise in{" "}
              <span className="font-semibold">Django</span>, I create complete solutions that are both
              functional and visually appealing.
            </p>

            <a
              href="/files/Ashique Full-Stack.pdf"
              download="Ashique_Full-Stack.pdf"
              className="resume-btn inline-block px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-medium rounded-md hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
