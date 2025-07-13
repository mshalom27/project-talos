import TButton from "../shared/TertiaryButton";
import images from "../../config/galary";

export default function GalarySection() {
  const getRandomImages = () => {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled;
  };

  const randomImages = getRandomImages();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Image Gallery</h2>
        <p className="text-black-600 mb-6">
          Explore our vibrant moments captured in stunning visuals.
        </p>
        <TButton>Go to Gallery &gt;</TButton>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {randomImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-fit"
          >
            <div className="relative w-full h-auto">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 block"
                loading="lazy"
                onLoad={(e) => {
                  e.target.style.display = "block";
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
