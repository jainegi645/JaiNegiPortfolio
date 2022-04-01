import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import axios from "axios";
import Picture from "../components/Carousel/Picture";

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
    500: 1
  };

  return (
    <div>
      <Masonry
       breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {catalouge.map((item) => {
          return (
            <Picture
              key={item.id}
              src={item.attributes.image.data.attributes.url}
              width={item.attributes.image.data.attributes.width}
              height={item.attributes.image.data.attributes.height}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default Catalouge;
