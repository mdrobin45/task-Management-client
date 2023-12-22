import {
   FaFacebookF,
   FaGithubSquare,
   FaLinkedin,
   FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
   return (
      <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
         <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
               <Link
                  to="/"
                  className="flex justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={logo} className="w-40" alt=" Logo" />
               </Link>
               <ul className="flex justify-center flex-wrap gap-x-3 items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-400">
                  <li>
                     <a
                        href="#"
                        className="text-xl hover:text-primary transition-all hover:underline me-4 md:me-6">
                        <FaFacebookF />
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="text-xl hover:text-primary transition-all hover:underline me-4 md:me-6">
                        <FaTwitter />
                     </a>
                  </li>
                  <li>
                     <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://linkedin.com/in/mdrobin45"
                        className="text-xl hover:underline me-4 md:me-6">
                        <FaLinkedin />
                     </a>
                  </li>
                  <li>
                     <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/mdrobin45"
                        className="text-xl hover:text-primary transition-all hover:underline me-4 md:me-6">
                        <FaGithubSquare />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
