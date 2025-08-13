import React, { useState, useEffect } from "react";

const EventCard = ({ title, description, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change image every 3 seconds
  useEffect(() => {
    if (!images || images.length <= 1) return; // skip if 0 or 1 image
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row border-2 border-[#0B2044]">
      <div className="relative w-full md:w-2/5 flex-shrink-0">
        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-l-xl">
          <img
            src={images?.[currentImageIndex]}
            alt={`${title} image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500 absolute top-0 left-0"
          />
        </div>

        {images?.length > 1 && (
          <div className="absolute bottom-2 left-2/5 transform -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === currentImageIndex ? "bg-white" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-[#0B2044]">{title}</h3>
        <p className="text-base text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
