import React from "react";
import "./Sponser.css";
import equity from "../../../assets/sponsor/equity_dark.png";
import ims from "../../../assets/sponsor/ims.png";
import tea_post from "../../../assets/sponsor/tea_post.png";

const Sponser = () => {
  return (
    <>
      <div className="spons-main">
        <i class="fa-light fa-left-long"></i>
        <div className="spons-second">
          <h1>Sponsors</h1>
        </div>

        <p>Title Sponsored By </p>
        <div className="spnsr_main">
          <img src={equity} alt="title_sponsor" />
        </div>

        <p>Co-Sponsored By </p>
        <div className="co_spnsr">
          <img src={ims} alt="ims_co-sponsor" />
          <img src={tea_post} alt="tea_co-sponsor" />
        </div>
      </div>
    </>
  );
};

export default Sponser;
