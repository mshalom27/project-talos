import React from "react";
import { achievementsData } from "../../config/achievement";

export default function Achievements() {
  return (
    <div className="px-4 md:px-12 py-8 max-w-screen-xl mx-auto">
      <div style={{ marginBottom: "12rem" }}>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Our Achievements
        </h2>
        <p className="text-gray-700 mb-6 max-w-3xl">
          ASME NIT Rourkela excels in fostering innovation and leadership
          through workshops, competitions, and expert lectures. Recognized for
          achievements in events like the Student Design Challenge and HPVC, the
          chapter addresses real-world problems with engineering creativity.
          Their STEM outreach initiatives further enhance their impact,
          solidifying their reputation for excellence in mechanical engineering.
        </p>
        <button className="bg-white text-blue-800 border border-blue-800 px-4 py-2 rounded hover:bg-blue-50 mb-12">
          View All Achievements &gt;
        </button>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2 z-0"></div>
        <div className="lg:hidden absolute left-2 top-0 h-full w-1 bg-black z-0"></div>

        <div className="flex flex-col lg:flex-row  items-start lg:items-center justify-between relative z-10">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className={`w-full lg:w-1/4 px-4 mb-16 lg:mb-0 flex lg:flex-col items-start lg:items-center relative`}
            >
              {
                <div className="absolute lg:static left-0 lg:left-auto top-2 lg:top-auto lg:mb-4 transform -translate-y-1/2 lg:translate-y-1/2 w-4.5 h-4.5 bg-black border-2 border-white rounded-full z-20"></div>
              }

              <div
                className={`bg-white p-4 rounded-md  w-full max-w-xs lg:mt-0 lg:absolute ${
                  index % 2 === 0
                    ? "lg:top-1/2 lg:translate-y-6 self-start"
                    : "lg:bottom-1/2 lg:-translate-y-6 self-end"
                }`}
              >
                <h3 className="font-bold text-lg text-black">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
