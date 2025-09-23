import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const slideMenuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const hamburgerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const toggle = () => {
    if (!open) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const openMenu = () => {
    setOpen(true);
    

    gsap.fromTo(slideMenuRef.current, 
      { y: "-100%" },
      { 
        y: "0%", 
        duration: 0.6, 
        ease: "power3.out" 
      }
    );


    gsap.fromTo(menuItemsRef.current,
      { 
        y: 50,
        opacity: 0,
        rotationX: 15
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.3
      }
    );


    gsap.fromTo(footerRef.current,
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        ease: "power2.out",
        delay: 0.8 
      }
    );
  };

  const closeMenu = () => {

    gsap.to(menuItemsRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in"
    });

 
    gsap.to(footerRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });


    gsap.to(slideMenuRef.current, {
      y: "-100%",
      duration: 0.4,
      ease: "power2.in",
      delay: 0.2,
      onComplete: () => setOpen(false)
    });
  };

  const close = () => closeMenu();

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Frontend", href: "#frontend" },
    { label: "Backend", href: "#backend" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const addToRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  return (
    <>
      <header className="navbar-header fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-2" onClick={close}>
            <span className="navbar-brand text-xl font-bold">ASHIQUE</span>
          </a>

          <button
            ref={hamburgerRef}
            aria-label="Toggle menu"
            onClick={toggle}
            className="navbar-hamburger relative h-8 w-8 grid place-items-center rounded-md z-50 focus:outline-none"
          >
            <span className={`navbar-bars ${open ? 'open' : ''}`}></span>
          </button>
        </nav>
      </header>

      <div
        ref={slideMenuRef}
        className="navbar-slide-menu fixed inset-0 z-40"
        style={{ transform: "translateY(-100%)" }}
      >
        <div className="navbar-slide-content h-full flex flex-col">
          {/* Navigation Items */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <ul className="flex flex-col gap-8 text-center">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    ref={addToRefs}
                    href={item.href}
                    onClick={close}
                    className="navbar-slide-link block text-2xl font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Section */}
          <div ref={footerRef} className="p-6 text-center">
            <p className="text-green-200 text-sm">© 2025 COZECH</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          onClick={close}
          className="fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300"
        />
      )}
    </>
  );
};

export default Navbar;