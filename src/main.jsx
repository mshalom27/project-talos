import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Footer from "./components/playground/Footer.jsx";
import Playground from "./Playground.jsx";
import Test from "./components/playground/Test.jsx";
import Home from "./pages/playground/landing-page/Home.jsx";
import Achievements from "./pages/playground/Achievements.jsx";
import AchievementPage from "./pages/playground/AchievementPage.jsx";
import Events from "./pages/playground/landing-page/Events.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="playground" element={<Playground />}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="events" element={<Events />} />
          <Route path="achievement" element={<Achievements />} />
          <Route path="achievementpage" element={<AchievementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
