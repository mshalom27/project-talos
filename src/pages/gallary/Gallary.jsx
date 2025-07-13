import { useState } from "react";
import images from "../../config/galary";

export default function GallaryPage() {
  const [selectedYear, setSelectedYear] = useState("all");

  const years = ["all", ...new Set(images.map((image) => image.year))].sort();

  const getFilteredImages = () => {
    if (selectedYear === "all") {
      return [...images];
    }
    return [...images].filter((image) => image.year === Number(selectedYear));
  };

  const galleryImages = getFilteredImages();

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative h-[280px] sm:h-[320px] md:h-[400px] lg:h-[480px] w-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/dsjxx976j/image/upload/v1752425766/e8d1afdb4d097b5c14935394e296d28109b650e4_fominv.png"
          alt="Gallery Hero Banner"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Year Filters and Description Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-black text-2xl md:text-[48px] font-bold leading-tight mb-2">
                Gallery
              </h2>
              <div className="flex flex-wrap gap-3 mt-4">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-1 rounded-full text-sm md:text-base transition-all 
                      ${
                        selectedYear === year
                          ? "bg-blue-600 text-white font-medium"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {year === "all" ? "All Years" : year}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-black-600 md:max-w-xl text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* No Images Message */}
        {galleryImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No images found for selected year.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
