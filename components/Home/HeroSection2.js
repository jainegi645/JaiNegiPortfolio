import React from "react";
import profilePicJai from "../../styles/assets/profilePicJai.jpg";
import Image from "next/image";
import Svgs from "./Svgs";

const HeroSection2 = () => {
  return (
    <>
    {/* for mobile screen */}
      <div className="md:hidden bg-mobileHerobg px-10 h-[calc(100vh-82px)] pt-20">
        <div className="text-mobileHerobg2">
          <p className="text-5xl  font-bold font-oxygen max-w-xs">
            <span>Full </span>
            <span>Stack </span>
            <span>Developer</span>
            <span className="text-gray-100">.</span>
          </p>
          <p className=" text-lg pt-4 leading-[31.45px] font-normal font-oxygen max-w-sm text-white">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>
          <div className="flex justify-between text-mobileHerobg2 text-xs pt-14">
            <div className="max-w-[50%]">
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </div>
            <div className="max-w-[46%]">
              1.7 years of experience building products for clients across
              several countries.
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-mobileHerobg2 flex justify-center items-center    h-[calc(100vh-210px)]">
        {/* <Svgs/> */}
        <Image
          className=""
          height={240}
          width={240}
          src={profilePicJai}
        />
      </div>
      {/* for desktop screen */}
      <div className="hidden md:block   md:[background:linear-gradient(90deg,_#4831d4_67%,_#ccf381_67%)] pt-[6%] visible  h-[calc(100vh-50px)]">
        <div className=" px-28 flex justify-between items-center pt-9">
          <div className="text-yellow-200">
            <p className="text-6xl font-extrabold font-oxygen text-mobileHerobg2   max-w-sm">
              <span>Full </span>
              <span>Stack </span>
              <span className="">Developer</span>
              <span className="text-gray-100">.</span>
            </p>
            <p className=" text-lg pt-4 leading-[31.45px] font-normal font-oxygen max-w-md text-white">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
          </div>
          <div className="">
            <Svgs />
          </div>
        </div>
        <div className="flex justify-items-start pl-28 space-x-12 text-mobileHerobg2">
          <div className="max-w-[17%]">
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </div>
          <div className="max-w-[17%]">
            1.7 years of experience building products for clients across several
            countries.
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
