import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);

  // Get environment variables (for Vite)
  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

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

  // Effect to automatically hide status message after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Email",
      value: "logeshm724@gmail.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Phone",
      value: "+91 90259 82477",
      link: "tel:+919025982477",
    },
    {
      icon: <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5" />,
      label: "Location",
      value: "Madurai, Tamil Nadu, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/logeshm7",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/M-LOGESH",
      color: "hover:text-gray-800 dark:hover:text-white",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate environment variables
    if (
      !emailjsConfig.serviceId ||
      !emailjsConfig.templateId ||
      !emailjsConfig.publicKey
    ) {
      setStatus("Email service not configured properly");
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formData,
        emailjsConfig.publicKey
      );

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  // Determine button content based on state
  const getButtonContent = () => {
    if (isSending) return "Sending...";
    if (status) return status;
    return "Send Message";
  };

  // Determine button styles based on state
  const getButtonStyles = () => {
    const baseStyles = "w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed";
    
    if (isSending) {
      return `${baseStyles} bg-gray-500 cursor-not-allowed`;
    } else if (status) {
      if (status.includes("successfully")) {
        return `${baseStyles} bg-green-600`;
      } else {
        return `${baseStyles} bg-red-600`;
      }
    } else {
      return `${baseStyles} bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600`;
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 lg:py-30 bg-white dark:bg-zinc-950 overflow-hidden 2lg:min-h-screen"
    >
      {/* Add autofill styles for both light and dark modes */}
      <style >{`
        /* Light mode autofill */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #fef2f2 inset !important;
          -webkit-text-fill-color: #1f2937 !important;
          border-bottom-color: #dc2626 !important;
          transition: background-color 5000s ease-in-out 0s;
        }

        /* Dark mode autofill */
        .dark input:-webkit-autofill,
        .dark input:-webkit-autofill:hover,
        .dark input:-webkit-autofill:focus,
        .dark textarea:-webkit-autofill,
        .dark textarea:-webkit-autofill:hover,
        .dark textarea:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #1f2937 inset !important;
          -webkit-text-fill-color: white !important;
          border-bottom-color: #ef4444 !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-15">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-raleway font-semibold text-gray-900 dark:text-white ${
              isVisible ? "animate-slide-in-top" : "opacity-0"
            }`}
          >
            GET IN{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-400 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              TOUCH
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-3">
          {/* Contact Information */}
          <div
            className={`space-y-5 sm:space-y-8 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-saria font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((contact, index) => (
                <div
                  key={contact.label}
                  className={`flex items-center space-x-4 p-2 sm:p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 ${
                    isVisible ? "animate-slide-in-right" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-500 dark:text-red-400">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contact.label}
                    </p>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-sm sm:text-base text-gray-900 dark:text-white font-medium hover:text-red-400 transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            {/* <div
              className={`pt-6 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-14">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                    placeholder="Name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 resize-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending || status}
                className={getButtonStyles()}
              >
                {getButtonContent()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}