import React from "react";
import Yusuf_UM_MMC_Bg_Image from '../../images/dye_bg_image.jpg'

const YusifUmMMCBg = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={Yusuf_UM_MMC_Bg_Image} alt="Header bg Image" />
        </div>
        <div className="header__content">
          <h2 className="about_h2">Yusuf UM MMC</h2>
          <p>
            Şirkətimiz 3 ildən çox müddətdirki fəaliyyətə başlayıb. Bu müddət
            ərzində digər ölkələrdən Azərbaycan bazarına keyfiyyətli və münasib
            qiymətli məhsullar gətirməyə nail olmuşuq
          </p>
        </div>
      </div>
    </header>
  );
};

export default YusifUmMMCBg;
