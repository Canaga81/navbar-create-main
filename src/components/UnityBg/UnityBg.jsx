import React from "react";
import "./UnityBg.css";
import Unity_Bg_Image from "../../images/card_consulting.jpg";
import { Link } from "react-router-dom";
import Unity_Image_Bg_2 from "../../images/About_1_Image.jpg";

const UnityBg = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__container-bg">
            <img src={Unity_Image_Bg_2} alt="Header bg Image" />
          </div>
          <div className="header__content">
            <h2 className="about_h2">Unity</h2>
            <p>
              Unity Consulting MMC 5 ildən çoxdurki mühasibatlıq,vergi,audit və
              dizaynla məşğuldur. Bir çox sahibkarlara vgömrük rəsmiləşdirilməsi
              xidmətlərində dəstək göstərmişdir.
            </p>
          </div>
        </div>
      </header>
      <div className="unity_bg">
        <div className="unity_bg-container">
          <div className="unity_bg-container_left">
            <h1 className="unity_bg-h1">Sizə Ən Yaxsı Məsləhət Lazimdir?</h1>
            <p className="unity_bg_text-p">
              Unity Consulting MMC, 2015-ci ildən etibarən mühasibat, vergi,
              audit və dizayn sahələrində geniş fəaliyyət göstərən təcrübəli bir
              şirkətdir. Müştərilərinin sahibkarlıq fəaliyyətlərini effektiv
              şəkildə idarə etmələrinə yardım etmək məqsədilə, mühasibatlıq və
              vergi sahəsində müstəqil və səmərəli xidmətlər təklif edir.
              Şirkət, audit proseslərində də geniş bacarığa sahib olaraq,
              müştərilərinin finans məlumatlarını dəqiqləşdirir və şəffaflıq
              təmin edir. Unity Consulting MMC, müxtəlif sahibkarlıq
              təşkilatlarına, gömrük rəsmiləşdirilməsi məsələlərində dəstək
              göstərərək, müştərilərinin beynəlxalq ticarət fəaliyyətlərini
              nailiyyətlə həyata keçirmələrinə kömək edir. Şirkət, güclü və
              müstəqil komandası ilə müştərilərinin tələblərinə uyğun özəl
              çözümlər təklif edir və onların maliyyə məsələlərində rahatlığı
              təmin edir. Unity Consulting MMC, inkişaf etməyə davam edərək,
              sahibkarlıq sahəsində müştərilərinə ən yaxşı və sürətli xidməti
              təqdim etməkdə nailiyyətlərini artırmağa fokuslanmaqdadır.
            </p>

            <Link to={"/about"}>
              <button className="unity_bg_button">Daha Çox Oxu...</button>
            </Link>
          </div>
          <div className="unity_bg-container_right">
            <div className="unity_bg_image-div">
              <img className="unity_bg_image" src={Unity_Bg_Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnityBg;
