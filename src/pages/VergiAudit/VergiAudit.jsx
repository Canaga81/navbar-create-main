import React from "react";
import "./VergiAudit.css";
import Vergi_Image from '../../images/Vergi_Image.jpg'

const VergiAudit = () => {
  return (
    <div className="maliyeMuhContainer">
      <div className="maliyeMuhaConImgText">
        <div className="maliyeMuhaConImg">
          <img className="maliyeMuhaConImage" src={Vergi_Image} alt="" />
        </div>
        <div className="maliyeMuhaTextCon">
          <div className="maliyeMuhaTextCon_Top">
            <p className="maliyeMuhaTextCon_Top-p_bold">
              Mailiyyə və mühasibat, bir şirkətin effektiv idarəetməsində və
              uğurlu nailiyyətlərdə əhəmiyyətli bir rol oynayan bölmələrdən
              biridir.
            </p>
            <p className="maliyeMuhaTextCon_Top-p">
              Mailiyyə mühasibatlığı, bir şirkətin maliyyə və əmanət
              proseslərini idarə etmək, tənzimləmək və nəzarət etmək üçün
              məsuliyyət daşıyan təşkilat hissəsidir. Bu bölmə, maliyyə
              hesabatları, bütçələmə, əmanətlər, ödənişlər, qazanc və zərər
              hesabatları kimi müxtəlif sahələrdə fəaliyyət göstərir.
            </p>
          </div>
          <div className="maliyeMuhaTextCon_Bottom">
            <h3 className="maliyeMuhaTextCon_Bottom-h3">
              Mailiyyə mühasibatlığının əsas məqsədləri bunlardır:
            </h3>
            <div className="maliyeMuhaTextCon_Bottom-ul">
              <div className="maliyeMuhaTextCon_Bottom-li">
                <span>Maliyyə Hesabatları </span> -{" "}
                <p>
                  {" "}
                  Şirkətin maliyyə vəziyyəti ilə bağlı ətraflı və dəqiqlik
                  hesabatlar hazırlamaq.
                </p>
              </div>

              <div className="maliyeMuhaTextCon_Bottom-li">
                <span>Bütçələmə </span> -{" "}
                <p>
                  {" "}
                  Gəlirlər və xərclər arasında dəqiqlik təyin etmək və
                  bütçələrin hazırlanması, təhlili və izlənməsinə kömək etmək.
                </p>
              </div>
              <div className="maliyeMuhaTextCon_Bottom-li">
                <span>Əmanətlər </span> -{" "}
                <p>
                  {" "}
                  Şirkətin varlıqları və özəllikləri üzrə müəyyən etmələr
                  aparmaq, əmanətlərin idarə olunmasına kömək etmək.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VergiAudit;
