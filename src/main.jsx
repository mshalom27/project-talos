import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Playground from "./Playground.jsx";
import Test from "./components/playground/Test.jsx";
import Home from "./pages/playground/landing-page/Home.jsx";
import GalarySection from "./components/playground/GalarySection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="playground" element={<Playground />}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="galary" element={<GalarySection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
