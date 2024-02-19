import React from "react";

const CHICAGOIL = () => {
  return (
    <>
      <div
        id="Speackers"
        className="max-w-[1320px] px-3 mx-auto py-[60px] sm:pt-20 md:pt-32 sm:pb-[100px] md:pb-[166px] "
      >
        <h2 className=" font-Poppins font-black text-[40px] sm:text-[50px] md:text-[60px] text-[#F59330] leading-[60px] sm:leading-[75px] md:leading-90px] text-center">
          MAY 16-18 – CHICAGO, IL
        </h2>
        <p className="font-Poppins font-normal text-base sm:text-2xl md:text-3xl leading-[24px] sm:leading-[35px] md:leading-[45px] text-center pt-6">
          Welcome to php[tek] 2024 where we combine leadership, expertise, and
          networking in one event. A relaxing atmosphere for tech leaders and
          developers to share, learn andgrow professionally while also providing
          you with the knowledge to solve your everyday problems. Join us on the
          journey to be excited about work again!
        </p>
      </div>
      <>
        {" "}
        <div className="bg-[#F59330] lg:rounded-[100px] p-[33px_24px] sm:p-[33px_40px] lg:p-[30px_45px_32px_96px] flex items-center justify-between flex-col lg:flex-row lg:translate-y-[60%] max-w-[1435px] mx-auto ">
          <h3 className=" font-Poppins font-semibold text-2xl lg:text-2xl xl:text-3xl text-white leading-[45px]">
            Conference Attendee
          </h3>
          <div className="flex items-center  flex-col lg:flex-row gap-4 max-sm:w-full">
            <h2 className="text-white font-Poppins font-bold text-[30px]">
              $700
            </h2>
            <button className=" font-Poppins font-normal text-2xl text-black leading-[36px] bg-white  rounded-[78px] py-3 sm:py-[17px] px-8 sm:px-[40px]  ms-5 me-4 hover:bg-[#EE612F] hover:text-white  duration-300 common_btn">
              EXPIRED
            </button>
            <button className=" font-Poppins font-normal text-2xl text-white leading-[36px] bg-black  rounded-[78px] py-3 sm:py-[17px] px-8 sm:px-[55px] max-sm:w-full hover:bg-white hover:text-black duration-300 common_btn2">
              VIEW SCHEDULE
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default CHICAGOIL;
