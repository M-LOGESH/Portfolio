import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiDownload,
  FiUser,
  FiCode,
  FiFolder,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px", // detects more naturally
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Auto-close menu when switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // const downloadResume = () => {
  //   const resumeUrl = "/resume.pdf";
  //   const link = document.createElement("a");
  //   link.href = resumeUrl;
  //   link.download = "Logesh_M_Resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const viewResume = () => {
    const resumeUrl = "/Resume_Logesh.pdf";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const menuItems = [
    { id: "about", label: "ABOUT", icon: FiUser },
    { id: "skills", label: "SKILLS", icon: FiCode },
    { id: "projects", label: "PROJECTS", icon: FiFolder },
    { id: "education", label: "EDUCATION", icon: FiBriefcase },
    { id: "contact", label: "CONTACT", icon: FiMail },
  ];

  const shutterVariants = {
    hidden: { height: 0, opacity: 1 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      height: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-black backdrop-blur-md z-50 border-b drop-shadow-sm border-gray-200 dark:border-gray-800">
        <nav className="mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => scrollToSection("about")}
              className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"
            >
              LOGESH M
            </button>

            {/* Desktop Menu */}
            <div className="hidden 2md:flex items-center justify-center flex-1">
              <div className="flex space-x-3 lg:space-x-6">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="relative px-2 py-1 text-sm 2lg:text-base font-medium text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                    >
                      <motion.span
                        className={`relative inline-block ${
                          isActive ? "text-red-600 dark:text-red-400" : ""
                        }`}
                      >
                        {item.label}

                        {/* Animated underline that matches text width */}
                        <motion.span
                          layoutId="underline"
                          initial={{ scaleX: 0 }}
                          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute left-0 bottom-0 h-[2px] bg-red-600 dark:bg-red-400 w-full font-raleway origin-center rounded-full"
                        />
                      </motion.span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <ThemeToggle />
              <button
                onClick={viewResume}
                className="hidden 2md:flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-sm shadow-md"
              >
                <FiDownload className="w-4 h-4" />
                <span>Resume</span>
              </button>
              <button
                className="2md:hidden text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Shutter animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={shutterVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-[50px] sm:top-[72px] left-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-lg z-40 2md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-5 space-y-3">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex justify-center items-center space-x-3 w-full text-center px-2 py-2 font-raleway font-medium ${
                      activeSection === item.id
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <button
                onClick={viewResume}
                className="flex justify-center items-center space-x-3 w-[90%] px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium shadow-md"
              >
                <FiDownload className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
