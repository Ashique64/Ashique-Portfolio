import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div className="about relative w-full flex items-center justify-center min-h-screen py-0 md:py-16" id="about">
            <div className="container px-6 md:px-12 flex items-center justify-center overflow-hidden mt-12">
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
                    <div className="content-section w-full md:w-2/3 py-6">
                        <h3 className="title lg:mb-8">About Me</h3>
                        <p className="mb-4 inline-block">
                            Hi, I'm <span className="font-semibold text-[var(--primary-color)]">Muhammed Ashique KP</span>,
                            a passionate Full Stack Developer with expertise in
                            <span className="font-semibold"> Python, Django, and React.js</span>. I specialize in building
                            responsive, user-friendly web applications that deliver seamless digital experiences.
                        </p>
                        <p className="text-lg leading-relaxed font-[var(--secondary-font)] mb-4">
                            With strong front-end skills in <span className="font-semibold">React</span> and{" "}
                            <span className="font-semibold">Tailwind</span>, combined with back-end expertise in{" "}
                            <span className="font-semibold">Django</span>, I create complete solutions that are both
                            functional and visually appealing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
