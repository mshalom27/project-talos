import Timeline from "../../components/Timeline";
import achievementImg from "../../assets/achievementimg.jpg";

const AchievementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="relative overflow-hidden h-screen w-screen">
        <div
          className="absolute inset-0  bg-cover bg-center bg-no-repeat blur-[1px]"
          style={{
            backgroundImage: `url(${achievementImg})`,
          }}
        ></div>

        <div className="relative z-10 text-center h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-6xl  text-white mb-6 font-extrabold drop-shadow-lg ">
              Our Achievements
            </h1>
          </div>
        </div>
      </div>

      <div className="relative">
        <Timeline />
      </div>
    </div>
  );
};

export default AchievementPage;
