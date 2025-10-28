import { useRef, useEffect, useState } from "react";
import { FiCode } from "react-icons/fi";
import { FaCode, FaCogs } from "react-icons/fa";
import { TbServerBolt } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";

/* Detect dark mode (auto or via Tailwind's "dark" class) */
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

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
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

  const skillCategories = [
    {
      title: "Languages",
      icon: FaCode,
      skills: [
        { name: "Python", image: "/skills/python.svg" },
        { name: "JavaScript", image: "/skills/javascript.svg" },
        { name: "C", image: "/skills/c.svg" },
      ],
    },
    {
      title: "Frontend",
      icon: LuLayoutDashboard,
      skills: [
        { name: "HTML", image: "/skills/html.svg" },
        { name: "CSS", image: "/skills/css.svg" },
        { name: "React", image: "/skills/react.svg" },
        { name: "Tailwind", image: "/skills/tailwind-css.svg" },
      ],
    },
    {
      title: "Backend / DB",
      icon: TbServerBolt,
      skills: [
        { name: "Django", image: "/skills/django.svg" },
        { name: "MySQL", image: "/skills/mysql.svg" },
        { name: "PostgreSQL", image: "/skills/postgresql.svg" },
        { name: "Firebase", image: "/skills/firebase.svg" },
      ],
    },
    {
      title: "Tools",
      icon: FaCogs,
      skills: [
        { name: "Git", image: "/skills/git.svg" },
        { name: "GitHub", image: "/skills/github.svg" },
        { name: "Postman", image: "/skills/postman.svg" },
        { name: "Supabase", image: "/skills/supabase.svg" },
      ],
    },
  ];

  const familiarTechnologies = [
    {
      name: "Vercel",
      image: isDark ? "/skills/vercel-dark.svg" : "/skills/vercel-light.svg",
    },
    {
      name: "Render",
      image: isDark ? "/skills/render-dark.svg" : "/skills/render-light.svg",
    },
    { name: "Google Colab", image: "/skills/colab.svg" },
    { name: "Hugging Face", image: "/skills/huggingface.svg" },
    { name: "Vite", image: "/skills/vite.svg" },
    {
      name: "Astro",
      image: isDark ? "/skills/astro-dark.svg" : "/skills/astro-light.svg",
    },
    // {
    //   name: "Flask",
    //   image: isDark ? "/skills/flask-dark.svg" : "/skills/flask-light.svg",
    // },
    { name: "VS Code", image: "/skills/vscode.svg" },
    { name: "Arduino IDE", image: "/skills/arduino.svg" },
    { name: "Tinkercad", image: "/skills/tinkercad.svg" },
  ];

  const duplicatedTechnologies = [
    ...familiarTechnologies,
    ...familiarTechnologies,
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-30 lg:px-10 overflow-hidden bg-neutral-50 dark:bg-black flex justify-center items-center 2lg-min-h-screen"
    >
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs sm:text-sm font-medium mb-4">
            <FiCode className="mr-2" />
            TECHNICAL EXPERTISE
          </div> */}
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold text-gray-900 dark:text-white ${
              isVisible ? "animate-slide-in-top" : "opacity-0"
            }`}
          >
            SKILLS &{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-400 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-8 px-5 sm:px-8 mb-10 sm:mb-30">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-3 sm:p-6 border border-gray-200 dark:border-gray-700/50 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                isVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
                style={{
                  animationDelay: `${categoryIndex * 150}ms`,
                  animationFillMode: "both",
                }}
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 rounded-2xl  text-red-600 dark:text-red-400 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="">
                    <h3 className="text-lg md:text-xl font-saria font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center p-4 bg-gray-50 dark:bg-zinc-600/40 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800/70 transition-all duration-300 transform hover:scale-105 ${
                        isVisible ? "animate-scale-in" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: `${
                          categoryIndex * 150 + skillIndex * 50
                        }ms`,
                        animationFillMode: "both",
                      }}
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-8 h-8 md:w-9 md:h-9 mb-2 md:mb-3 object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          const fallback = document.createElement("div");
                          fallback.className =
                            "w-12 h-12 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center";
                          fallback.innerHTML =
                            '<span class="text-xs font-bold">?</span>';
                          e.target.parentNode.appendChild(fallback);
                        }}
                      />
                      <span className="text-sm font-saria font-medium text-gray-700 dark:text-gray-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Also Familiar With Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-titillium font-semibold text-gray-900 dark:text-white mb-2">
              Supporting Tools & Platforms
            </h3>
          </div>

          {/* Continuous Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-loop">
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 mx-1 sm:mx-3 flex items-center gap-3  bg-white dark:bg-zinc-900/80 rounded-xl px-4 py-3 border border-gray-200 dark:border-gray-700"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                  />
                  <span className="text-xs sm:text-sm font-saria font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style >{`
        .animate-scroll-loop {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: scroll-loop 12s linear infinite;
          will-change: transform;
        }

        @keyframes scroll-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        // .animate-scroll-loop:hover {
        //   animation-play-state: paused;
        // }
      `}</style>
    </section>
  );
}
