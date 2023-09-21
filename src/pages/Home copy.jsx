import { Motion } from "@motionone/solid";
import logo_semkadip from "../assets/img/smk/logo_semkadip.png";
import logo_ig from "../assets/img/svg/instagram-icon.svg";
import logo_fb from "../assets/img/svg/facebook.svg";
import img_random_illu from "../assets/img/random/Illustration2.png";
import img_smk_galeri_06 from "../assets/img/smk/galeri/06.jpg";

import "flowbite";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
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
        </Motion.div>
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

// const MenuSatu = () => {
//   return (
//     <>
//       <div class="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5 md:px-10">
//         <div class="flex flex-col justify-start col-span-1 text-center lg:text-start">
//           <div class="flex items-center justify-center mb-4 lg:justify-normal">
//             <img
//               class="h-5"
//               src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-1.png"
//               alt="logo"
//             />
//             {/* <h4 class="ml-2 text-sm font-bold tracking-widest text-primary uppercase">
//               Explore the Latest Tailwind Template
//             </h4> */}
//           </div>
//           <h1 class="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900 md:pt-20">
//             SMK DIPONEGORO TUMPANG
//           </h1>
//           <p class="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
//             Sekolah sak ngajine
//           </p>
//           <div class="flex flex-col items-center gap-4 lg:flex-row">
//             <button class="btn btn-lg btn-outline">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 class="w-5 h-5 mr-2"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//               Gabung Sekarang
//             </button>
//           </div>
//         </div>
//         <div class="items-center justify-end hidden col-span-1 md:flex">
//           <img
//             src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/header-1.png"
//             class="sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-2xl"
//           />
//           {/* <img
//             class="w-4/5 rounded-md"
//             src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/header-1.png"
//             alt="header image"
//             width={100}
//           /> */}
//         </div>
//       </div>
//     </>
//   );
// };

{
  /* <img
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="apple watch photo"
          /> */
}
const MenuSatu = () => {
  const [dataIndex, setDataIndex] = createSignal(0);
  // create signal untuk data tampil
  const data = [
    {
      title: "SMK DIPONEGORO TUMPANG",
      desc: "desc1",
      img: img_smk_galeri_06,
      tipe: "default", //default / berita
    },
    {
      title: "2",
      desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quiaasperiores alias vero magnam recusandae adipisci ad vitaelaudantium quod rem voluptatem eos accusantium cumque.",
      img: img_smk_galeri_05,
      tipe: "berita", //default / berita
    },
  ];
  const handleLoadData = (index) => () => {
    setDataIndex(index());
  };
  return (
    <>
      <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
            <button
              class="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"
              onClick={handleLoadData(0)}
            ></button>
            <button
              class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"
              onClick={handleLoadData(1)}
            ></button>
            <button
              class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"
              onClick={handleLoadData(2)}
            ></button>
            <button
              class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"
              onClick={handleLoadData(3)}
            ></button>
          </div>

          <div class="max-w-lg md:mx-12 md:order-2">
            <h1 class="text-3xl font-medium tracking-wide text-gray-800 md:text-4xl">
              SMK DIPONEGORO TUMPANG
              {/* {title} */}
            </h1>
            <p class="mt-4 text-gray-600 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
              asperiores alias vero magnam recusandae adipisci ad vitae
              laudantium quod rem voluptatem eos accusantium cumque.
              {/* {desc} */}
            </p>
            <div class="mt-6">
              <a href="#" class="btn btn-lg btn-info">
                GABUNG SEKARANG
              </a>
              {/* tipe */}
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
          <img
            class="object-cover w-full h-full max-w-2xl rounded-md"
            src={imgTampil}
            alt="apple watch photo"
          />
        </div>
      </div>
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
