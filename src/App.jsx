import React from "react";
import SponsorsSection from "../src/pages/landing-page/sponsor";
import TeamSlider from "../src/pages/landing-page/Team";
import teamMembers from "../src/config/teammate";
import TeamPage from "../src/pages/landing-page/TeamPage";

function App() {
  return (
    <>
      <SponsorsSection />
      <TeamSlider />
      <TeamPage teamMembers={teamMembers} />
    </>
  );
}

export default App;
