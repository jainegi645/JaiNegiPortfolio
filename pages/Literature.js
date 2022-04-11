import React, { useState, useEffect } from "react";
import axios from "axios";
import LiteratureCard from "../components/Literature/LiteratureCard";
import Navbar from "../components/Navbar/Navbar";


const Blogs = () => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchLiterature = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/literatures?populate=*`;
      await axios
        .get(url)
        .then((response) => {
          setCards(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchLiterature();
  }, []);

  return (
    <>
    <Navbar/>
    <div className=" md:flex md:justify-between px-5 py-16 items-center">
        <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 dark:text-gray-100">
          Literature
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed
          non alias, fugiat
        </p>
      </div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {cards.map((item) => {
            return (
              <LiteratureCard
                key={item.id}
                Filter={item.attributes.Filter}
                Title={item.attributes.Title}
                Content={item.attributes.Content}
                CoverImg={item.attributes.CoverImage.data.attributes.url}
              />
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Blogs;
