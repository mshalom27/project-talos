import Navbar from "./components/playground/Navbar.jsx";
import { Outlet } from "react-router";

const Playground = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Playground;
