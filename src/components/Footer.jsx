import { FiZap} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope,FaHeart } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 dark:bg-zinc-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 order-2 lg:order-1">
            <a
              href="https://github.com/M-LOGESH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/logeshm7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:logeshm724@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center order-1 lg:order-2 gap-2 2lg:ml-15">
            <FiZap className="text-yellow-500 w-5 h-5 animate-pulse" />
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center font-saria">
              Currently rendering dreams… and errors
            </p>
          </div>

          <p className="text-sm text-gray-400 dark:text-gray-500 w-full lg:w-auto text-center lg:text-right order-3 flex items-center justify-center lg:justify-end gap-1">
            © {year} Crafted with <FaHeart className="text-amber-600 w-3 h-3" /> by{" "}
            <span className="font-semibold">Logesh M</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
