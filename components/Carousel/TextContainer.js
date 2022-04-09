import React from "react";

const TextContainer = (props) => {
  return (
    <>
      <div className="text-yellow-400  lg:self-center absolute z-10 lg:relative flex-row-reverse self-end border-2 border-sky-500">
        <p className=" text-2xl lg:text-5xl"> {props.Title}</p>
        <p className="text-xs w-56 lg:w-3/4 text-slate-600 lg:text-2xl">
          {props.Description}
        </p>
        <button className="px-10 mt-7 py-2 bg-lime-500 rounded-xl text-white">
          Call Us
        </button>
      </div>
    </>
  );
};

export default TextContainer;
