import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import sponsors from "../config/sponsors";
import "./sponsor.css";

const SponsorsSection = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const pageIndex = useRef(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1);
      else if (width < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToPage = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / sponsors.length;
    const scrollX = cardWidth * visibleCount * index;
    container.scrollTo({ left: scrollX, behavior: "smooth" });
  };

  const totalPages = () => {
    return Math.ceil(sponsors.length / visibleCount);
  };

  const autoScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const pages = totalPages();
    pageIndex.current = (pageIndex.current + 1) % pages;
    scrollToPage(pageIndex.current);
  };

  const handleManualScroll = (direction) => {
    const pages = totalPages();
    if (direction === "left") {
      pageIndex.current =
        pageIndex.current === 0 ? pages - 1 : pageIndex.current - 1;
    } else {
      pageIndex.current = (pageIndex.current + 1) % pages;
    }
    scrollToPage(pageIndex.current);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(autoScroll, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered, visibleCount]);

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-0">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Sponsors and Partners
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            We are proudly supported by our amazing sponsors and partners.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth hide-scrollbar"
          >
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-2 box-border"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="h-64 bg-white flex items-center justify-center rounded transition duration-300 transform hover:shadow-xl cursor-pointer border-2">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="object-contain h-32"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => handleManualScroll("left")}
              className="carousel-arrow-btn absolute left-2 top-1/2 -translate-y-1/2 z-10"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              className="carousel-arrow-btn absolute right-2 top-1/2 -translate-y-1/2 z-10"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
