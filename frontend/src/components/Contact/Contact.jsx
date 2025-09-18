import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Contact.scss";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
    const contactRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const socialRef = useRef();

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            href: "https://www.linkedin.com/in/muhammed-ashique-k-p-9a03b0267/",
            color: "#0077B5"
        },
        {
            name: "Email",
            icon: <FaEnvelope />,
            href: "mailto:ashique200899@gmail.com",
            color: "#D44638"
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            href: "https://wa.me/918606128064",
            color: "#25D366"
        }
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

            const socialIcons = socialRef.current?.querySelectorAll(".social-icon");
            if (socialIcons) {
                gsap.fromTo(
                    socialIcons,
                    { opacity: 0, y: 50, scale: 0.8 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: socialRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            const containerElement = contactRef.current?.querySelector(".container");
            if (containerElement) {
                gsap.to(containerElement, {
                    scrollTrigger: {
                        trigger: contactRef.current,
                        start: "bottom 60%",
                        end: "bottom top",
                        scrub: true,
                    },
                    filter: "blur(5px)",
                    scale: 0.5,
                    ease: "none",
                });
            }
        });
    }, []);

    return (
        <div
            id="contact"
            ref={contactRef}
            className="contact relative w-full flex items-start justify-center py-14 md:py-12"
        >
            <div className="container px-6 md:px-12 py-7 md:py-14 flex flex-col items-center justify-center overflow-hidden">
                <div className="title mb-8">
                    <h2 ref={titleRef} className="font-bold text-3xl md:text-4xl">
                        Contact
                    </h2>
                </div>
                <div className="description max-w-4xl mx-auto mb-12 md:mb-16 text-center">
                    <p ref={descriptionRef} className="leading-relaxed opacity-90">
                        If you have any questions, please don&apos;t hesitate to
                        contact me.
                    </p>
                </div>
                <div ref={socialRef} className="social-media flex gap-6">
                    {socialLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon"
                            style={{ color: link.color }}
                        >
                            {React.cloneElement(link.icon, {
                                className: "w-12 h-12 md:w-16 md:h-16"
                            })}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
