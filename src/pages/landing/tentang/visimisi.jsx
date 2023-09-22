const visimisi = () => {
  return (
    <>
      <VisimisiComponent />
    </>
  );
};

export default visimisi;

const VisimisiComponent = () => {
  return (
    <>
      <main class="pt-8 pb-16 lg:pt-0 lg:pb-24  antialiased ">
        <div class="flex justify-between px-4 mx-auto ">
          <article class="prose mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue ">
            <header class="mb-4 lg:mb-6 not-format">
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                Visi dan Misi
              </h1>
            </header>
            <h2>VISI</h2>
            <p class="lead">
              Meluluskan Siswa yang beriman, Bertaqwa dan Berahlaqul karimah,
              Terampil, Profesional, Mandiri, Berprestasi dan mampu bersaing
              ditingkat Nasional maupun Global
            </p>
            <h2>MISI</h2>
            <ul>
              <li>
                Siswa memiliki aqidah yang kuat, bersih dan berhaluan ahlussunah
                waljama'ah
              </li>
              <li>Siswa Beribadah dengan benar</li>
              <li>Siswa beraklak yang kuat</li>
              <li>
                Siswa memiliki ketrampilan yang sangat memadai sesuai
                ketrampilan kompetensi jurusan
              </li>
              <li>
                Siswa memiliki kemandirian dalam memenuhi kebutuhan diri dan
                identitasnya
              </li>
              <li>Siswa memiliki prestasi dan berkompetensi secara sehat</li>
              <li>Siswa memiliki keinginan lebih baik dan terbaik</li>
              <li>Siswa memilikistandar Nasional maupun Internasional</li>
              <li>
                Sekolah memiliki sarana dan prasarana berstandart Nasional
                maupun Global
              </li>
            </ul>
          </article>
        </div>
      </main>
    </>
  );
};
