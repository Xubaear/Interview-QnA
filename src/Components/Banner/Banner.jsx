import React from "react";
import "./banner.css";


const Banner = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] "> 
      <button className="banner-btn -mt-20">
        <span className="rubik-dirt-regular text-3xl font-bold uppercase tracking-widest relative z-10">
          BackPack
        </span>
        <div id="clip">
          <div id="leftTop" className="corner"></div>
          <div id="rightBottom" className="corner"></div>
          <div id="rightTop" className="corner"></div>
          <div id="leftBottom" className="corner"></div>
        </div>
        <span id="rightArrow" className="arrow"></span>
        <span id="leftArrow" className="arrow"></span>
      </button>


      
    </div>
  );
};

export default Banner;