import { Outlet } from "@solidjs/router";
import { Motion } from "@motionone/solid";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const LandingLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, easing: "ease-in-out" }}
        ></Motion.div>
        <main class="pb-4 min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
