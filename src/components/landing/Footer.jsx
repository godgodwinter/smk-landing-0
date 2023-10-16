import logo_semkadip from "@/assets/img/smk/logo_semkadip.png";
import ApiNode from "@/axios/axiosNode";
import { A } from "@solidjs/router";
import { createSignal, onCleanup } from "solid-js";

import logo_ig from "@/assets/img/svg/instagram-icon.svg";
import logo_fb from "@/assets/img/svg/facebook.svg";
import youtubeIcon from "@/assets/img/svg/youtube-icon.svg";
import tiktokIcon from "@/assets/img/svg/tiktok-icon.svg";

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
                <A
                  href={`/home`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  BERANDA
                </A>
                <A
                  href={`/pages/profile`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  PROFILE SEKOLAH
                </A>
                {/* <A
                  href={`/pages/visimisi`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  VISI DAN MISI
                </A> */}
                {/* <A
                  href={`/pages/akreditasi`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  AKREDITASI
                </A> */}
                <A
                  href={`/pages/hubunganindustri`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  HUBUNGAN INDUSTRI
                </A>
                <A
                  href={`/pages/fasilitas`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  FASILITAS
                </A>
                <A
                  href={`/pages/prestasi`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  PRESTASI
                </A>
              </div>
            </div>

            <div>
              <p class="font-semibold text-gray-800 dark:text-white">
                PROGRAM KEAHLIAN
              </p>

              <div class="flex flex-col items-start mt-5 space-y-2">
                <ProgramkeahlianFooter />
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
                href="https://www.facebook.com/profile.php?id=100075930044784"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <img src={logo_fb} alt="" width={25} />
              </a>
              <a
                href="https://www.instagram.com/semkadipbisa"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <img src={logo_ig} alt="" width={25} />
              </a>
              <a
                href="https://www.youtube.com/@SemkadipTV"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <img src={youtubeIcon} alt="" width={25} />
              </a>
              <a
                href="https://www.tiktok.com/@semkadip_bisa?_t=8gX3WbRDFly&_r=1"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook"
              >
                <img src={tiktokIcon} alt="" width={25} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const ProgramkeahlianFooter = () => {
  const [dataRes, setDataRes] = createSignal(null);
  const [loading, setLoading] = createSignal(true);
  const [error, setError] = createSignal(false);
  const fn_get_kelebihan = async () => {
    try {
      setLoading(true);
      const response = await ApiNode.get(`guest/data/programkeahlian`);
      if (response.hasOwnProperty("data")) {
        if (response.data) {
          setDataRes(response.data);
          setLoading(false);
          // console.log(response);
          return response.data;
        }
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setError(true);
        return null;
      }
    } catch (error) {
      // Toast.danger("Error", `Gagal menghubungkan ke Server!`);
      console.error(error);
      return false;
    }
  };
  fn_get_kelebihan();

  // Membersihkan sinyal saat komponen di-unmount (opsional).
  onCleanup(() => {
    setDataRes(null);
    setLoading(false);
    setError(false);
  });

  return (
    <>
      {" "}
      {() => (
        <Switch>
          <Match when={loading()}>
            <div className="space-y-2">
              <span>Loading..</span>
            </div>
          </Match>
          <Match when={error()}>
            <span>Err..</span>
          </Match>
          <Match when={dataRes()}>
            <ProgramkeahlianFooterComponent data={dataRes()} />
          </Match>
          <Match>
            <span>Err..</span>
          </Match>
        </Switch>
      )}
    </>
  );
};

const ProgramkeahlianFooterComponent = (props) => {
  const data = props.data;
  return (
    <>
      {data.map((item, index) => (
        <A
          href={`/pages/programkeahlian/${item.id}`}
          class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          {item.title}
        </A>
      ))}
    </>
  );
};
export default Footer;
