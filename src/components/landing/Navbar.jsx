import logo_semkadip from "@/assets/img/smk/logo_semkadip.png";
import logo_semkadip_2 from "@/assets/img/smk/logo_semkadip_2.png";
import logo_ig from "@/assets/img/svg/instagram-icon.svg";
import logo_fb from "@/assets/img/svg/facebook.svg";
import youtubeIcon from "@/assets/img/svg/youtube-icon.svg";
import tiktokIcon from "@/assets/img/svg/tiktok-icon.svg";
// import { BsTiktok, BsYoutube } from "solid-icons/bs";

import { A } from "@solidjs/router";
import ApiNode from "@/axios/axiosNode";
import { createSignal, onCleanup } from "solid-js";
const Navbar = () => {
  return (
    <>
      <div class="static">
        <div class="fixed z-50  font-semibold text-sm py-2 text-center px-4 w-full bg-gray-50 ">
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
                    <A href="/home">BERANDA</A>
                  </li>
                  <li tabindex="0">
                    <details>
                      <summary>PROGRAM JURUSAN</summary>
                      <ul class="p-2">
                        <li>
                          <A href="/pages/profile">Profile Sekolah</A>
                        </li>
                        <li>
                          <A href="/pages/visimisi">Visi dan Misi</A>
                        </li>
                        <li>
                          <A href="/pages/akreditasi">Akreditasi</A>
                        </li>
                        <li>
                          <A href="/pages/hubunganindustri">
                            Hubungan Industri{" "}
                          </A>
                        </li>
                        <li>
                          <A href="/pages/fasilitas">Fasilitas </A>
                        </li>
                        <li>
                          <A href="/pages/prestasi">Prestasi </A>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li tabindex="0">
                    <SubmenuProgramkeahlian />
                  </li>
                  {/* <li>
                    <A href="/pages/berita">BERITA</A>
                  </li> */}
                  <li>
                    <A href="/pages/contact">MADIN</A>
                  </li>
                </ul>
              </div>
              <A href="/" class="flex items-center">
                <img src={logo_semkadip} class="h-8 mr-3" alt="LOGO SEMKADIP" />
                <img
                  src={logo_semkadip_2}
                  class="h-8 mr-3"
                  alt="LOGO SEMKADIP"
                />{" "}
                <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                  SEMKADIP
                </span>
              </A>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal px-1">
                <li>
                  <A href="/home">BERANDA</A>
                </li>
                <li tabindex="0">
                  <details>
                    <summary>TENTANG KAMI</summary>
                    <ul class="p-2">
                      <li>
                        <A href="/pages/profile">Profile Sekolah</A>
                      </li>
                      {/* <li>
                        <A href="/pages/visimisi">Visi dan Misi</A>
                      </li> */}
                      <li>
                        <A href="/pages/akreditasi">Akreditasi</A>
                      </li>
                      <li>
                        <A href="/pages/hubunganindustri">Hubungan Industri </A>
                      </li>
                      <li>
                        <A href="/pages/fasilitas">Fasilitas </A>
                      </li>
                      <li>
                        <A href="/pages/prestasi">Prestasi </A>
                      </li>
                    </ul>
                  </details>
                </li>
                <li tabindex="0">
                  <SubmenuProgramkeahlian />
                </li>
                {/* <li>
                  <A href="/pages/berita">BERITA</A>
                </li> */}
                <li>
                  <A href="/pages/contact">MADIN</A>
                </li>
              </ul>
            </div>
            <div class="navbar-end">
              <div className="flex justify-between gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100075930044784"
                  target="_blank"
                >
                  <img src={logo_fb} alt="" width={25} />
                </a>
                <a
                  href="https://www.instagram.com/semkadipbisa"
                  target="_blank"
                >
                  <img src={logo_ig} alt="" width={25} />
                </a>
                <a href="https://www.youtube.com/@SemkadipTV" target="_blank">
                  <img src={youtubeIcon} alt="" width={25} />
                </a>{" "}
                <span className="hidden md:block">
                  {" "}
                  <a
                    href="https://www.tiktok.com/@semkadip_bisa?_t=8gX3WbRDFly&_r=1"
                    target="_blank"
                  >
                    <img src={tiktokIcon} alt="" width={25} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const SubmenuProgramkeahlian = () => {
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
            <SubmenuProgramkeahlianComponent data={dataRes()} />
          </Match>
          <Match>
            <span>Err..</span>
          </Match>
        </Switch>
      )}
    </>
  );
};

const SubmenuProgramkeahlianComponent = (props) => {
  const data = props.data;
  return (
    <details>
      <summary>PROGRAM JURUSAN</summary>
      <ul class="p-2">
        {data.map((item, index) => (
          <li>
            <A href={`/pages/programkeahlian/${item.id}`}>{item.title}</A>
          </li>
        ))}
      </ul>
    </details>
  );
};
