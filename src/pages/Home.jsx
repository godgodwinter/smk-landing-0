import { Motion } from "@motionone/solid";
import logo_semkadip from "../assets/img/smk/logo_semkadip.png";
import logo_ig from "../assets/img/svg/instagram-icon.svg";
import logo_fb from "../assets/img/svg/facebook.svg";
import img_random_illu from "../assets/img/random/Illustration2.png";
import img_smk_galeri_06 from "../assets/img/smk/galeri/06.jpg";
import img_smk_galeri_05 from "../assets/img/smk/galeri/05.jpg";
import img_smk_galeri_04 from "../assets/img/smk/galeri/04.jpg";
import img_smk_galeri_03 from "../assets/img/smk/galeri/03.jpg";
import img_smk_galeri_02 from "../assets/img/smk/galeri/02.jpg";
import img_smk_galeri_01 from "../assets/img/smk/galeri/01.jpg";
import img_sellsbycountry from "../assets/img/svg/sells-by-country.png";
import img_drop from "../assets/img/svg/drop.svg";
import img_brain from "../assets/img/svg/brain.svg";
import img_timer from "../assets/img/svg/timer.svg";
import img_collaboration from "../assets/img/svg/collaboration.png";

import "flowbite";
import { A } from "@solidjs/router";
import { createEffect, createSignal, onCleanup } from "solid-js";
const HomeIndex = () => {
  return (
    <>
      <Motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1, easing: "ease-in-out" }}
      >
        <Navbar />
      </Motion.div>
      <div>
        <Motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, easing: "ease-in-out" }}
        >
          <MenuSatu />

          <MenuHero />
        </Motion.div>
        <Motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, easing: "ease-in-out" }}
        >
          <MenuDua />
        </Motion.div>
        {/* <MenuStatistik /> */}
        {/* <MenuSambutanKepsek /> */}
        {/* <MenuBerita /> */}
        {/* <MenuAgenda /> */}
        <MenuAlumni />
        {/* <TWStarterKit /> */}
        <Motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, easing: "ease-in-out" }}
        >
          <Footer />
        </Motion.div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div class="navbar bg-base-100 md:px-10">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <A href="/">BERANDA</A>
              </li>
              <li>
                <a>TENTANG KAMI</a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <A href="/" class="flex items-center">
            <img src={logo_semkadip} class="h-8 mr-3" alt="LOGO SEMKADIP">
              {" "}
            </img>
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">
              SEMKADIP
            </span>
          </A>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <A href="/">BERANDA</A>
            </li>
            <li tabindex="0">
              <details>
                <summary>TENTANG KAMI</summary>
                <ul class="p-2">
                  <li>
                    <a>Profile Sekolah</a>
                  </li>
                  <li>
                    <a>Visi dan Misi</a>
                  </li>
                  <li>
                    <a>Akreditasi</a>
                  </li>
                  <li>
                    <a>Hubungan Industri </a>
                  </li>
                  <li>
                    <a>Fasilitas </a>
                  </li>
                  <li>
                    <a>Prestasi </a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabindex="0">
              <details>
                <summary>PROGRAM KEAHLIAN</summary>
                <ul class="p-2">
                  <li>
                    <a>Teknik Jaringan Komputer Telekomunikasi</a>
                  </li>
                  <li>
                    <a>Desain Komunikasi Visual</a>
                  </li>
                  <li>
                    <a>Farmasi</a>
                  </li>
                  <li>
                    <a>Layanan Kesehatan</a>
                  </li>
                  <li>
                    <a>Perhotelan</a>
                  </li>
                  <li>
                    <a>Teknik Otomotif</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>BERITA</a>
            </li>
            <li>
              <a>HUBUNGI KAMI</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <div className="flex justify-between gap-2">
            <a href="#">
              <img src={logo_fb} alt="" width={25} />
            </a>
            <a href="#">
              <img src={logo_ig} alt="" width={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <img
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="apple watch photo"
          /> */
}
const MenuSatu = () => {
  const data = [
    {
      id: 1,
      title: "TENTANG 1",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quiaasperiores alias vero",
      img: img_smk_galeri_02,
      tipe: "default", //default / berita
    },
    {
      id: 2,
      title: "TENTANG 2",
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quiaasperiores alias vero magnam recusandae adipisci ad vitaelaudantium quod rem voluptatem eos accusantium cumque.",
      img: img_smk_galeri_05,
      tipe: "berita", //default / berita
    },
    {
      id: 3,
      title: "TENTANG 3",
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quiaasperiores alias vero magnam recusandae adipisci ad vitaelaudantium quod rem voluptatem eos accusantium cumque.",
      img: img_smk_galeri_04,
      tipe: "berita", //default / berita
    },
    {
      id: 4,
      title: "TENTANG 4",
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quiaasperiores alias vero magnam recusandae adipisci ad vitaelaudantium quod rem voluptatem eos accusantium cumque.",
      img: img_smk_galeri_03,
      tipe: "berita", //default / berita
    },
  ];

  const [dataTampil, setdataTampil] = createSignal(data[0]);
  let currentIndex = 0;

  const handleLoadData = (index) => () => {
    currentIndex = index;
    setdataTampil(data[index]);
  };

  // Fungsi untuk mengubah data secara otomatis setiap 2 detik
  const changeDataAutomatically = (interval) => {
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % data.length;
      setdataTampil(data[currentIndex]);
    }, interval * 2000); // Konversi interval dalam detik ke milidetik

    // Bersihkan interval ketika komponen di-unmount
    onCleanup(() => {
      clearInterval(intervalId);
    });
  };

  // Panggil fungsi untuk mengubah data otomatis setiap 2 detik (bisa diubah sesuai kebutuhan)
  changeDataAutomatically(2); // Ubah interval sesuai kebutuhan
  return (
    <>
      <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            {data.map((_, index) => (
              <button
                class={`w-3 h-3 mx-2 bg-${
                  dataTampil().id === index + 1 ? "blue-500" : "gray-300"
                } rounded-full md:mx-0 focus:outline-none hover:bg-blue-500`}
                onClick={handleLoadData(index)}
              ></button>
            ))}
          </div>

          <div class="max-w-lg md:mx-12 md:order-2">
            <h1 class="text-3xl font-medium tracking-wide text-gray-800 md:text-4xl">
              {dataTampil().title}
            </h1>
            <p class="mt-4 text-gray-600 ">{dataTampil().desc}</p>
            <div class="mt-6">
              <a href="#" class="btn btn-lg btn-info">
                SELENGKAPNYA
              </a>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
          <img
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src={dataTampil().img}
            alt="apple watch photo"
          />
        </div>
      </div>
    </>
  );
};
//PROGRAMKEAHLIAN
const MenuDua = () => {
  return (
    <>
      <section class="bg-white  py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Program Keahlian
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                SMK DIPONEGORO TUMPANG
              </h3>
              <p class="text-gray-600 mb-8">
                memiliki program keahlian yang bisa kalian pilih. program
                keahlian ini saling berkaitan satu sama lain. Sehingga dengan
                dukungan guru-guru kami yang keren nantinya kalian bisa
                mempelajarinya.
                <br />
                <br />
                <button className="btn btn-wide btn-info">Selengkapnya</button>
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6">
              <svg
                class="w-full sm:h-64 mx-auto"
                viewBox="0 0 1177 598.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>travel booking</title>
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M274.63,501l-6.29-3.91c-.6-.37-1.19-.77-1.79-1.15a59.86,59.86,0,0,0,6.05-116.62l.31,24.66-13.55-26.83h-.17a59.87,59.87,0,0,0-62.58,57c-.06,1.15,0,2.27,0,3.4-4.71-5.38-9-11.15-11.83-17.47-5.73-12.79-5.84-27.28-5.39-44.9.9-34.9,2.41-70.08,4.37-105.14a59.85,59.85,0,0,0,53.16-56.64c.08-1.83,0-3.63,0-5.43,0-.45,0-.89-.07-1.34-.12-1.74-.28-3.46-.55-5.16,0-.28-.1-.55-.15-.82-.24-1.44-.54-2.86-.88-4.26-.13-.53-.26-1-.4-1.57-.42-1.53-.88-3-1.42-4.52-.18-.49-.39-1-.58-1.46-.42-1.09-.88-2.17-1.37-3.23-.26-.56-.51-1.12-.78-1.67-.08-.14-.13-.29-.21-.43l0,0a59.84,59.84,0,0,0-70.28-30.36l.4,32.1-13.4-26.52a59.57,59.57,0,0,0-28.55,64.51h-.06c.09.43.22.84.32,1.26.19.79.39,1.57.61,2.35.28,1,.6,2,.93,3,.25.74.49,1.47.77,2.2.41,1.06.87,2.09,1.33,3.12.27.6.51,1.22.8,1.81q1.14,2.33,2.48,4.53c.31.52.66,1,1,1.51.64,1,1.28,2,2,2.93.43.59.89,1.16,1.34,1.73.66.83,1.33,1.65,2,2.44.49.57,1,1.12,1.51,1.66.74.78,1.49,1.53,2.27,2.26.52.49,1,1,1.57,1.46.88.79,1.8,1.53,2.73,2.26.47.37.93.75,1.41,1.11,1.42,1,2.88,2,4.39,3,.28.17.59.31.87.48,1.27.74,2.55,1.45,3.87,2.09.57.28,1.15.53,1.73.79,1.08.48,2.17.95,3.29,1.38l2,.7c1.1.37,2.22.72,3.35,1,.66.18,1.33.37,2,.53,1.22.29,2.47.53,3.73.75l.24.05q-1.23,22.19-2.2,44.39a59.83,59.83,0,0,0-83.07-26l10.58,29-21.77-20.9a59.66,59.66,0,0,0-19.34,41.34A58.5,58.5,0,0,0,52.8,354a59.84,59.84,0,0,0,110.06,16.3c0,1.5-.1,3-.14,4.51-.4,15.54-.9,34.88,6.85,52.15,5.25,11.7,13.69,21.21,22,29.73,5.43,5.54,11.06,10.91,16.83,16.1a60.09,60.09,0,0,0,21.62,18c9.48,7.3,19.3,14.17,29.45,20.51l6.34,3.94c5.7,3.53,11.54,7.16,17.26,10.93-1-.1-2-.21-3-.26a59.89,59.89,0,0,0-58.94,39l37.4,30.43-41.14-9.54a59.89,59.89,0,0,0,85.82,53.92l-2.78,3.45q-2.76,3.43-5.45,6.82c-24.34,30.83-31.11,60.09-19.06,82.4l14.66-7.91c-11.73-21.72,5.91-49.52,17.47-64.16q2.64-3.33,5.36-6.7c15.55-19.32,33.17-41.22,32.74-68.08C345.52,545,306.21,520.6,274.63,501Z"
                  fill="#f2f2f2"
                />
                <ellipse
                  cx="588.5"
                  cy="577.5"
                  rx="588.5"
                  ry="21"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M119.9,721.42c-3-5.51.4-12.27,4.29-17.18s8.61-10,8.51-16.29c-.15-9-9.7-14.31-17.33-19.09a84,84,0,0,1-15.56-12.51A22.8,22.8,0,0,1,95,650c-1.58-3.52-1.54-7.52-1.44-11.37q.51-19.26,1.91-38.49"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="4"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M81,599.39a14,14,0,0,1,7-11.5l3.14,6.22-.1-7.53a14.22,14.22,0,0,1,4.63-.56A14,14,0,1,1,81,599.39Z"
                  fill="#57b894"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M106,694.38a14,14,0,1,0-.68-11.3l8.77,7.13L104.46,688A14,14,0,0,0,106,694.38Z"
                  fill="#57b894"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M113,667.13a14,14,0,0,0,4.45-27.53l.08,5.78-3.18-6.29h0a14,14,0,0,0-14.67,13.36,13.84,13.84,0,0,0,.6,4.79A14,14,0,0,0,113,667.13Z"
                  fill="#57b894"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M78.88,644.46a14,14,0,1,0-6.21-26.27l2.48,6.8-5.1-4.9a14,14,0,0,0-4.53,9.69,13.79,13.79,0,0,0,.35,3.87A14,14,0,0,0,78.88,644.46Z"
                  fill="#57b894"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m82.88 603.13c3.24 0.35 6.39 1.36 9.64 1.56s6.82-0.57 8.88-3.1c1.1-1.36 1.66-3.08 2.59-4.57a10 10 0 0 1 3.54 -3.33 14 14 0 1 1 -26.24 9.31q0.79 0 1.59 0.13z"
                  opacity=".1"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M78.88,644.46a14,14,0,0,0,13.35-20,10.37,10.37,0,0,0-2.82,2.82c-1,1.51-1.61,3.26-2.78,4.64-2.19,2.57-5.92,3.41-9.31,3.26s-6.66-1.12-10-1.43c-.47,0-.94-.07-1.42-.08A14,14,0,0,0,78.88,644.46Z"
                  opacity=".1"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M113,667.13a14,14,0,0,0,13.46-19.76,11.48,11.48,0,0,0-3,2.85c-1.09,1.54-1.77,3.32-3,4.74-2.37,2.63-6.35,3.56-9.93,3.48s-6.83-.93-10.28-1.2A14,14,0,0,0,113,667.13Z"
                  opacity=".1"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M106,694.38a14,14,0,0,0,25.59-11.45,13.84,13.84,0,0,0-3.08,2.75c-1.34,1.62-2.22,3.47-3.76,5-2.87,2.82-7.5,4-11.63,4.09A60,60,0,0,1,106,694.38Z"
                  opacity=".1"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m141.07 715.07s-11.08-0.34-14.42-2.72-17-5.21-17.86-1.4-16.65 19-4.15 19.06 29.06-1.94 32.4-4 4.03-10.94 4.03-10.94z"
                  fill="#656380"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m104.42 728.69c12.51 0.1 29.06-2 32.39-4 2.54-1.55 3.55-7.09 3.89-9.65h0.37s-0.7 8.94-4 11-19.89 4.07-32.4 4c-3.61 0-4.85-1.31-4.78-3.21 0.47 1.17 1.84 1.83 4.53 1.86z"
                  opacity=".2"
                />
                <rect
                  x="171.5"
                  y="111.25"
                  width="834"
                  height="456"
                  rx="20.42"
                  fill="#f2f2f2"
                />
                <path
                  d="m172 133.75h268v434h-247.58a20.42 20.42 0 0 1 -20.42 -20.42v-413.58z"
                  fill="#ff6347"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M1017,282.42V294H183V282.42A20.42,20.42,0,0,1,203.42,262H996.58A20.42,20.42,0,0,1,1017,282.42Z"
                  fill="#3f3d56"
                />
                <circle cx="193" cy="127.75" r="6" fill="#ff6347" />
                <circle cx="208" cy="127.75" r="6" fill="#ff6347" />
                <circle cx="223" cy="127.75" r="6" fill="#ff6347" />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M387.5,490A66.5,66.5,0,1,1,321,423.5,66.47,66.47,0,0,1,387.5,490Z"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M325.38,467.23l8.3,13,35.53,55.59a66.5,66.5,0,0,1-103.32-8.57l43.54-84.94.91,1.43"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M385.31,507a66.46,66.46,0,0,1-16.1,28.82l-35.53-55.59,15.69-24.78a.66.66,0,0,1,1.1,0C353.76,460.32,371,486,385.31,507Z"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M337.5,452.5a15,15,0,0,1-12.12,14.73l-15-23.51a15,15,0,0,1,27.16,8.78Z"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m347.5 481.5"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m333.5 480.5"
                  fill="none"
                  stroke="#f2f2f2"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M563.51,413.13c-.35,0-1.51,0-1.83,0l-6.61.17a.19.19,0,0,1-.17-.09L545,398.42a1.61,1.61,0,0,0-1.37-.75h-2.41c-.57,0-.77.57-.56,1.1l5.09,14.52a.2.2,0,0,1-.18.28l-12.45.18a.81.81,0,0,1-.67-.31l-3.77-4.58a1.59,1.59,0,0,0-1.28-.62h-1.71a.4.4,0,0,0-.38.54l2,7a1.68,1.68,0,0,1,0,1.21l-2,7a.39.39,0,0,0,.38.53h1.7a1.62,1.62,0,0,0,1.28-.62l3.84-4.64a.82.82,0,0,1,.67-.32l12.38.27a.21.21,0,0,1,.18.28L540.65,434c-.21.53,0,1.1.56,1.1h2.41a1.61,1.61,0,0,0,1.37-.76l9.91-14.81a.2.2,0,0,1,.17-.09l6.61.17c.33,0,1.48,0,1.83,0,4.5,0,7.35-1.45,7.35-3.25S568,413.13,563.51,413.13Z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M548.32,532.86a.41.41,0,0,0-.51,0l-15.87,12.7a.42.42,0,0,0-.15.31v23.4a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21V555a.21.21,0,0,1,.21-.2h9.36a.2.2,0,0,1,.2.2v14.24a.21.21,0,0,0,.2.21h11a.21.21,0,0,0,.2-.21v-23.4a.4.4,0,0,0-.15-.31Z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M568.69,543.05l-19.23-15.41a2.23,2.23,0,0,0-1.39-.48,2.26,2.26,0,0,0-1.4.48l-8.37,6.81v-4.29a.2.2,0,0,0-.2-.21H532a.2.2,0,0,0-.2.21v9.38l-4.34,3.57a1.41,1.41,0,0,0-.54,1,1.45,1.45,0,0,0,.41,1.09,1.41,1.41,0,0,0,1,.42,1.47,1.47,0,0,0,.9-.31l18.7-15.06a.22.22,0,0,1,.14,0,.24.24,0,0,1,.13,0l18.71,15a1.44,1.44,0,0,0,2.33-1.19,1.45,1.45,0,0,0-.55-1Z"
                  fill="#3f3d56"
                />
                <rect
                  x="604"
                  y="260.14"
                  width="347"
                  height="11"
                  rx="1.24"
                  fill="#ff6347"
                  opacity=".3"
                />
                <rect
                  x="604"
                  y="392.07"
                  width="347"
                  height="11"
                  rx="1.24"
                  fill="#ff6347"
                  opacity=".3"
                />
                <rect
                  x="878"
                  y="279.75"
                  width="73"
                  height="25"
                  rx="1.24"
                  fill="#ff6347"
                />
                <rect
                  x="878"
                  y="411.75"
                  width="73"
                  height="25"
                  rx="1.24"
                  fill="#ff6347"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m978.18 606.93l-1.73 2s-21.05 2-20.2 5.39 25.35-4.55 25.35-4.55z"
                  fill="#ffc1c7"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z"
                  fill="#ff6584"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m1016.3 605.22s-22.5 8-34.74 4.56l5.69 11.39s29.05-0.86 34.18-6-5.13-9.95-5.13-9.95z"
                  opacity=".1"
                />
                <circle cx="989.6" cy="378.29" r="15.09" fill="#ffc1c7" />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m1014 543.21a11.85 11.85 0 0 0 2 2.71 24.62 24.62 0 0 0 7.28 5.44 246.74 246.74 0 0 1 -25.93 3.86c0.92-3.24-0.29-6.7-1.91-9.64s-3.7-5.69-4.72-8.9l10.2 0.28c1.85 0 3.71 0.1 5.56 0 1.39-0.07 3.69-0.9 5-0.59 2.64 0.63 1.3 4.42 2.52 6.84z"
                  fill="#ffc1c7"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                  fill="#575a89"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M1048.24,614.05l8.54,10.25S1071,657.62,1040,661s-54.11-2.57-54.11-2.57-12.53-6-12.82-1.42-1.42,17.37-8.26,29.9l-6,13.67a8.84,8.84,0,0,0-2.27,7.41c.85,4.27-19.09,5.69-18.8,0,0,0,2.85-4.84,2.85-7.69s4.55-9.68,4.55-9.68l8.26-41s-.57-21.08,18.8-17.09,47-.86,47-.86l6.26-21.92Z"
                  opacity=".1"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m1086.8 648.79v8.55a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-7.12a1 1 0 0 0 -1 -1h-18.82a1 1 0 0 0 -1 1v7.12a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-8.55a1 1 0 0 1 1 -1h22.78a1 1 0 0 1 1.04 1z"
                  fill="#3c354c"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M999.16,721.79a5.79,5.79,0,0,0,5.14,6l134.88,3.33a.41.41,0,0,0,.32-.11h0a.31.31,0,0,0,.11-.2l1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36a1.12,1.12,0,0,0-.25-.28,1,1,0,0,0-.61-.2l-127,1.89a5.8,5.8,0,0,0-5.71,5.53Z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M1135.53,654.27l4,76.78h0l.11-.2,1.79-8.32a6.38,6.38,0,0,0,.13-1.44l-2.88-60.37a5.65,5.65,0,0,0-.84-2.8l-2-3.36A1.12,1.12,0,0,0,1135.53,654.27Z"
                  opacity=".1"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m1016.2 613.3s26.06-9.79 40.58 11c0 0 3.7 32.18-11.11 33.6s-34.17 1.14-38.73-3.7-33.32-18.51-33.32-18.51-14.32-7.3-17.12 2.19-3.1 11.77-3.1 11.77-14.81 10.82-20.79 12.81c0 0-4 5.7-6.26 5.7s-16.23 3.13-14.81-7.41l23.07-21.07 23.06-22.5s6.55-9.68 23.36-4.56a346.13 346.13 0 0 0 33.89 8.26z"
                  fill="#575a89"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M955.68,707.46s5.41,13.67.86,15.38-14.24.57-14.24.57-11.4-1.43-14.24-1.14-14.53-2-12.82-6.55,10.54-3.42,10.54-3.42l8-3.7s.86-2.85,2.85-1.71S944.29,712.3,955.68,707.46Z"
                  fill="#cbceda"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m926.06 667s6 13.38-3.7 12.24-17.09-3.13-19.93-3.41-10.49-2.92-9.3-8.19a4.52 4.52 0 0 0 0.08 -1c0-0.71 1-2.09 8.65-1.88 0 0 5.69 0 8-4-0.03-0.01 8.51 10.81 16.2 6.24z"
                  fill="#cbceda"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m990.71 553.1s20.5-12.81 37.59 0 28.48 71.2 28.48 71.2l-39.59-8.83s-1.7-6.83-4-8-2.57-6-2.57-6-12.24-3.7-11.39-17.94-8.52-30.43-8.52-30.43z"
                  fill="#ff6584"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="m1001.2 553.67h-10.54s-6.27 7.12-7.12 25.06l-3.42 14.27s-7.12 17.09-2.85 19.94 12.54 2.56 14.24-3.13 13.44-38.76 13.44-38.76z"
                  fill="#ff6584"
                />
                <path
                  transform="translate(-11.5 -150.75)"
                  d="M998.23,509.4A15.27,15.27,0,0,1,1014,512c5.47,4.88,6.57,12.85,8,20s4.17,15.21,11,18a28.35,28.35,0,0,1-9.19-.27l10.25,9.19-17.27-5.63c-5.42-1.77-11.11-3.56-16.72-2.56-9.3,1.65-15.78,10.4-24.71,13.47l1-4.85-6,0a11.75,11.75,0,0,0,3.43-4,3.27,3.27,0,0,0-2.29-1.2c-2.5-15.59,6.76-31,18.81-41.17,2.38-2,5-3.92,8.06-4.42s6.64.87,7.71,3.78"
                  fill="#3c354c"
                />
              </svg>
            </div>
          </div>
        </div>

        <section class="relative py-20">
          <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px;"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div class="container mx-auto px-4">
            <div class="items-center flex flex-wrap">
              <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div class="md:pr-12">
                  <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-3xl font-semibold">
                    {" "}
                    TEKNIK JARINGAN KOMPUTER TELEKOMUNIKASI
                  </h3>
                  <p class="mt-4 text-lg leading-relaxed text-gray-600">
                    akan membekali siswa dengan pengetahuan dan keterampilan
                    dalam merancang, mengelola, dan memelihara infrastruktur
                    jaringan komputer yang handal. Siswa akan mempelajari
                    protokol komunikasi, keamanan jaringan, manajemen jaringan,
                    dan teknologi telekomunikasi modern seperti VoIP dan 5G
                  </p>
                  <ul class="list-none mt-6">
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">
                            Protokol komunikasi dan keamanan jaringan
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">
                            Teknologi telekomunikasi modern seperti VoIP dan 5G
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Web Development</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="relative py-20">
          <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px;"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div class="container mx-auto px-4">
            <div class="items-center flex flex-wrap flex-row-reverse">
              <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div class="md:pr-12">
                  <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-3xl font-semibold">
                    {" "}
                    Desain Komunikasi Visual
                  </h3>
                  <p class="mt-4 text-lg leading-relaxed text-gray-600">
                    akan memandu siswa dalam mengembangkan kreativitas mereka
                    dalam bidang desain grafis dan visual.
                  </p>
                  <ul class="list-none mt-6">
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">
                            Belajar untuk merancang komunikasi visual yang
                            efektif melalui penggunaan elemen-elemen seperti
                            warna, tipografi, ilustrasi, dan multimedia
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">
                            Mereka juga akan memahami bagaimana desain dapat
                            memengaruhi pesan dan interaksi dalam berbagai
                            konteks.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Komputer Grafis</h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Fotografi</h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Videografi</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

const MenuBerita = () => {
  return (
    <>
      <section class="bg-white  py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            MENU BERITA
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
      </section>
    </>
  );
};

const MenuAgenda = () => {
  return (
    <>
      <section class="bg-white  py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            MENU AGENDA SEKOLAH
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
      </section>
    </>
  );
};

const MenuAlumni = () => {
  return (
    <>
      <div class="container my-24 mx-auto md:px-6">
        <section class="mb-32 text-center">
          <h2 class="mb-12 pb-4 text-center text-3xl font-bold">ALUMNI</h2>

          <div class="grid gap-6 md:grid-cols-3 xl:gap-x-12">
            <div class="mb-6 lg:mb-0">
              <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      class="w-full"
                    />
                    <a href="#!">
                      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-2 text-lg font-bold">John Doe</h5>
                  <h6 class="mb-4 font-medium text-primary ">Web Developer</h6>
                  <ul class="mb-6 flex justify-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <p>
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-6 lg:mb-0">
              <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/3.jpg"
                      class="w-full"
                    />
                    <a href="#!">
                      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-2 text-lg font-bold">Halley Frank</h5>
                  <h6 class="mb-4 font-medium text-primary ">
                    Marketing Specialist
                  </h6>
                  <ul class="mb-6 flex justify-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium accusamus contestatur voluptatum
                    deleniti atque corrupti.
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-0">
              <div class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div class="flex">
                  <div
                    class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
                      class="w-full"
                    />
                    <a href="#!">
                      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div class="p-6">
                  <h5 class="mb-2 text-lg font-bold">Lisa Trey</h5>
                  <h6 class="mb-4 font-medium text-primary ">
                    Public Relations
                  </h6>
                  <ul class="mb-6 flex justify-center">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 96 960 960"
                        class="w-5 text-warning"
                      >
                        <path
                          fill="currentColor"
                          d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <p>
                    Enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi quis
                    nostrum minima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const MenuSambutanKepsek = () => {
  return (
    <>
      <section class="bg-white  py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            MENU Sambutan
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
        </div>
      </section>
    </>
  );
};

const MenuStatistik = () => {
  const [total, setTotal] = createSignal(0);
  const [tkjt, setTkjt] = createSignal(0);
  const [dkv, setdkv] = createSignal(0);
  const [perhotelan, setperhotelan] = createSignal(0);
  const [farmasi, setfarmasi] = createSignal(0);

  // Tentukan angka akhir yang Anda inginkan
  const targetTotal = 572;
  const targetTkjt = 200;
  const targetperhotelan = 100;
  const targetfarmasi = 80;
  const targetdkv = 140;

  // Tentukan durasi animasi dalam milidetik (misalnya, 5 detik)
  const animationDuration = 5000;

  // Fungsi untuk mengatur animasi penambahan angka
  const animateNumber = (startValue, endValue, duration, setter) => {
    const startTime = Date.now();
    const update = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(1, elapsedTime / duration);
      const animatedValue = Math.round(
        startValue + (endValue - startValue) * progress
      );
      setter(animatedValue);
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  };

  // Mulai animasi ketika komponen di-mount
  createEffect(() => {
    animateNumber(0, targetTotal, animationDuration, setTotal);
    animateNumber(0, targetTkjt, animationDuration, setTkjt);
    animateNumber(0, targetdkv, animationDuration, setdkv);
    animateNumber(0, targetperhotelan, animationDuration, setperhotelan);
    animateNumber(0, targetfarmasi, animationDuration, setfarmasi);
  });

  return (
    <>
      <div className="flex justify-center w-full">
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div class="stat">
            <div class="stat-title"></div>
            <div className="stat-value">{total()}</div>
            <div class="stat-desc">TOTAL SISWA</div>
          </div>

          <div class="stat">
            <div class="stat-title"></div>
            <div className="stat-value">{tkjt()}</div>
            <div class="stat-desc">↗︎ TKJT</div>
          </div>

          <div class="stat">
            <div class="stat-title"></div>
            <div class="stat-value">{dkv()}</div>
            <div class="stat-desc"> DKV</div>
          </div>
          <div class="stat">
            <div class="stat-title"></div>
            <div class="stat-value">{perhotelan()}</div>
            <div class="stat-desc">↘︎PERHOTELAN</div>
          </div>
          <div class="stat">
            <div class="stat-title"></div>
            <div class="stat-value">{farmasi()}</div>
            <div class="stat-desc">FARMASI</div>
          </div>
        </div>
      </div>
    </>
  );
};
const MenuHero = () => {
  const backgroundImage = `url(${img_smk_galeri_06})`;
  return (
    <>
      <main>
        <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 75vh;"
        >
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style={`background-image: ${backgroundImage};`}
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="text-white font-semibold text-5xl">
                    SMK DIPONEGORO TUMPANG
                  </h1>
                  <p class="mt-4 text-lg text-gray-300">Sekolah Sak Ngajine</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px;"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section class="pb-20 bg-gray-300 -mt-24">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                        />
                      </svg>
                    </div>
                    <h6 class="text-xl font-semibold">Fasilitas Lengkap</h6>
                    <p class="mt-2 mb-4 text-gray-600">
                      Penunjang belajar dengan kualitas Terbaik.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                        />
                      </svg>
                    </div>
                    <h6 class="text-xl font-semibold">Lingkungan Nyaman</h6>
                    <p class="mt-2 mb-4 text-gray-600">
                      Berada di lingkungan yang asri, aman, dan kondusif.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                    </div>
                    <h6 class="text-xl font-semibold">Pengajar Kompeten</h6>
                    <p class="mt-2 mb-4 text-gray-600">
                      Guru yang up-to-date dengan perkembangan industri.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <MenuStatistik />

            <div class="flex flex-wrap items-center mt-32">
              <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                    />
                  </svg>
                </div>
                <h3 class="text-3xl mb-2 font-semibold leading-normal">
                  SAMBUTAN KEPALA SEKOLAH
                </h3>
                <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Selamat datang di website SMK Diponegoro Tumpang, tempat di
                  mana kami berupaya untuk memberikan akses mudah kepada seluruh
                  anggota komunitas sekolah kami, baik itu pimpinan, guru,
                  karyawan, siswa, dan juga masyarakat umum, agar dapat
                  mengakses informasi seputar sekolah kami.
                </p>
                <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Website ini adalah wujud dari komitmen kami untuk terus
                  berupaya memberikan pelayanan yang lebih baik. Kami menyadari
                  bahwa masih banyak kekurangan dalam penyajian informasi di
                  situs ini. Oleh karena itu, kami sangat mengharapkan masukan,
                  saran, dan kritik dari seluruh civitas akademika dan
                  masyarakat umum demi perbaikan yang lebih baik.
                </p>
                <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Kami percaya bahwa website ini dapat menjadi saluran interaksi
                  yang positif, membangun hubungan erat di antara semua pihak
                  yang terlibat dalam dunia pendidikan. Mari kita bersama-sama
                  bekerja dan berkarya dengan tekad kuat, dengan harapan agar
                  usaha kita mendapatkan ridho dari Yang Maha Kuasa, demi
                  kemajuan bersama dan masa depan yang lebih baik bagi generasi
                  penerus bangsa. Terima kasih atas kunjungan Anda.
                </p>
                <a href="#" class="font-bold text-gray-800 mt-8">
                  Dr Joko Widodo
                </a>
              </div>
              <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-sky-400">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block"
                      style="height: 95px; top: -94px;"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="text-sky-400 fill-current"
                      ></polygon>
                    </svg>
                    <h4 class="text-xl font-bold text-black">KEPALA SEKOLAH</h4>
                    <p class="text-md font-light mt-2 text-black">
                      SMK DIPONEGORO TUMPANG
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const TWStarterKit = () => {
  return (
    <>
      <main>
        <div
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 75vh;"
        >
          <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
          >
            <span
              id="blackOverlay"
              class="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p class="mt-4 text-lg text-gray-300">
                    This is a simple example of a Landing Page you can build
                    using Tailwind Starter Kit. It features multiple CSS
                    components based on the Tailwindcss design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px;"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section class="pb-20 bg-gray-300 -mt-24">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i class="fas fa-award"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Awarded Agency</h6>
                    <p class="mt-2 mb-4 text-gray-600">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i class="fas fa-retweet"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Free Revisions</h6>
                    <p class="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div class="px-4 py-5 flex-auto">
                    <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i class="fas fa-fingerprint"></i>
                    </div>
                    <h6 class="text-xl font-semibold">Verified Company</h6>
                    <p class="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center mt-32">
              <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i class="fas fa-user-friends text-xl"></i>
                </div>
                <h3 class="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  class="font-bold text-gray-800 mt-8"
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>
              <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                    class="w-full align-middle rounded-t-lg"
                  />
                  <blockquote class="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      class="absolute left-0 w-full block"
                      style="height: 95px; top: -94px;"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        class="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 class="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p class="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="relative py-20">
          <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px;"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div class="container mx-auto px-4">
            <div class="items-center flex flex-wrap">
              <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  class="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                />
              </div>
              <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div class="md:pr-12">
                  <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i class="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 class="text-3xl font-semibold">A growing company</h3>
                  <p class="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul class="list-none mt-6">
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Amazing page examples</h4>
                        </div>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="flex items-center">
                        <div>
                          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i class="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 class="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pt-20 pb-48">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center text-center mb-24">
              <div class="w-full lg:w-6/12 px-4">
                <h2 class="text-4xl font-semibold">Here are our heroes</h2>
                <p class="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="./assets/img/team-1-800x800.jpg"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Ryan Tompson</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button
                        class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>
                      <button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="./assets/img/team-2-800x800.jpg"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Romina Hadid</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i>
                      </button>
                      <button
                        class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="./assets/img/team-3-800x800.jpg"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Alexa Smith</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i>
                      </button>
                      <button
                        class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button
                        class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div class="px-6">
                  <img
                    alt="..."
                    src="./assets/img/team-4-470x470.png"
                    class="shadow-lg rounded-full max-w-full mx-auto"
                    style="max-width: 120px;"
                  />
                  <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">Jenna Kardi</h5>
                    <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div class="mt-6">
                      <button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-dribbble"></i>
                      </button>
                      <button
                        class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-google"></i>
                      </button>
                      <button
                        class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button
                        class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i class="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pb-20 relative block bg-gray-900">
          <div
            class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style="height: 80px;"
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div class="flex flex-wrap text-center justify-center">
              <div class="w-full lg:w-6/12 px-4">
                <h2 class="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap mt-12 justify-center">
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-medal text-xl"></i>
                </div>
                <h6 class="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-poll text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="w-full lg:w-3/12 px-4 text-center">
                <div class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i class="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p class="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="relative block py-24 lg:pt-0 bg-gray-900">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div class="flex-auto p-5 lg:p-10">
                    <h4 class="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div class="relative w-full mb-3 mt-8">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      ></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
              {/* <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe our newsletter to get update.
              </h1>

              <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div> */}
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  BERANDA
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  VISI DAN MISI
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  AKREDITASI
                </a>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                PROGRAM KEAHLIAN
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  TEKNIK KOMUNIKASI DAN JARINGAN
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  DESAIN KOMUNIKASI DAN VISUAL
                </a>
                <a
                  href="#"
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  FARMASI
                </a>
              </div>
            </div>
          </div>

          <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div class="flex items-center justify-between">
            <a href="#">
              <img class="w-auto h-7" src={logo_semkadip} alt="" />
            </a>

            <div class="flex -mx-2">
              <a
                href="#"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default HomeIndex;
