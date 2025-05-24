"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = ["home", "about", "skills", "projects", "services", "contact"];

function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
             (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });
  const [hasScrolled, setHasScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Persist theme to localStorage + html class
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Scroll spy to update active nav item & sticky shadow
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 10);

      // Check which section is currently in viewport
      let current = "home";
      for (const id of MENU_ITEMS) {
        const elem = document.getElementById(id);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Accessibility focus trap in mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

    const modal = menuRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(focusableElementsString);
    if (focusableElements.length === 0) return;

    let firstElement = focusableElements[0];
    let lastElement = focusableElements[focusableElements.length - 1];

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    document.addEventListener("keydown", trapFocus);
    firstElement.focus();

    return () => document.removeEventListener("keydown", trapFocus);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const toggleTheme = () => setIsDarkMode((v) => !v);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Hamburger SVG paths morphing
  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );

  return (
    <div
      className={`fixed top-1 md:top-10 inset-x-0 md:w-[50%] mx-auto z-50 ${className}`}
    >
      <nav
        role="navigation"
        aria-label="Primary Navigation"
        className={`flex justify-between items-center px-6 py-4 rounded-full shadow-md transition-all duration-300 backdrop-blur-md border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 ${
          hasScrolled ? "shadow-xl" : "shadow-md"
        }`}
      >
        {/* Logo */}
        <div
          className="text-black dark:text-white font-bold text-xl select-none cursor-pointer"
          aria-label="Homepage"
          tabIndex={0}
          onClick={() => scrollToSection("home")}
          onKeyDown={(e) => {
            if (e.key === "Enter") scrollToSection("home");
          }}
        >
          {/* Simple logo animation */}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            🚀pkp 
          </motion.span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative cursor-pointer text-black dark:text-white font-semibold text-lg transition-colors duration-300 focus:outline-none ${
                activeSection === item
                  ? "text-indigo-500 dark:text-indigo-400"
                  : "hover:text-indigo-400 dark:hover:text-indigo-300"
              }`}
              aria-current={activeSection === item ? "page" : undefined}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute -bottom-1 left-0 w-full h-[2px] rounded bg-indigo-500 dark:bg-indigo-400 transition-transform duration-300 ${
                  activeSection === item ? "scale-x-100" : "scale-x-0"
                } origin-left`}
              />
            </button>
          ))}

          {/* Theme toggle */}
          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className="ml-6 p-2 rounded-full bg-indigo-500 dark:bg-indigo-400 text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme toggle mobile */}
          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-indigo-500 dark:bg-indigo-400 text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="relative w-8 h-8 flex flex-col justify-center items-center group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <Path
                animate={isMenuOpen ? { d: "M6 18L18 6" } : { d: "M3 7h18" }}
                transition={{ duration: 0.3 }}
              />
              <Path
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                d="M3 12h18"
              />
              <Path
                animate={isMenuOpen ? { d: "M6 6l12 12" } : { d: "M3 17h18" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 bottom-0 w-3/4 bg-white dark:bg-black z-40 py-8 px-6 shadow-2xl dark:shadow-white/10 rounded-r-2xl flex flex-col"
          >
            <nav className="flex flex-col space-y-6 mt-10">
              {MENU_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-black dark:text-white text-xl text-center font-semibold focus:outline-none ${
                    activeSection === item
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "hover:text-indigo-500 dark:hover:text-indigo-300"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
