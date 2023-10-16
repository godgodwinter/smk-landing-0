import { Outlet } from "@solidjs/router";
import { Motion } from "@motionone/solid";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import WAFloating from "./WAFloating";

const LandingLayout = () => {
  return (
    <>
      <div>
        <WAFloating />
        <Navbar />
        <Motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, easing: "ease-in-out" }}
        ></Motion.div>
        <div class="flex overflow-hidden pt-24 px-2 bg-base-100">
          <div class="opacity-50 hidden fixed inset-0 z-10" />
          <div class="w-full relative ">
            <main class="pb-4 min-h-screen">
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
