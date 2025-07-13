import { useState } from "react";

const EventCard = () => (
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

const Events = () => {
  const [filter, setFilter] = useState("all");

  const renderCards = () => {
    return (
      <div className="flex flex-col gap-6 mt-10">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    );
  };

  return (
    <div className="px-4 md:px-12 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#0B2044]">
          Our Organised Events
        </h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded transition ${
              filter === "all"
                ? "bg-[#51B8F2] text-white"
                : "border border-[#0B2044] text-[#0B2044]"
            }`}
          >
            View all
          </button>
          <button
            onClick={() => setFilter("past")}
            className={`px-4 py-2 rounded transition ${
              filter === "past"
                ? "bg-[#51B8F2] text-white"
                : "border border-[#0B2044] text-[#0B2044]"
            }`}
          >
            Past Events
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-4 py-2 rounded transition ${
              filter === "upcoming"
                ? "bg-[#51B8F2] text-white"
                : "border border-[#0B2044] text-[#0B2044]"
            }`}
          >
            Upcoming Events
          </button>
        </div>
      </div>

      {/* Placeholder Cards */}
      {renderCards()}
    </div>
  );
};

export default Events;
