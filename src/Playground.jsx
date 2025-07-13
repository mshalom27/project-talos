import { Outlet } from "react-router";

const Playground = () => {
  <>
    <div className="min-h-screen">
      <Outlet />
    </div>
    <Footer />
  </>;
};

export default Playground;
