import React from "react";
import "./YusufMMCCards.css";

//! Icons
import { FaPaintBrush } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa6";
import { PiPaintBrushBroadBold } from "react-icons/pi";
import { GiPaintBucket } from "react-icons/gi";
import { PiPaintBrushHousehold } from "react-icons/pi";
import { FaEraser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { MdArrowRightAlt } from "react-icons/md";

const YusufMMCCards = () => {
  return (
    <div className="yusuf_mmc_section">
      <div className="yusuf_card_container">
        <div className="card_cont">
          <div className="card-top">
            <FaPaintBrush />
          </div>
          <div className="card-bottom">
            <h2 className="boya_h2">Su əsaslı boyalar</h2>
            <Link className="text_arror_boya" to={"/suesasliboyalar"}>
              <p className="text_boya-p">Daha Ətraflı</p>
              <MdArrowRightAlt className="boya_icon-a" />
            </Link>
          </div>
        </div>

        <div className="card_cont">
          <div className="card-top">
            <FaPaintRoller className="boya_icon-a" />
          </div>
          <div className="card-bottom">
            <h2 className="boya_h2">Sellozik boyalar</h2>
            <Link className="text_arror_boya" to={"/sellozikboyalar"}>
              <p className="text_boya-p">Daha Ətraflı</p>
              <MdArrowRightAlt className="boya_icon-a" />
            </Link>
          </div>
        </div>

        <div className="card_cont">
          <div className="card-top">
            <PiPaintBrushBroadBold />
          </div>
          <div className="card-bottom">
            <h2 className="boya_h2">Hammenton boyalar</h2>
            <Link className="text_arror_boya" to={"/hammentonboyalar"}>
              <p className="text_boya-p">Daha Ətraflı</p>
              <MdArrowRightAlt className="boya_icon-a" />
            </Link>
          </div>
        </div>

        <div className="card_cont">
          <div className="card-top">
            <GiPaintBucket />
          </div>
          <div className="card-bottom">
            <h2 className="boya_h2">Sintetik boyalar</h2>
            <Link
              className="text_arror_boya transition-all duration-500"
              to={"/sintetikboyalar"}
            >
              <p className="text_boya-p">Daha Ətraflı</p>
              <MdArrowRightAlt className="boya_icon-a" />
            </Link>
          </div>
        </div>

        <div className="card_cont">
          <div className="card-top">
            <PiPaintBrushHousehold />
          </div>
          <div className="card-bottom">
            <h2 className="boya_h2">Sənaye boyaları</h2>
            <Link className="text_arror_boya" to={"/sənayeboyalari"}>
              <p className="text_boya-p">Daha Ətraflı</p>
              <MdArrowRightAlt className="boya_icon-a" />
            </Link>
          </div>
        </div>

        <div className="card_cont">
          <div className="card-top">
            <FaEraser />
          </div>
          <div className="card-bottom">
            <h2 className="boya_h2">Sellozik və Sintetik tiner</h2>
            <Link className="text_arror_boya" to={"/sellozikvesintetiktiner"}>
              <p className="text_boya-p">Daha Ətraflı</p>
              <MdArrowRightAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YusufMMCCards;
