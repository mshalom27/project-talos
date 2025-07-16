import { Calendar } from "lucide-react";

const AchievementCard = ({
  title,
  description,
  image,
  date,
  isLeft,
  index,
}) => {
  return (
    <div
      className={`flex items-center w-full mb-16 ${isLeft ? "justify-start" : "justify-end"}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={`
          w-full max-w-md bg-gradient-card rounded-2xl shadow-card hover:shadow-card-hover 
          transition-all duration-500 hover:scale-105 group cursor-pointer
          ${isLeft ? "animate-slide-in-left" : "animate-slide-in-right"}
        `}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center text-muted text-sm mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="font-medium">{date}</span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-muted ">{description}</p>

          {/* Decorative element */}
          <div className="mt-4 h-1 w-16 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
