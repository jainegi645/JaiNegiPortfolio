import React from "react";

const TextContainer = (props) => {
  return (
    <>
      <div className=" lg:self-center pl-5 lg:pl-7 pb-5 absolute z-10 lg:relative ">
        <p className=" text-5xl lg:text-8xl text-slate-700 font-normal ">
          {" "}
          {props.Title}
        </p>
        <p className="text-lg md:w-56 w-80 lg:w-3/4 lg:text-gray-500 text-gray-400 lg:text-4xl lg:pt-2 leading-9 font-normal lg:font-extralight">
          {props.Description}
        </p>
        <button className="px-11 mt-10 py-3 bg-heroButton rounded-xl text-white">
          <a href="tel:9680099627">Call Us </a>
        </button>
      </div>
    </>
  );
};

export default TextContainer;
