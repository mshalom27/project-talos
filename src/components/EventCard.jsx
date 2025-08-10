import React from "react";

const EventCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border-2 border-[#0B2044]">
      <img
        src={image}
        alt={title}
        className="w-full md:w-2/5 object-cover aspect-[4/3]"
      />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-[#0B2044]">{title}</h3>
        <p className="text-base text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
