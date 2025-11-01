import { useRef, useEffect, useState } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { FiAward } from "react-icons/fi";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "B.E. ELECTRONICS AND COMMUNICATION ENGINEERING",
      institution: "K.L.N. College of Engineering, Sivagangai",
      score: "CGPA: 8.42",
      duration: "Oct 2021 – Apr 2025",
      type: "college",
      icon: <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      degree: "HIGHER SECONDARY",
      institution: "Grace Matric Hr Sec School, Madurai",
      score: "Grade: 89.96 %",
      duration: "Jun 2020 – May 2021",
      type: "highschool",
      icon: <FaUniversity className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      degree: "SECONDARY SCHOOL",
      institution: "Grace Matric Hr Sec School, Madurai",
      score: "Grade: 90.4 %",
      duration: "Jun 2018 – Mar 2019",
      type: "school",
      icon: <FiAward className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  const internshipData = [
    {
      role: "KLN INNOVATION & RESEARCH PARK",
      company: "K.L.N. College of Engineering",
      description: "Developed a Laser Transmitter and Receiver Signal Coordination System using Raspberry Pi for real-time terrain profiling. Created graphical representations of land surfaces for precise agricultural land levelling.",
      duration: "Mar 2023 – Dec 2023",
      logo: "/irp.webp"
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 lg:py-30 bg-neutral-50 dark:bg-black overflow-hidden 2lg:min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        {/* Education Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold text-gray-900 dark:text-white ${
                isVisible ? "animate-slide-in-top" : "opacity-0"
              }`}
            >
              EDUCATION &{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-400 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                QUALIFICATIONS
              </span>
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-5 top-0 w-0.5 h-[calc(100%+10%)] sm:h-[calc(100%+25%)] bg-gradient-to-b from-red-600/50 via-red-600/50 to-transparent"></div>

            {/* Education Items */}
            {educationData.map((education, index) => (
              <div
                key={education.degree}
                className="mb-10 relative flex items-start"
              >
                {/* Circle with icon */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-zinc-950 rounded-full border-2 border-red-600 dark:border-red-500 flex items-center justify-center text-black dark:text-white z-10">
                  {education.icon}
                </div>

                {/* Timeline content with slide-in-right animation */}
                <div 
                  className={`ml-6 flex-1 flex flex-col space-y-2 ${
                    isVisible ? "animate-slide-in-right" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Top Row: Title + Date */}
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900 dark:text-white">
                        {education.degree}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-saria text-sm sm:text-base">{education.institution}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 mt-1 md:mt-0 self-start">
                      {education.duration}
                    </span>
                  </div>

                  {/* Bottom Row: Grade */}
                  <div className="flex gap-2 flex-wrap md:flex-nowrap">
                    <span className="bg-red-700/80 font-semibold font-titillium text-white text-sm px-3 py-1 rounded-lg shrink-0">
                      {education.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Section */}
        <div>
          {/* Section Header - Same style as Education */}
          <div className="text-center mb-15">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold text-gray-900 dark:text-white ${
                isVisible ? "animate-slide-in-top" : "opacity-0"
              }`}
            >
              INTERNSHIP
            </h2>
          </div>

          {/* Internship Items - Enhanced Design */}
          {internshipData.map((internship, index) => (
            <div
              key={internship.role + internship.company}
              className="group"
            >
              {/* Enhanced Internship Card */}
              <div 
                className={`relative bg-white dark:bg-neutral-900/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-800 overflow-hidden ${
                  isVisible ? "animate-slide-in-left" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Accent Border */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-400"></div>
                
                {/* Content Container */}
                <div className="pl-4 pr-3 py-4 sm:pl-8 sm:pr-8 sm:py-6">
                  {/* Header Section - Logo left, content right on all screens */}
                  <div className="flex items-start gap-3 sm:gap-6">
                    {/* Logo Container - No background */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                      <img 
                        src={internship.logo} 
                        alt={`${internship.company} logo`}
                        className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Text Content - Role, Company, Duration */}
                    <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="flex-1">
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900 dark:text-white mb-1">
                        {internship.role}
                      </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-saria text-sm sm:text-lg">{internship.company}</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 mt-1 sm:mt-0 self-start sm:self-auto">
                        {internship.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                      {internship.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}