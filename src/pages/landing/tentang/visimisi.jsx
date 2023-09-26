import ApiNode from "@/axios/axiosNode";
import { createSignal, onCleanup } from "solid-js";
const visimisi = () => {
  return (
    <>
      <VisimisiComponent />
    </>
  );
};

export default visimisi;
const VisimisiComponent = () => {
  const [dataRes, setDataRes] = createSignal(null);
  const [loading, setLoading] = createSignal(true);
  const [error, setError] = createSignal(false);
  const get_Visimisi = async () => {
    try {
      setLoading(true);
      const response = await ApiNode.get(`guest/data/visimisi`);
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
  get_Visimisi();

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
              {/* Tampilkan komponen loading */}
              <LoadingComponent />
              <SkeletonPaket />
            </div>
          </Match>
          <Match when={error()}>
            {/* Tampilkan pesan error jika terjadi kesalahan */}
            <FailedComponent message="Gagal mendapatkan data!" />
          </Match>
          <Match when={dataRes()}>
            {/* Tampilkan komponen PaketCard1 jika dataRes ada dan memiliki data */}
            <VisiMisiContent data={dataRes()} />
          </Match>
          <Match>
            {/* Tampilkan pesan error jika dataRes tidak ada atau kosong */}
            <FailedComponent message={`Paket Tidak Tersedia`} />
          </Match>
        </Switch>
      )}
    </>
  );
};

const VisiMisiContent = (props) => {
  const data = props.data;
  return (
    <>
      <main class="pt-8 pb-16 lg:pt-0 lg:pb-24  antialiased ">
        <div class="flex justify-between px-4 mx-auto ">
          <article class="prose mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue ">
            <header class="mb-4 lg:mb-6 not-format">
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                {data.title}
              </h1>
            </header>
            <div innerHTML={data.content}></div>
          </article>
        </div>
      </main>
    </>
  );
};

const SkeletonPaket = () => {
  return (
    <>
      <div
        role="status"
        class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </>
  );
};

const LoadingComponent = () => {
  return (
    <>
      <button
        disabled
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          role="status"
          class="inline w-4 h-4 mr-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
    </>
  );
};

const FailedComponent = (props) => {
  const message = props.message;
  return (
    <>
      <div
        class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 "
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Error!</span> {message}
        </div>
      </div>
    </>
  );
};
