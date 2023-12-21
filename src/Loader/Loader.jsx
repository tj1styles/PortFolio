import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className=" w-[100%] bg-[rgb(31,31,31)] h-[100vh] flex justify-center items-center overflow-hidden">

    {/* <div className="justify-center flex items-center"> */}
      <div className="pl xl:w-[15.2vw] xl:h-[15.2vw]">
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__dot  xl:w-[1.5vw] xl:h-[1.5vw]"></div>
        <div className="pl__text xl:text-[1.2vw] ">Loading…</div>
      </div>
    </div>
    // </div>
  );
};

export default Loader;
