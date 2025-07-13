// src/pages/Events.jsx
/*import React from 'react';

  const Events = () => {
  const events = [
    {
      title: "Event title heading",
      date: "June 2025",
      details: "Some details about the event here briefly.",
      img: "https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png",
    },
    {
      title: "Event title heading",
      date: "May 2025",
      details: "Another short description of an event.",
      img: "https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png",
    },
  ];

  return (
    <div className="bg-white text-[#0B2044] px-6 md:px-20 py-12">
      */
      {/* Hero Section */}
      /*
      <div className="text-center mb-12">
        <img src="https://res.cloudinary.com/dswk9scro/image/upload/v1752312233/image_1_nydvj8.png" alt="Event Banner" className="w-full h-auto max-w-xl shadow-lg mx-auto mb-6" />
        <h2 className="text-3xl font-bold">Our Organised Events</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-[#4F8BFA] text-white px-4 py-2 rounded hover:bg-[#0B2044]">View all</button>
          <button className="border border-[#0B2044] px-4 py-2 rounded text-[#0B2044] hover:bg-[#0B2044] hover:text-white">Past Events</button>
          <button className="border border-[#0B2044] px-4 py-2 rounded text-[#0B2044] hover:bg-[#0B2044] hover:text-white">Upcoming Events</button>
        </div>
      </div>
      */
      {/* Event Cards */}
        /*
      <div className="grid gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
            <img src={event.img} alt={event.title} className="w-full md:w-2/5 object-cover" />
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{event.date}</p>
              <p className="mt-3">{event.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
*/
import { useState } from "react";

const EventCard = () => (
  <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border-2 border-[#0B2044]">
    <img src="https://res.cloudinary.com/dswk9scro/image/upload/v1752313324/image_urekzp.png" alt="Event" className="w-full md:w-2/5 object-cover" />
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

