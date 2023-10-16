import "./WAFloating.css";
import WAIcon from "@/assets/img/svg/whatsapp-icon.svg";

const WAFloating = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
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
