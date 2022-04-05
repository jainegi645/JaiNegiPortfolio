import React, { useState, useEffect } from "react";
import axios from "axios";
import LiteratureCard from "../components/Literature/LiteratureCard";

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
  );
};

export default Blogs;
