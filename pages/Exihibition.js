import React from "react";
import Image from "next/image";
import FormPopUp from "../components/Exihibition/FormPopUp";
import Navbar from "../components/Navbar/Navbar";


const Exihibition = () => {
  return (
    <div>
      <Navbar />
      <div className=" md:flex md:justify-between px-5 py-16 items-center">
        <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 dark:text-gray-100">
          Exihibition
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed
          non alias, fugiat
        </p>
      </div>

      <FormPopUp />
     
    </div>
  );
};

export default Exihibition;
