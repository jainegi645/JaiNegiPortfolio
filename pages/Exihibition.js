import React, { useState, useEffect } from "react";
import Image from "next/image";
import FormPopUp from "../components/Exihibition/FormPopUp";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
import Test from "../components/Catalouge/Test";
import Masonry from "react-masonry-css";
import axios from "axios";

const Exihibition = () => {
  const [exhibition, setExhibition] = useState([]);
  console.log(exhibition);

  useEffect(() => {
    const fetchExhibition = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/exihibitions?populate=*`;
      await axios
        .get(url)
        .then((response) => {
          setExhibition(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchExhibition();
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
      <div className=" md:flex md:justify-between px-5 md:py-16 py-8 items-center">
        <div>
          <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 ">
            Exihibition
          </h2>
          <p className="mt-4 text-gray-500 lg:max-w-xl text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in
            sed non alias, fugiat
          </p>
        </div>
        <FormPopUp />
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {exhibition.map((item) => {
          return (
            <Test
              key={item.id}
              src={item.attributes.Image.data.attributes.url}
              width={item.attributes.Image.data.attributes.width}
              height={item.attributes.Image.data.attributes.height}
              title={item.attributes.Title}
              size={item.attributes.size}
              medium={item.attributes.medium}
              artist = {item.attributes.Artist}
            />
          );
        })}
      </Masonry>

      <Fotter />
    </div>
  );
};

export default Exihibition;
