import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Playground from "./Playground.jsx";
import Test from "./components/playground/Test.jsx";
import Home from "./pages/playground/landing-page/Home.jsx";
import Events from "./pages/playground/landing-page/Events.jsx";
import MainLayout from "./components/shared/MainLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />}></Route>
          <Route path="events" element={<Events />} />
            <Route path="playground" element={<Playground />}>
                <Route index element={<Home />} />
                <Route path="test" element={<Test />} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
