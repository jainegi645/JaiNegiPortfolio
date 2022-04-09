import React from "react";

const CatalougeImage = (props) => {
  return (
      <>
    <div className="w-auto pt-12 relative hover:opacity-80 ">
      <div class="opacity-0 text-center hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl px-6 text-black font-semibold">
        {props.Title}
      </div>

      <img className="bg-cover " src={props.src} />
      </div>



      </>
  );
};

export default CatalougeImage;
