import React, { useRef } from "react";
import "./Footer.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const logoRef = useRef(null);
    const descRef = useRef(null);
    const dividerRef = useRef(null);
    const bottomRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%", // animate when footer comes into view
            },
        });

        // Logo
        tl.from(logoRef.current, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power3.out",
        });

        // Description
        tl.from(descRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
        }, "-=0.4");

        // Divider line
        tl.from(dividerRef.current, {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.6,
            ease: "power2.out",
        }, "-=0.3");

        // Bottom texts
        const bottomItems = bottomRef.current.querySelectorAll("p");
        tl.from(bottomItems, {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.6,
            ease: "power2.out",
        }, "-=0.2");

    }, []);

    return (
        <footer id="footer" ref={footerRef}>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo" ref={logoRef}>
                        <h2>Muhammed Ashique</h2>
                    </div>
                    <p className="footer-description" ref={descRef}>
                        I specialize in building full-stack web applications using PostgreSQL, Python, Django and React.js.
                    </p>
                </div>

                <hr className="footer-divider" ref={dividerRef} />

                <div className="footer-bottom text-center" ref={bottomRef}>
                    <p className="copyright">© 2025 Muhammed Ashique. All rights reserved</p>
                    <p className="designer">
                        Designed by <span>Muhammed Ashique KP</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
