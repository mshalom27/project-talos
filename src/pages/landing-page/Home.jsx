import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import MissionSection from "../../components/MissionSection";
import SponsorsSection from "../../components/Sponsor";
import Achievements from "../../components/Achievements";
import TeamSlider from "../../components/Team";
import GalarySection from "../../components/GallerySection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <SponsorsSection />
        <Achievements />
        <TeamSlider />
        <GalarySection />
      </main>
    </div>
  );
};

export default Home;
