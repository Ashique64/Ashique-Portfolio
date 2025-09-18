import React, { useEffect, useRef, useState } from "react";
import "./Preloader.scss";
import gsap from "gsap";

const Preloader = () => {
    const loaderRef = useRef(null);
    const progressBarRef = useRef(null);
    const percentageRef = useRef(null);
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate the preloader entrance
        tl.fromTo(
            loaderRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power2.out" }
        );

        // Progress animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + Math.random() * 15 + 5; // Random increment between 5-20
                
                if (newProgress >= 100) {
                    clearInterval(progressInterval);
                    
                    // Complete the progress bar
                    gsap.to(progressBarRef.current, {
                        width: "100%",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    gsap.to(percentageRef.current, {
                        textContent: "100%",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    // Wait a bit then fade out
                    setTimeout(() => {
                        gsap.to(loaderRef.current, {
                            opacity: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            onComplete: () => setVisible(false),
                        });
                    }, 500);
                    
                    return 100;
                }
                
                return newProgress;
            });
        }, 100); // Update every 100ms

        return () => {
            clearInterval(progressInterval);
        };
    }, []);

    // Update progress bar width and percentage text
    useEffect(() => {
        if (progress <= 100) {
            gsap.to(progressBarRef.current, {
                width: `${progress}%`,
                duration: 0.2,
                ease: "power2.out"
            });
            
            gsap.to(percentageRef.current, {
                textContent: `${Math.floor(progress)}%`,
                duration: 0.2,
                ease: "power2.out"
            });
        }
    }, [progress]);

    if (!visible) return null;

    return (
        <div className="preloader" ref={loaderRef}>
            <div className="preloader-content">
                <div className="progress-container">
                    <div className="progress-track">
                        <div className="progress-bar" ref={progressBarRef}></div>
                        <div className="progress-glow"></div>
                    </div>
                    <div className="percentage" ref={percentageRef}>0%</div>
                </div>
                <div className="loading-text">Loading...</div>
            </div>
        </div>
    );
};

export default Preloader;