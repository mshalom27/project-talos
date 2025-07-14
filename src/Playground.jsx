import { Outlet } from "react-router";
import Footer from "./components/playground/Footer";
const Playground = () => (
  <>
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default Playground;
