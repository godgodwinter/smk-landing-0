const Contact = () => {
  return (
    <>
      <ContactComponent />
    </>
  );
};

export default Contact;

const ContactComponent = () => {
  return (
    <>
      <main class="pt-8 pb-16 lg:pt-0 lg:pb-24  antialiased ">
        <div class="flex justify-between px-4 mx-auto ">
          <article class="prose mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue ">
            <header class="mb-4 lg:mb-6 not-format">
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                Hubungi Kami
              </h1>
            </header>
            <h2> Terhubung dengan SMK Diponegoro Tumpang</h2>
            <p>
              Kami senang Anda tertarik untuk menghubungi kami di SMK Diponegoro
              Tumpang. Kami selalu siap untuk berkomunikasi dengan Anda, baik
              itu untuk pertanyaan umum, informasi pendaftaran, atau hal lain
              yang Anda butuhkan. Komunikasi adalah jembatan yang kuat untuk
              menjalin hubungan dengan semua pihak, termasuk calon siswa, orang
              tua, dan masyarakat umum.
            </p>
            <h3>Bagaimana Kami Dapat Dihubungi</h3>
            <h4>Alamat Kantor:</h4>
            <p className="lead">
              SMK Diponegoro Tumpang Jl. Raya Diponegoro No. XX Tumpang, Malang
              Kode Pos: XXXXX
            </p>
            <h4>Telepon:</h4>
            <p className="lead">(+62) XXX-XXXXXXX</p>
            <h4>Email:</h4>
            <p className="lead">info@smkdiponegorotumpang.sch.id</p>
            <h4>Jam Operasional Kantor:</h4>
            <p className="">
              Senin - Kamis: 08.00 - 16.00 WIB <br />
              Jumat - Sabtu: 08.00 - 14.00 WIB
            </p>
          </article>
        </div>
      </main>
    </>
  );
};
