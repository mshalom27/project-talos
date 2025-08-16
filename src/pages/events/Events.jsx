import { useState } from "react";
import EventCard from "../../components/EventCard";
import events from "../../config/events";
const Events = () => {
  const [filter, setFilter] = useState("all");

  const renderCards = () => {
    const filteredEvents =
      filter === "all" ? events : events.filter((e) => e.type === filter);

    return (
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))
        ) : (
          <EventCard
            title="Coming Soon"
            description="Stay tuned! Exciting future events are on the way."
            images={[
              "https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png",
            ]}
          />
        )}
      </div>
    );
  };

  return (
    <div className="px-8 md:px-12 py-8 mt-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#0B2044]">
          Our Organised Events
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["all", "past", "upcoming"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded transition ${
                filter === type
                  ? "bg-[#0B2044] text-white"
                  : "border border-[#0B2044] text-[#0B2044]"
              }`}
            >
              {type === "all"
                ? "View All"
                : type.charAt(0).toUpperCase() + type.slice(1) + " Events"}
            </button>
          ))}
        </div>
      </div>

      {renderCards()}
    </div>
  );
};

export default Events;
