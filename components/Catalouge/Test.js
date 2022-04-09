import React from "react";
// import FullScreenImage from "./FullScreenImage";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import FullImage from "./FullImage";
import newimg from "../../images/FB_IMG_1634101947145.jpg";

const test = (props) => {
  const options = {
    settings: {
      disableKeyboardControls: true,
      disableWheelControls: true,
    },
    caption: {
      captionAlignment: 'start',
    captionColor: '#FFFFFF',
    captionContainerPadding: '0',
    captionFontFamily: 'inherit',
    captionFontSize: '1.2rem',
    captionFontStyle: 'inherit',
    captionFontWeight: 'bold',
    captionTextTransform: 'inherit',
    showCaption: true
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };
  return (
    <>
      <div className="w-auto pt-12 relative hover:opacity-80 ">
        {/* <div className="opacity-1 text-center hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl px-6 text-black font-semibold">
          {props.Title}
        </div> */}
        <SRLWrapper options={options}>
          <Image
            className="bg-cover"
            src={props.src}
            height={props.height}
            width={props.width}
            srl_gallery_image="true"
            alt={props.title}
          />
        </SRLWrapper>
      </div>
    </>
  );
};

export default test;
