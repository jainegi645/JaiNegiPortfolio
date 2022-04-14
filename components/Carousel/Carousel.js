import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Picture from "./Picture";
import TextContainer from "./TextContainer";
import { useQuery } from "react-query";

export default function Carousel() {
  const [carousel, setCarousel] = useState([]);


 
  const fetchCarousel = async () => {
    let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/home-carousels?populate=*`;

    let res = await axios({
      method: "get",
      url,
    });
    return res;
  };

  //react query to fetch carousel data
  const { isLoading, isError, data, error, status } = useQuery(
    "carouselData",
    fetchCarousel,
    {
      refetchOnWindowFocus: false,
    }
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    swipeToSlide: true,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">

      <div>
        <Slider {...settings} className="">
          {status === "success" &&
            data.data.data.map((item) => {
              return (
                <Picture
                  key={item.id}
                  src={item.attributes.carouselImage.data.attributes.url}
                  width={item.attributes.carouselImage.data.attributes.width}
                  height={item.attributes.carouselImage.data.attributes.height}
                  Title={item.attributes.title}
                  Description={item.attributes.description}
                />
              );
            })}
        </Slider>
      </div>
    </div>
  );
}
