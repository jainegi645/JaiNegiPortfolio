import React from "react";
import Image from "next/image";
import TextContainer from "./TextContainer";

const Picture = (props) => {
  return (

    <>
    <div className="w-auto lg:pt-5 lg:flex flex-row-reverse lg:justify-evenly lg:align-middle ">
      <TextContainer Title={props.Title} 
                Description={props.Description} />
      <Image className="bg-cover h-screen w-2/5" src={props.src}  height={650} width={500}/>
    </div>
    </>
  );
};

export default Picture;
