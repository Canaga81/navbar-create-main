import React from "react";
import "./style.css";
import Unity_Bg_Image from "../../images/card_consulting.jpg";
import { Link } from "react-router-dom";
import Eh_Trade_Bg_Image from '../../images/Eh_Trade_Bg_Image.jpg';

const UnityBg = () => {
  return (
    <>
      <div className="unity_bg">
        <div className="unity_bg-container">
          <div className="unity_bg-container_left">
            <h1 className="unity_bg-h1">Sizə Ən Yaxsı Məsləhət Lazimdir?</h1>
            <p className="unity_bg_text-p">
              EH Trade, Sena Qrupunun bir tərkib hissəsi olaraq, 3 ildən çoxdur
              ki, Azərbaycan bazarında fəaliyyət göstərən və müxtəlif ölkələrdən
              təchizat təmin edərək keyfiyyətli məhsulları təqdim edən bir
              şirkətdir. Şirkətin fəaliyyət sahələri arasında ticarət, təchizat,
              və pazarlama yer alır. EH Trade, digər ölkələrdən gətirdiyi
              məhsullar vasitəsilə Azərbaycan bazarında geniş bir məhsul
              çeşidini müştərilərinə çatdırmağa nail olur. Şirkət, keyfiyyətli
              məhsulları uyğun qiymətlərlə təqdim edərək müştəri memnuniyyətini
              əsas qoymuşdur. Sena Qrupunun birləşdirici gücündən istifadə edən
              EH Trade, təqdim etdiyi məhsulları və xidmətləri mövcud müştəri
              baza və potensial müştərilər üçün daha geniş və çeşidlidir.
              Şirkət, müştərilərini təchizat və məhsulların seçimində və
              təklifatlardan istifadə etməkdə müstəqil və effektiv şəkildə idarə
              etməklə dəstəkləyir. EH Trade, Sena Qrupunun geniş strategiyasına
              əlavə olaraq, müstəri münasibətlərinin inkişafına və keyfiyyətli
              məhsulların Azərbaycan bazarındakı mövcudluğunun artırılmasına
              nail olmağa çalışır.
            </p>

            <Link to={"/about"}>
              <button className="unity_bg_button">Daha Çox Oxu...</button>
            </Link>
          </div>
          <div className="unity_bg-container_right">
            <div className="unity_bg_image-div">
              <img className="unity_bg_image" src={Eh_Trade_Bg_Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnityBg;
