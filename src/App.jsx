import { Routes, Route, A, useRoutes } from "@solidjs/router";
import { lazy } from "solid-js";
import { Toaster } from "solid-toast";
// import { animate } from "motion";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/landing/LandingLayoutBeranda.jsx")),
    children: [
      {
        path: "/",
        component: lazy(() => import("./pages/landing/Beranda.jsx")),
      },
      {
        path: "/home",
        component: lazy(() => import("./pages/landing/Beranda.jsx")),
      },
    ],
  },
  {
    path: "/pages",
    component: lazy(() => import("./pages/landing/LandingLayout.jsx")),
    children: [
      {
        path: "/profile",
        component: lazy(() => import("./pages/landing/tentang/Profile.jsx")),
      },
      {
        path: "/visimisi",
        component: lazy(() => import("./pages/landing/tentang/visimisi.jsx")),
      },
      {
        path: "/akreditasi",
        component: lazy(() => import("./pages/landing/tentang/akreditasi.jsx")),
      },
      {
        path: "/hubunganindustri",
        component: lazy(() =>
          import("./pages/landing/tentang/hubunganindustri.jsx")
        ),
      },
      {
        path: "/fasilitas",
        component: lazy(() => import("./pages/landing/tentang/fasilitas.jsx")),
      },
      {
        path: "/prestasi",
        component: lazy(() => import("./pages/landing/tentang/prestasi.jsx")),
      },
      {
        path: "/programkeahlian/:id",
        component: lazy(() =>
          import("./pages/landing/tentang/programkeahlian.jsx")
        ),
      },
      // !jurusan
      {
        path: "/jurusan",
        component: lazy(() => import("./pages/landing/tentang/visimisi.jsx")),
      },
      // !jurusan-end

      // !jurusan
      {
        path: "/berita",
        component: lazy(() => import("./pages/landing/LandingBerita.jsx")),
      },
      // !jurusan-end

      {
        path: "/contact",
        component: lazy(() => import("./pages/landing/LandingContact.jsx")),
      },
    ],
  },
  // {
  //   path: "/",
  //   component: lazy(() => import("./pages/Home.jsx")),
  // },
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
