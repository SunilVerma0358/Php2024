import React from "react";
import SponsorSecond from "../assets/image/SponsorSecond.png";
import SponsorMainImg from "../assets/image/SponsorMainImg.png";
const Sponsar = () => {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      <div className="flex lg:flex-row flex-wrap flex-col relative sm:pt-7 ">
        <div className="w-full lg:w-4/12 min-h-[350px] text-center">
          <div className="w-full lg:w-1/2 absolute top-[10%] sm:top-[5%] md:left-0 lg:left-[-5%] xl:left-0   2xl:h-[450px]">
            <img
              className=" max-w-[600px] sm:max-w-[800px] md:max-w-full min-h-[380px] sm:min-h-[450px] relative "
              src={SponsorSecond}
              alt="sponsorSecond"
            />
            <div className="absolute top-0 right-0 bottom-0 h-full w-full rounded-[106px] flex justify-center items-center flex-col">
              <p className=" font-Poppins font-black text-xl xl:text-3xl 2xl:text-[36px] text-white leading-[30px] sm:leading-[40px] md:leading-[54px] text-center px-1 max-w-[300px] xl:max-w-full mx-auto">
                Interested in becoming a sponsor and getting exposure to our
                audience?
              </p>
              <button className=" font-Poppins font-normal text-xl md:text-2xl text-white leading-[36px] bg-black rounded-[78px] py-3 sm:py-[17px] px-8 sm:px-[55px] max-sm:w-full max-w-[360px] mt-8">
                SPONSOR THE EVENT
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12  pt-11 lg:pt-0">
          <div>
            <img
              className="w-full min-h-[451px] object-cover"
              src={SponsorMainImg}
              alt="sponsorSecond"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsar;
