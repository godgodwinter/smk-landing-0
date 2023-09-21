import { Routes, Route, A, useRoutes } from "@solidjs/router";
import { lazy } from "solid-js";
import { Toaster } from "solid-toast";
// import { animate } from "motion";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home.jsx")),
  },
  // !404
  {
    path: "/*all",
    component: lazy(() => import("./pages/[...all].jsx")),
  },
];

export default function App() {
  const Routes = useRoutes(routes);
  return (
    <>
      <Toaster position="bottom-right" gutter={8} />
      <div>
        <Routes />
      </div>
    </>
  );
}
