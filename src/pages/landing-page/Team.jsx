import React, { useState, useEffect } from "react";
import teamMembers from "../../config/teammate";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  useEffect(() => {
    const handleResize = () => {
      const count = getVisibleCount();
      setVisibleCount(count);
      const maxIndex = Math.max(0, teamMembers.length - count);
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, teamMembers.length - visibleCount);
    setCurrentIndex((prev) => Math.min(prev + visibleCount, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const pageCount = Math.ceil(teamMembers.length / visibleCount);
  const activeDot = Math.round(currentIndex / visibleCount);

  return (
    <section className="bg-[#00163A] text-white px-4 sm:px-6 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Our team</h2>
          <p className="text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="mt-4 border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-[#00163A] transition">
            View all team members
          </button>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 box-border w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <div className="bg-[#00163A] rounded-lg">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-68 object-cover rounded-md"
                    />
                    <div className="mt-3 px-2">
                      <p className="font-semibold text-white">{member.name}</p>
                      <p className="text-sm text-gray-300">{member.title}</p>
                      <p className="text-sm text-gray-400 mt-2">
                        {member.description}
                      </p>
                      <div className="flex gap-3 mt-3 text-white text-lg">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 cursor-pointer"
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 cursor-pointer"
                        >
                          <FaXTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-12 right-4 flex items-center gap-3 z-10">
            <button
              onClick={prevSlide}
              className="bg-white text-[#00163A] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="bg-white text-[#00163A] w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
            >
              {">"}
            </button>
          </div>

          <div className="absolute -bottom-6 left-2 gap-2 hidden sm:flex">
            {Array.from({ length: pageCount }).map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === activeDot ? "bg-white" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-xl font-bold mb-1">Join Us Today!</h3>
          <p className="text-base text-gray-300 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-[#00163A] transition">
            Apply here
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSlider;
