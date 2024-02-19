import React, { useState } from "react";
import Logo from "../assets/image/logo.png";
const PhpNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <>
      <div className="max-w-[1320px] xl:max-w-[1536px] container px-3 mx-auto relative z-[3] pt-3 md:pt-5 xl:pt-[121px] ">
        <nav className="flex justify-between xl:justify-end items-center">
          <a href="#!">
            {" "}
            <img
              className="w-[52px] sm:w-[70px] md:w-[90px] lg:w-[150px] xl:hidden"
              src={Logo}
              alt="lgo"
            />
          </a>
          <div
            className={`${
              first ? "left-0" : " -left-full"
            } flex gap-6 lg:gap-10 max-[1023px]:w-full h-screen lg:h-full absolute  bg-white top-0 items-center justify-center lg:h-unset lg:static lg:left-0  lg:bg-transparent xl:justify-end flex-col lg:flex-row z-[4]  transition-all ease-linear duration-300 `}
          >
            <ul className="flex items-center gap-8 xl:gap-[72px] flex-col lg:flex-row">
              <li>
                <a
                  onClick={setopen}
                  href="#Sehedule"
                  className=" font-Poppins font-normal  text-xl xl:text-2xl leading-[36px] relative after:absolute after:w-0 after:h-[3px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300 "
                >
                  SEHEDULE
                </a>
              </li>
              <li>
                <a
                  href="#Speackers"
                  onClick={setopen}
                  className=" font-Poppins font-normal  text-xl xl:text-2xl leading-[36px] relative after:absolute after:w-0 after:h-[3px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300 "
                >
                  SPEAKERS
                </a>
              </li>
              <li>
                <a
                  href="#Sponsors"
                  onClick={setopen}
                  className=" font-Poppins font-normal  text-xl xl:text-2xl leading-[36px] relative after:absolute after:w-0 after:h-[3px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300 "
                >
                  SPONSORS
                </a>
              </li>
              <li>
                <a
                  href="#Venue"
                  onClick={setopen}
                  className=" font-Poppins font-normal  text-xl xl:text-2xl leading-[36px] relative after:absolute after:w-0 after:h-[3px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300 "
                >
                  VENUE
                </a>
              </li>
            </ul>
            <button className=" font-Poppins font-normal  text-xl xl:text-2xl text-white leading-[36px] bg-[#EE612F] rounded-[30px] py-[15px] px-[63.5px] border-[2px] border-transparent hover:text-black hover:bg-white hover:border-black duration-700 common_btn2 ">
              REGISTER NOW
            </button>{" "}
          </div>
          <div onClick={setopen}>
            {first ? (
              <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
                {" "}
                <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                <span className="bg-black w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[8px]"></span>
              </div>
            ) : (
              <div className=" flex lg:hidden flex-col z-50 justify-between w-[35px] h-[35px] cursor-pointer relative ">
                {" "}
                <span className="bg-white w-full h-[4px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                <span className="bg-white  w-full h-[4px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                <span className="bg-white w-full h-[4px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default PhpNav;
