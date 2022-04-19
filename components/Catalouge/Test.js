import React from "react";
// import FullScreenImage from "./FullScreenImage";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

const test = (props) => {
  const options = {
    settings: {
      disableKeyboardControls: true,
      disableWheelControls: true,
    },
    caption: {
      captionAlignment: "start",
      captionColor: "#FFFFFF",
      captionContainerPadding: "0",
      captionFontFamily: "inherit",
      captionFontSize: "1.2rem",
      captionFontStyle: "inherit",
      captionFontWeight: "bold",
      captionTextTransform: "inherit",
      showCaption: true,
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
      <div className="w-auto pt-12 relative  ">
        <SRLWrapper options={options}>
          <div className=" bg-white px-3 py-5">
            <Image
              className="bg-cover"
              src={props.src}
              height={props.height}
              width={props.width}
              srl_gallery_image="true"
              alt={props.title}
            />
            <div>
              {props.artist && (
                <p className="text-base  font-medium text-black">
                  Artist {props.artist}
                </p>
              )}
              <p className="font-normal text-slate-700">{props.size}</p>
              <p className="text-base font-medium text-black">{props.title}</p>
              <p className="font-normal text-slate-900"> {props.medium}</p>
            </div>
          </div>
        </SRLWrapper>
      </div>
    </>
  );
};

export default test;
