import React, { useEffect, useState } from "react";
import InstagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="main">
      <div className="main__content">
        <div className="punk__highlight">
          <div className="punk__container">
            <img
              className="selected__punk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="punk__details" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="item__number">•#{activePunk.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="owner__details">
              <div className="ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="owner__handle">@momocoly</div>
              </div>
              <div className="owner__link">
                <img src={InstagramLogo} alt="" />
              </div>
              <div className="owner__link">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="owner__link">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
