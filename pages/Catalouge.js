import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import axios from "axios";
import CatalougeImage from "../components/Catalouge/CatalougeImage";
import Test from "../components/Catalouge/Test";
import { SRLWrapper } from "simple-react-lightbox";
// import FullScreenImage from "../components/Catalouge/FullScreenImage";
import newimg from "../images/FB_IMG_1634104293263.jpg";
import Image from "next/image";

const Catalouge = () => {
  const [catalouge, setCatalouge] = useState([]);

  useEffect(() => {
    const fetchCatalouge = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/catalouges?populate=*`;
      await axios
        .get(url)
        .then((response) => {
          setCatalouge(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCatalouge();
  }, []);

  //responsive breakpoits for masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      {/* <SRLWrapper>
        <Image
          className="bg-cover"
          src={newimg}
          height="100%"
          width="100%"
          srl_gallery_image="true"
          alt="picute"
        />
      </SRLWrapper> */}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >

          {/* <SRLWrapper elements={catalouge} /> */}
      {catalouge.map((item) => {
        return (
            <Test
              key={item.id}
              src={item.attributes.image.data.attributes.url}
              width={item.attributes.image.data.attributes.width}
              height={item.attributes.image.data.attributes.height}
              title={item.attributes.title}
            />
         
        );
      })}

      </Masonry>
    </div>
  );
};

export default Catalouge;
