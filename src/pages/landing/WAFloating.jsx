import "./WAFloating.css";
import WAIcon from "@/assets/img/svg/whatsapp-icon.svg";

const WAFloating = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=6285259257080&text="
        class="float flex justify-center content-center tooltip"
        data-tip="Hubungi kami"
        target="_blank"
      >
        <img src={WAIcon} alt="" width={25} />
      </a>
    </>
  );
};

export default WAFloating;
