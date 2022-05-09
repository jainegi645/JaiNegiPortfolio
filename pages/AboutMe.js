import React, { useState, useEffect } from "react";
import aboutMe from "../public/aboutme.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
import About from "../components/AboutMe/About";
import Aboutright from "../components/AboutMe/Aboutright";
import axios from "axios";

const AboutMe = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/aboutmes?populate=*`;
      await axios
        .get(url)
        .then((response) => {
          setAbout(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAbout();
  }, []);
  return (
    <div>
      <Navbar />
      <section className="bg-slate-50 ">
        <div className="container px-6 py-8 mx-auto lg:block  hidden">
          {about.map((item, index) => {
            return (
              <div>
                {index / 2 === 0 ? (
                  <About
                    key={item.id}
                    src={item.attributes.Image.data.attributes.url}
                    description={item.attributes.Description}
                    title={item.attributes.Title}
                  />
                ) : (
                  <Aboutright
                    key={item.id}
                    src={item.attributes.Image.data.attributes.url}
                    description={item.attributes.Description}
                    title={item.attributes.Title}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="container px-6 py-8 mx-auto lg:hidden sm:block">
          {about.map((item) => {
            return (
              <div>
                  <About
                    key={item.id}
                    src={item.attributes.Image.data.attributes.url}
                    description={item.attributes.Description}
                    title={item.attributes.Title}
                  />
               
              </div>
            );
          })}
        </div>
      </section>
      <Fotter />
    </div>
  );
};

export default AboutMe;
