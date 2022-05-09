import React from "react";
import Image from "next/image";

const aboutright = (props) => {
  return (
    <>
      <div className="items-center lg:flex justify-evenly">

      <div className="lg:w-1/2">
          <h2 className="lg:text-7xl text-5xl font-normal lg:font-normal text-slate-700  ">
            {props.title}
          </h2>

          <p className="mt-4 text-gray-500  lg:max-w-md text-xl">
            {props.description}
          </p>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="flex items-center  ">
            <div className="max-w-lg">
              <Image
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src={props.src}
                alt="image"
                height={650}
                width={500}
              />
            </div>
          </div>
        </div>

      

      </div>
    </>
  );
};

export default aboutright;
