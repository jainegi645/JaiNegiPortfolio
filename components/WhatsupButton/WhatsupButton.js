import React from "react";
import whatsupicon from "../../public/whatsupicon.png";
import Image from "next/image";

const WhatsupButton = () => {
  return (
    <div className=" float my-float">
      <a
        href="https://api.whatsapp.com/send?phone=919680099627"
        className=""
        target="_blank"
      >
        <img
          className=" float my-float"
          src="https://img.icons8.com/color/96/000000/whatsapp--v1.png"
        />
      </a>
    </div>
  );
};

export default WhatsupButton;
