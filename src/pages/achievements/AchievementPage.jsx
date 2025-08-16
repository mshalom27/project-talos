import Timeline from "../../components/Timeline";
import achievementImg from "../../assets/achievementimg.jpg";

const AchievementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <div className="relative overflow-hidden h-200 w-full">
        {/* Background Image - Cropped from top */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${achievementImg})`,
            backgroundPosition: "center 90%",
          }}
        ></div>
      </div>

      <div className="relative bg-white">
        <Timeline />
      </div>
    </div>
  );
};

export default AchievementPage;
