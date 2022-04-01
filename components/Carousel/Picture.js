import React from "react";
import Image from "next/image";
import TextContainer from "./TextContainer";

const Picture = (props) => {
  return (
    <div className="w-auto pt-12 ">
      <TextContainer Title={props.Title} 
                Description={props.Description} />
      <img className="bg-cover " src={props.src} />
    </div>
  );
};

export default Picture;
