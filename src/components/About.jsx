import { useRef, useEffect, useState } from "react";
import { FiCode, FiServer, FiDatabase, FiCloud, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const viewResume = () => {
    const resumeUrl = "/Resume_Logesh_M.pdf";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const floatingIcons = [
    { icon: FiCode, delay: "0s", position: "top-2 -right-2" },
    { icon: FiServer, delay: "1s", position: "bottom-2 -right-2" },
    { icon: FiDatabase, delay: "2s", position: "bottom-2 -left-2" },
    { icon: FiCloud, delay: "3s", position: "top-2 -left-2" },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/M-LOGESH",
      label: "GitHub",
      className: "hover:text-red-500 rounded-full",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/logeshm7",
      label: "LinkedIn",
      className: "hover:text-blue-500",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-30 lg:px-10 bg-white dark:bg-neutral-950 overflow-hidden flex justify-center items-center 2lg:min-h-screen"
    >
      <div className="max-w-7xl mx-auto sm:mt-8 px-4 sm:px-6 w-full">
        {/* Mobile: Image First */}
        <div className="lg:hidden flex justify-center mb-5">
          <div
            className={`relative ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            {/* Triangle Container */}
            <div className="relative w-50 h-50 sm:w-80 sm:h-80 ml-15 sm:ml-20 triangle-container">
              {/* Triangle Border using SVG */}
              <div
                className={`absolute inset-0 w-full h-full transform rotate-12 scale-110 z-0 ${
                  isVisible ? "animate-triangle-float" : ""
                }`}
              >
                <svg width="100%" height="100%" viewBox="0 0 110 100">
                  {/* Red border triangle */}
                  <path
                    d="M60,50 L10,100 L100,75 Z"
                    fill="none"
                    stroke="rgb(239, 68, 68)"
                    strokeWidth="3"
                    className="dark:stroke-red-700"
                  />
                  {/* White/black fill triangle */}
                  <path
                    d="M60,50 L10,100 L100,75 Z"
                    fill="white"
                    className="dark:fill-black"
                  />
                </svg>
              </div>

              {/* Profile Image with faded bottom effect */}
              <div className="absolute top-1 sm:top-1 right-1 sm:right-5 w-42 h-42 sm:w-70 sm:h-70 z-10 image-fade-container">
                <img
                  src="/profile1.png"
                  alt="John Doe"
                  className="w-full h-full object-contain drop-shadow-2xl image-fade"
                />
              </div>
            </div>

            {/* Floating Icons */}
            {/* {floatingIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`absolute ${item.position} bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg border border-red-200 dark:border-red-800 animate-bounce-slow z-20`}
                  style={{ animationDelay: item.delay }}
                >
                  <IconComponent className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
              );
            })}

            <div className="absolute -top-1 -right-1 w-16 h-16 bg-red-200 dark:bg-red-800 rounded-full animate-pulse opacity-60 z-0"></div>
            <div
              className="absolute -bottom-1 left-5 w-12 h-12 bg-red-300 dark:bg-red-700 rounded-full animate-pulse opacity-40 z-0"
              style={{ animationDelay: "1.5s" }}
            ></div> */}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Left Side: Content */}
          <div
            className={`flex-2 ${
              isVisible
                ? "animate-slide-in-bottom sm:animate-slide-in-left"
                : "opacity-0"
            }`}
          >
            <div className="lg:max-w-xl xl:max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl 2lg:text-6xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-4">
                Hi, I'm{" "}
                <span className="text-red-600 dark:text-red-400">Logesh M</span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-raleway text-gray-600 dark:text-gray-300 mb-4 sm:mb-8">
                Full Stack Developer
              </h2>

              <div className="space-y-4 font-titillium text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                <p>
                  I'm a passionate full-stack developer with a strong interest
                  in creating scalable web applications and interactive user
                  experiences. I believe in writing clean, efficient code that
                  collaboratively solves real-world problems. I'm eager to apply
                  my skills, learn from industry experts, and meaningfully
                  contribute to impactful projects that make a difference.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pl-2 sm:pl-0 justify-start items-center">
                {/* Resume Button */}
                <button
                  onClick={viewResume}
                  className={`flex items-center space-x-2 px-4 sm:px-8 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-sm sm:text-base text-white rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-red-500/25
      ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
                >        
                  <span>View Resume</span>
                </button>

                {/* Social Icons */}
                <div
                  className={`flex gap-3 ${
                    isVisible ? "animate-scale-in delay-300" : "opacity-0"
                  }`}
                >
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-black dark:text-white ${social.className}`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-7 h-7 sm:w-9 sm:h-9" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Desktop Image with Triangle */}
          <div
            className={`hidden lg:flex flex-1 justify-center ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative triangle-container">
              {/* Triangle Container */}
              <div className="relative w-90 h-90 2lg:w-110 2lg:h-110">
                {/* Triangle Border using SVG */}
                <div
                  className={`absolute inset-0 ml-20 w-full h-full transform rotate-12 scale-110 z-0 ${
                    isVisible ? "animate-triangle-float" : ""
                  }`}
                >
                  <svg width="100%" height="100%" viewBox="0 0 110 100">
                    {/* Red border triangle */}
                    <path
                      d="M60,50 L10,100 L100,75 Z"
                      fill="none"
                      stroke="rgb(239, 68, 68)"
                      strokeWidth="3"
                      className="dark:stroke-red-700"
                    />
                    {/* White/black fill triangle */}
                    <path
                      d="M60,50 L10,100 L100,75 Z"
                      fill="white"
                      className="dark:fill-black"
                    />
                  </svg>
                </div>

                {/* Profile Image with faded bottom effect */}
                <div className="absolute top-2 -right-1 2lg:top-1 2lg:right-3 w-77 h-77 2lg:w-95 2lg:h-95 z-10">
                  <img
                    src="/profile1.png"
                    alt="Logesh M"
                    className="w-full h-full object-contain drop-shadow-2xl image-fade"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              {/* {floatingIcons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`absolute ${item.position} bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-red-200 dark:border-red-800 animate-bounce-slow z-20`}
                    style={{ animationDelay: item.delay }}
                  >
                    <IconComponent className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for triangle and image fade effects */}
      <style >{`
        .triangle-container {
          perspective: 1000px;
        }

        @keyframes triangle-float {
          0%,
          100% {
            transform: translateY(0px) rotate(10deg);
          }
          50% {
            transform: translateY(-5px) rotate(10deg);
          }
        }

        .animate-triangle-float {
          animation: triangle-float 4s ease-in-out infinite;
        }

        /* Image fade effect */
        .image-fade-container {
          position: relative;
        }

        .image-fade {
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0.3) 90%,
            rgba(0, 0, 0, 0) 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0.3) 94%,
            rgba(0, 0, 0, 0) 100%
          );
        }
      `}</style>
    </section>
  );
}