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
    <footer className="bg-[#0B2044] text-white px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8">
        {/* Logo and Description Section */}
        <div className="order-1 md:order-none">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <img
              src="https://res.cloudinary.com/dswk9scro/image/upload/v1752377324/Group_cropped_qgqzw9.png"
              alt="ASME Logo"
              className="w-12 h-12 object-contain"
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

        {/* Quick Links Section */}
        <div className="order-3 md:order-none">
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-base">
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
        <div className="order-2 md:order-none">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <div className="text-base space-y-6">
            <div className="flex items-center gap-4">
              <FiMail className="text-[#51B8F2] text-2xl hover:text-white transition" />
              <span>asme.nitrkl@gmail.com</span>
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

      <div className="text-center text-base mt-10 border-t border-white/20 pt-6">
        © {year} {title}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
