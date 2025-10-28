import { useRef, useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiCode, FiServer } from "react-icons/fi";
import { FaDesktop, FaMicrochip } from "react-icons/fa";

function useDarkMode() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterKey, setFilterKey] = useState(0);
  const sectionRef = useRef(null);
  const isDark = useDarkMode();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "SmallShop - Ecommerce",
      description:
        "A full-stack e-commerce platform for local shops with inventory management, order processing, admin control, and customer dashboard. Built with modern technologies for a seamless experience.",
      image: "/projects/1.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "PostgreSQL",
        "Django REST Framework",
        "Supabase",
      ],
      categories: ["web"],
      liveUrl: "https://smal-shop.vercel.app/",
      githubUrl: "https://github.com/M-LOGESH/SmalShop-Ecommerce",
      completionDate: "Sep 2025",
    },
    {
      id: 2,
      title: "FarmIQ - Dashboard",
      description:
        "Web Dashboard for precision agriculture that integrates IoT sensor networks to provide real-time farm monitoring, predictive analytics, motor control, and automated insights for smarter, efficient farming.",
      image: "/projects/2.png",
      technologies: [
        "Tailwind CSS",
        "Firebase",
        "Chart.js",
        "Python",
        "Machine Learning",
        "ESP32",
        "IoT Sensors",
      ],
      categories: ["web", "iot"],
      liveUrl: "https://farm-iq-dashboard.vercel.app/",
      githubUrl: "https://github.com/M-LOGESH/FarmIQ",
      completionDate: "Apr 2025",
    },
    {
      id: 3,
      title: "CodeLearn",
      description:
        "An interactive learning platform offering coding tutorials, live examples, and practice exercises, built with Astro for high performance and a seamless learning experience.",
      image: "/projects/3.png",
      technologies: ["Astro", "Tailwind CSS", "JavaScript", "Markdown"],
      categories: ["web"],
      liveUrl: "https://code-learn-web.vercel.app/",
      githubUrl: "https://github.com/M-LOGESH/CodeLearn",
      completionDate: "July 2025",
    },
    {
      id: 4,
      title: "STS Glove",
      description:
        "Developed a basic model of a smart glove capable of translating sign language into audible speech via a Bluetooth-connected mobile app to assist those with speech impairments.",
      image: "/projects/4.png",
      technologies: [
        "ESP32",
        "C++",
        "Sensor Fusion",
        "Bluetooth",
      ],
      categories: ["iot"],
      liveUrl: null,
      githubUrl: "https://github.com/M-LOGESH/Sign-Speech",
      completionDate: "Apr 2024",
    },
    {
      id: 5,
      title: "Laser Coordinate System",
      description:
        "Developed a Laser Transmitter and Receiver Signal Coordination System for real-time, accurate terrain profiling. Created graphical representations of land surfaces for precise land levelling in agriculture.",
      image: "/projects/5.jpeg",
      technologies: [
        "Python",
        "Raspberry Pi",
        "Laser System",
      ],
      categories: ["iot"],
      liveUrl: null,
      githubUrl: "https://github.com/username/laser-coordinate-system",
      completionDate: "Mar - Dec 2023",
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: FaDesktop },
    { id: "web", name: "Web", icon: FiCode },
    { id: "iot", name: "IoT", icon: FaMicrochip },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  const handleFilterChange = (filterId) => {
    // Only change the filter, no pop animation
    setActiveFilter(filterId);
    setFilterKey((prev) => prev + 1);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-30 lg:px-10 overflow-hidden bg-stone-100 dark:bg-zinc-950 2lg-min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold text-gray-900 dark:text-white ${
              isVisible ? "animate-slide-in-top" : "opacity-0"
            }`}
          >
            MY{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-400 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex mb-12">
          <div className="flex gap-4 mx-auto px-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 whitespace-nowrap ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  } ${
                    activeFilter === category.id
                      ? "bg-red-600 border-red-600 text-white transform -translate-y-1 shadow-lg"
                      : "bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-red-600 dark:hover:border-red-400 hover:text-red-600 dark:hover:text-red-400 hover:shadow-md"
                  }`}
                  style={{
                    animationDelay: `${index * 100 + 200}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-3"
          key={filterKey}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative flex flex-col h-full bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-900 transform hover:scale-105 ${
                isVisible ? "animate-slide-in-bottom" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden w-full aspect-[16/9] rounded-t-2xl">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-900 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-gray-900 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-110"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                    <FiCode className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-titillium font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 font-saria text-gray-700 dark:text-gray-200 text-xs rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-neutral-700 flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.completionDate}
                  </span>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
