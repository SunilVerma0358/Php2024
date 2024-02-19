import React from "react";
import Slider from "react-slick";
import AboutSectionImg from "../assets/image/aboutSectionOne.png";
import AboutSectionTwoImg from "../assets/image/aboutSectionlast.png";
import AboutSectionThreeImg from "../assets/image/AboutSectionSecond.png";
import AboutSectionFourImg from "../assets/image/AboutThreeImg.png";
import AboutSectionFiveImg from "../assets/image/aboutSectionFour.png";
import AboutSectionSixImg from "../assets/image/AboutSectionFive.png";
import AboutSectionSmallImg from "../assets/image/blueT-shirtMen.png";
import AboutSectionShirtman from "../assets/image/ShirtMan.png";
import AboutSectionRedTshirt from "../assets/image/RedT-shirtMen.png";
import AboutSectionAboutMen from "../assets/image/AboutMenImg.png";
const About = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          dot: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        id="Venue"
        className="max-w-[1320px] 2xl:max-w-[1536] px-3 mx-auto container pt-11 sm:pt-16 md:pt-24 lg:pt-32"
      >
        <h2 className=" font-Poppins font-black text-[40px] sm:text-5xl md:text-[60px] text-[#F59330] leading-[60px] sm:leading-[75px] md:leading-[90px] text-center">
          ABOUT PHP[TEK]
        </h2>
        <p className=" font-Poppins font-normal text-base sm:text-xl md:text-2xl text-black leading-[21.6px] sm:leading-[45px] pt-6 text-center max-w-[1419px] mx-auto">
          We are the longest-running web developer conference in the United
          States that has a focus on the PHP programming language. The event is
          broken up into multiple days. The main conference happens over the
          course of 3 days (May 16-18) and includes keynotes, talks, and
          networking options. It will be broken into three tracks and will cover
          a range of topics.
        </p>
      </div>
      <div className="pt-[160px] hidden  md:block ">
        <Slider {...settings}>
          <div className="max-w-[380px] h-[620px] object-cover">
            <img
              className="w-full h-full"
              src={AboutSectionImg}
              alt="AboutSection"
            />
          </div>
          <div className="max-w-[380px] h-[620px] ">
            <img
              className="w-full h-[307px]  object-cover"
              src={AboutSectionTwoImg}
              alt="AboutSection"
            />
            <img
              className="w-full h-[307px] pt-[5px]  object-cover  "
              src={AboutSectionFourImg}
              alt="AboutSection"
            />
          </div>
          <div className="max-w-[621px] max-h-[616px]">
            <img
              className="w-full h-[616px]  object-cover"
              src={AboutSectionFiveImg}
              alt="AboutSection"
            />
          </div>
          <div className="max-w-[523px] max-h-[620px]">
            <img
              className="w-full h-[307px]  object-cover"
              src={AboutSectionSixImg}
              alt="AboutSection"
            />
            <img
              className="w-full  object-cover h-[307px] pt-[5px] "
              src={AboutSectionThreeImg}
              alt="AboutSection"
            />
          </div>
          <div className="max-w-[621px] max-h-[616px]">
            <img
              className="w-full h-[616px]  object-cover"
              src={AboutSectionFiveImg}
              alt="AboutSection"
            />
          </div>
        </Slider>
      </div>
      <div className="pt-[80px] md:hidden px-[23px] ">
        <Slider {...settings}>
          <div className="object-cover">
            <img
              className="w-full h-full"
              src={AboutSectionSmallImg}
              alt="AboutSection"
            />
          </div>
          <div className="object-cover">
            <img
              className="w-full h-full"
              src={AboutSectionShirtman}
              alt="AboutSection"
            />
          </div>
          <div className="object-cover">
            <img
              className="w-full h-full"
              src={AboutSectionRedTshirt}
              alt="AboutSection"
            />
          </div>
          <div className="object-cover">
            <img
              className="w-full h-full"
              src={AboutSectionAboutMen}
              alt="AboutSection"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default About;
