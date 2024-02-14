import React from "react";
import cottos from "../assets/icon/cottes.svg";
const SmartObject = () => {
  return (
    <div className="bg-[url(../src/assets/image/SmartObject.png)] bg-cover bg-no-repeat ">
      <div className="max-w-[1320px] px-3 mx-auto pt-20 sm:pt-26 md:pt-28 lg:pt-[167px] pb-20 lg:pb-28">
        <div className="sm:border-[3px] sm:border-white rounded-[100px]  pt-[58px] relative z-20">
          <p className="text-white font-Poppins font-black text-xl sm:text-3xl md:text-[39px] leading-[30px] sm:leading-[58.5px] text-center max-w-[1109px] mx-auto">
            This was my first introduction to php[architect]’s conferences, and
            they’ve quickly become my favorites. A great balance of fun and
            education, structured and social. The organizers obviously care
            about the conference and the enjoyment of everyone who attends, and
            I can’t wait for the next one!{" "}
          </p>
          <div className="flex justify-center items-center">
            <a
              href="#!"
              className="text-white font-Poppins font-bold text-lg sm:text-2xl md:text-[36px] leading-[21.6px] sm:leading-[54px] text-center pt-6 "
            >
              ― Previous Attendee
            </a>
          </div>
          <div className=" absolute top-[-5%] left-[40%] sm:left-[47%] z-10">
            <img className="w-full" src={cottos} alt="cottes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartObject;
