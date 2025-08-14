import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = ({
  title = "ASME NIT Rourkela Chapter",
  description = "The American Society of Mechanical Engineers Student Chapter at NIT Rourkela, fostering a culture of innovation and technical learning through innovation, collaboration, and hands-on learning.",
  social = {
    instagram: "https://www.instagram.com/asme.nitrkl/",
    linkedin: "https://www.linkedin.com/company/asme-nit-rourkela",
  },
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-[#0B2044] text-white px-4 pt-4 pb-8 sm:px-8 sm:pt-6 sm:pb-10 md:px-12 md:pt-8 md:pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8">
        {/* Logo and Description Section */}
        <div className="order-1 md:order-none">
          <div className="flex items-center gap-4 mb-3 flex-wrap">
            <img
              src="https://res.cloudinary.com/dswk9scro/image/upload/v1755092506/ASME_NIT_Rourkela_Student_Section_White_T_oe5ox2.png"
              alt="ASME Logo"
              className="w-24 h-20 object-contain -mt-1"
            />
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          <p className="text-base mb-6">{description}</p>
          <div className="flex gap-6 text-2xl">
            <a
              href={social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-gray-300 transition" />
            </a>
            <a
              href={social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-gray-300 transition" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:ml-15">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-base">
            <li>
              <Link to="/team" className="hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/achievements" className="hover:underline">
                Achievements
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="order-2 md:ml-6">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <div className="text-base space-y-6">
            <div className="flex items-center gap-4">
              <FiMail className="text-[#51B8F2] text-2xl hover:text-white transition" />
              <a
                href="mailto:asme.nitrkl@gmail.com"
                className="no-underline hover:underline"
              >
                asme.nitrkl@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-[#51B8F2] text-2xl hover:text-white transition" />
              <span>+91-1234567890</span>
            </div>
            <div className="flex items-start gap-4">
              <GoLocation className="text-[#51B8F2] text-2xl mt-1 hover:text-white transition" />
              <span>
                National Institute of Technology Rourkela, <br /> Odisha -
                769008
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-base mt-5 border-t border-white/20 pt-2">
        <p>
          © {year} {title}. All rights reserved.
        </p>
        <a
          href="https://opencodenitr.in/"
          target="_blank"
          className="hover:underline "
        >
          Architected with ♥ by Team OpenCode
        </a>
      </div>
    </footer>
  );
};

export default Footer;
