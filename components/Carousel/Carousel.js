import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Picture from "./Picture";
import TextContainer from "./TextContainer";

export default function Carousel() {
  const [carousel, setCarousel] = useState([]);
  console.log(carousel);

  useEffect(() => {
    const fetchCarousel = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/home-carousels?populate=*`;
      await axios
        .get(url)
        .then((response) => {
          setCarousel(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCarousel();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
    infinite: true,
    cssEase: "linear",
    fade: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
          {carousel.map((item) => {
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
