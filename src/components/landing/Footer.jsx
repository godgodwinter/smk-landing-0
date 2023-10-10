import logo_semkadip from "@/assets/img/smk/logo_semkadip.png";
import ApiNode from "@/axios/axiosNode";
import { A } from "@solidjs/router";
import { createSignal, onCleanup } from "solid-js";

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
                  href={`/pages/visimisi`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  VISI DAN MISI
                </A>
                <A
                  href={`/pages/akreditasi`}
                  class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  AKREDITASI
                </A>
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
