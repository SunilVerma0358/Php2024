import React from "react";
import { Facebook, Linkdin, Mail, Twitter } from "./common/SvgExport";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="max-w-[1320px] px-3 mx-auto pt-[121px]  pb-[60px]">
      <div className="flex items-center gap-[21px] justify-center">
        <a
          href="https://twitter.com/radialcode?lang=en"
          target="blank"
          className="flex items-center justify-center w-[42px] sm:w-[66px] h-[42px] sm:h-[66px] rounded-[66px] bg-[#797979] group  hover:translate-y-[-10px] duration-300 hover:bg-white "
        >
          {" "}
          <Twitter />
        </a>
        <a
          href="https://www.facebook.com/radialcode/"
          target="blank"
          className="flex items-center justify-center w-[42px] sm:w-[66px] h-[42px] sm:h-[66px] rounded-[66px] bg-[#797979] group  hover:translate-y-[-10px] duration-300  hover:bg-white"
        >
          {" "}
          <Facebook />
        </a>
        <a
          href="#!"
          target="blank"
          className="flex items-center justify-center w-[42px] sm:w-[66px] h-[42px] sm:h-[66px] rounded-[66px] bg-[#797979] group hover:translate-y-[-10px] duration-300  hover:bg-white"
        >
          {" "}
          <Linkdin />
        </a>
        <a
          href="https://www.mail.com/"
          target="blank"
          className="flex items-center justify-center  w-[42px] sm:w-[66px] h-[42px] sm:h-[66px] rounded-[66px] bg-[#797979] group hover:translate-y-[-10px] duration-300 hover:bg-white "
        >
          {" "}
          <Mail />
        </a>
      </div>
      <div className="flex items-center gap-4 sm:gap-8 md:gap-[50px] py-[25px] justify-center flex-col sm:flex-row">
        <a
          href="#!"
          className=" font-Poppins font-bold text-base sm:text-2xl md:text-3xl text-[#F59330] leading-[24px] sm:leading-[45px]"
        >
          Code of Conduct
        </a>
        <a
          href="#!"
          className=" font-Poppins font-bold text-base sm:text-2xl md:text-3xl text-[#F59330] leading-[24px] sm:leading-[45px]"
        >
          Privacy Policy
        </a>
        <a
          href="#!"
          className=" font-Poppins font-bold text-base sm:text-2xl md:text-3xl text-[#F59330] leading-[24px] sm:leading-[45px]"
        >
          Refund Policy
        </a>
      </div>
      <p className=" font-Poppins font-normal text-base sm:text-2xl md:text-3xl text-[#26221D] leading-[21.4px] sm:leading-[45px] text-center pt-5 sm:pt-0">
        © {year} PHP Architect, LLC
      </p>
    </div>
  );
};

export default Footer;
