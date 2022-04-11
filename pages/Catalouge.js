import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import axios from "axios";
import CatalougeImage from "../components/Catalouge/CatalougeImage";
import Test from "../components/Catalouge/Test";
import { SRLWrapper } from "simple-react-lightbox";
// import FullScreenImage from "../components/Catalouge/FullScreenImage";
import newimg from "../images/FB_IMG_1634104293263.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
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
      <Navbar />
      <div className=" md:flex md:justify-between px-5 py-16 items-center">
        <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 dark:text-gray-100">
          Catalouge
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed
          non alias, fugiat
        </p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
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
