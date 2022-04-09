import React from "react";
import newimg from "../../images/FB_IMG_1634101947145.jpg";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

const FullImage = (props) => {
  return (
    <SRLWrapper>
      <div>
        <Image
          className="bg-cover"
          src={props.src}
          height={props.height}
          width={props.width}
          srl_gallery_image="true"
          alt={props.title}
        />
      </div>
    </SRLWrapper>
  );
};

export default FullImage;
