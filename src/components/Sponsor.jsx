import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import sponsors from "../config/sponsors";
import "./sponsor.css";

const SponsorsSection = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndex = useRef(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 640) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const scrollToIndex = (index) => {
    if (!containerRef.current) return;

    const itemWidth = containerRef.current.scrollWidth / sponsors.length;
    const scrollPosition = itemWidth * itemsToShow * index;

    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const getTotalPages = () => {
    return Math.ceil(sponsors.length / itemsToShow);
  };

  const goToNext = () => {
    const totalPages = getTotalPages();
    currentIndex.current = (currentIndex.current + 1) % totalPages;
    scrollToIndex(currentIndex.current);
  };

  const goToPrevious = () => {
    const totalPages = getTotalPages();
    currentIndex.current =
      currentIndex.current === 0 ? totalPages - 1 : currentIndex.current - 1;
    scrollToIndex(currentIndex.current);
  };

  useEffect(() => {
    if (isPaused) return;

    const autoPlay = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(autoPlay);
  }, [isPaused, itemsToShow]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handlePrevClick = () => {
    goToPrevious();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 200);
  };

  const handleNextClick = () => {
    goToNext();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 200);
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CENTERED TITLE SECTION */}
        <div className="mb-8" style={{ textAlign: "center" }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Our Sponsors and Partners
          </h2>
          <p className="text-gray-700 text-lg">
            We are proudly supported by our amazing sponsors and partners.
          </p>
        </div>

        <div
          className="relative px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#00163A] hover:bg-[#2563eb] rounded-full p-2 shadow cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-2 sponsor-item"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div
                  className="h-64 bg-white flex items-center justify-center rounded-xl hover:shadow-xl transition duration-300 border-2 cursor-pointer"
                  style={{
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="object-contain h-32 sponsor-image"
                    style={{
                      transition: "transform 0.3s ease, filter 0.3s ease",
                    }}
                  />
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#00163A] hover:bg-[#2563eb] rounded-full p-2 shadow cursor-pointer"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .sponsor-item:hover .sponsor-image {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection;
