import React from "react";
import Slider from "react-slick";
import AboutSectionImg from "../assets/image/aboutSectionOne.png";
import AboutSectionTwoImg from "../assets/image/aboutSectionlast.png";
import AboutSectionThreeImg from "../assets/image/AboutSectionSecond.png";
import AboutSectionFourImg from "../assets/image/AboutThreeImg.png";
import AboutSectionFiveImg from "../assets/image/aboutSectionFour.png";
import AboutSectionSixImg from "../assets/image/AboutSectionFive.png";
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // pauseOnHover: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-[1320px] 2xl:max-w-[1536] px-3 mx-auto container pt-11 sm:pt-16 md:pt-24 lg:pt-32">
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
      <div className=" hidden md:block pt-[160px] ">
        <Slider {...settings}>
          <div className="max-w-[380px] h-[620px]">
            <img src={AboutSectionImg} alt="AboutSection" />
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
              className="max-w-[523px]  object-cover h-[307px] pt-[5px] "
              src={AboutSectionThreeImg}
              alt="AboutSection"
            />
          </div>
        </Slider>
      </div>
      <div className=" pt-[160px] md:hidden ">
        <Slider {...settings}>
          <div className="max-w-[380px] h-[620px] object-cover">
            <img src={AboutSectionImg} alt="AboutSection" />
          </div>
          <div className="max-w-[380px] h-[620px] px-3 ">
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
          <div className="max-w-[621px] max-h-[616px] px-3">
            <img
              className="w-full h-[616px]  object-cover"
              src={AboutSectionFiveImg}
              alt="AboutSection"
            />
          </div>
          <div className="max-w-[523px] max-h-[620px] px-3">
            <img
              className="w-full h-[307px]  object-cover"
              src={AboutSectionSixImg}
              alt="AboutSection"
            />
            <img
              className="max-w-[523px]  object-cover h-[307px] pt-[5px] "
              src={AboutSectionThreeImg}
              alt="AboutSection"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default About;
