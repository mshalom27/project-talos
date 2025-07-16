import React from "react";

const EventCard = () => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border-2 border-[#0B2044]">
      <img
        src="https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png"
        alt="Event"
        className="w-full md:w-2/5 object-cover"
      />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-[#0B2044]">Sample Event</h3>
        <p className="text-sm text-gray-600 mt-1">
          Placeholder description for the event.
        </p>
        <p className="text-sm text-gray-400 mt-2">Date: 25 Aug 2025</p>
      </div>
    </div>
  );
};
export default EventCard;
