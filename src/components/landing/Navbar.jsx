import logo_semkadip from "@/assets/img/smk/logo_semkadip.png";
import logo_ig from "@/assets/img/svg/instagram-icon.svg";
import logo_fb from "@/assets/img/svg/facebook.svg";
import { A } from "@solidjs/router";
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
                    <A href="/">BERANDA</A>
                  </li>
                  <li tabindex="0">
                    <details>
                      <summary>TENTANG KAMI</summary>
                      <ul class="p-2">
                        <li>
                          <A href="/about/profile">Profile Sekolah</A>
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
                  <A href="/home">BERANDA</A>
                </li>
                <li tabindex="0">
                  <details>
                    <summary>TENTANG KAMI</summary>
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
                  <details>
                    <summary>PROGRAM KEAHLIAN</summary>
                    <ul class="p-2">
                      <li>
                        <A href="/pages/jurusan/tjkt">
                          Teknik Jaringan Komputer Telekomunikasi
                        </A>
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
                  <A href="/pages/berita">BERITA</A>
                </li>
                <li>
                  <A href="/pages/contact">HUBUNGI KAMI</A>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
