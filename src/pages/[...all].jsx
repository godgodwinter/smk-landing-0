import { A } from "@solidjs/router";

const HomeIndex = () => {
  return (
    <>
      <div>
        <div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
          <div class="block md:max-w-lg">
            <img
              src="https://flowbite-admin-dashboard.vercel.app/images/illustrations/404.svg"
              alt="astronaut image"
            />
          </div>
          <div class="text-center xl:max-w-4xl">
            <h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Page not found
            </h1>
            <p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
              Oops! Looks like you followed a bad link. If you think this is a
              problem with us, please tell us.
            </p>
            <A
              href="/"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Go back home
            </A>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
