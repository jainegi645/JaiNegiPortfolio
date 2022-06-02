import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
import About from "../components/AboutMe/About";
import Aboutright from "../components/AboutMe/Aboutright";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const AboutMe = () => {
  const [about, setAbout] = useState([]);
  const [desc, setDesc] = useState();
  const [pic, setPic] = useState();

  useEffect(() => {
    const fetchAbout = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/about?populate=*`;
      await axios
        .get(url)
        .then((response) => {
          setAbout(response.data.data);
          // console.log(response.data.data.attributes.image.data.attributes.url);
          setDesc(response.data.data.attributes.Description);
          setPic(response.data.data.attributes.image.data.attributes.url);
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
        <div className="container md:px-1  mx-auto lg:block px-5 ">
   
          <div className="md:py-16 py-8 ">
          <h2 className="lg:text-7xl text-5xl   lg:font-normal text-slate-700 ">
            About Me
          </h2>
          <p className="mt-4 text-gray-500 lg:max-w-xl text-xl">
            Humble is who hurt none, even that the feeble one
          </p>
          <p className=" text-gray-500 lg:max-w-xl text-xl">
            Show nerve to utter truth to procure the ultimate ken
          </p>
          </div>
         
          <div className="items-center py-12  lg:flex justify-evenly">
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="flex items-center  ">
            <div className="max-w-lg">
              {
                pic ? 
                <Image
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src={pic}
                alt="image"
                height={650}
                width={500}
              /> : ''
              }
             
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 pt-10">
          

          <ReactMarkdown
            parserOptions={{ commonmark: true }}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw]}
            children={desc}
            className=" text-gray-500 lg:max-w-3xl text-center text-xl"
          />
        </div>
      </div>
        </div>
      </section>
      <Fotter />
    </div>
  );
};

export default AboutMe;
