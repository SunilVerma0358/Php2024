import React from "react";
import PhpNav from "./PhpNav";
import Logo from "../assets/image/logo.png";
import HeroTopLeftEllipse from "../assets/image/HeroTopLeftEllpise.png";
import HeroBottomLeftEllipse from "../assets/image/HeroBottomLeft.png";
import HeroTopRightEllipse from "../assets/image/heroTopRight.png";
import HeroRightBottomEllipse from "../assets/image/heroBottomEllpise.png";
import HeroMainImg from "../assets/image/HeroMainImg.png";
const HeroSection = () => {
  return (
    <div className="relative z-[4] overflow-x-clip">
      <>
        <PhpNav />
      </>
      <div
        id="Sehedule"
        className="max-w-[1320px] xl:max-w-[1614px] mx-auto px-6 sm:px-3 container  pt-12 pb-12"
      >
        <div className="relative cursor-pointer">
          <img
            className="w-full rounded-[10px] lg:rounded-[106px] min-h-[521px] object-cover "
            src={HeroMainImg}
            alt="Hero"
          />

          <a href="#!">
            <img
              className=" hidden xl:block max-w-[150px] xl:max-w-[250px] 2xl:max-w-[301px] absolute top-[-23%] left-0 z-10"
              src={Logo}
              alt="lgo"
            />
          </a>
          <div className="absolute top-0 right-0 bottom-0 h-full w-full rounded-[10px] lg:rounded-[106px] bg-[#0000007c] flex justify-center items-center">
            <h1 className=" font-Poppins font-black text-5xl sm:text-[60px] md:text-[90px] text-white leading-[72px] sm:leading-[100px] lg:leading-[135px] text-center">
              PHP[TEK] 2024
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-[281px] lg:w-[450px] 2xl:w-[580px] absolute top-0 max-[500px]:left-[-34%] left-[-5%] md:left-0">
        <img
          className="w-full"
          src={HeroTopLeftEllipse}
          alt="HeroTopLeftEllipse"
        />
      </div>
      <div className="w-[370px] lg:w-[500px] xl:w-[800px] 2xl:w-[1100px] absolute bottom-0 left-[-50%] sm:left-[-20%] md:left-0">
        <img
          className="w-full"
          src={HeroBottomLeftEllipse}
          alt="HeroBottomLeftEllipse"
        />
      </div>
      <div className="w-[260px] lg:w-[650px] 2xl:w-[610px] absolute top-0 max-[500px]:right-[-31%] right-[-15%] md:right-[-10%] lg:right-[-13%] 2xl:right-0 ">
        <img
          className="w-full"
          src={HeroTopRightEllipse}
          alt="HeroTopRightEllipse"
        />
      </div>
      <div className="w-[370px] lg:w-[450px] 2xl:w-[806px] absolute bottom-0 right-[-40%] md:right-0 z-[-1]">
        <img
          className="w-full"
          src={HeroRightBottomEllipse}
          alt="HeroTopRightEllipse"
        />
      </div>
    </div>
  );
};

export default HeroSection;
