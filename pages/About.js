import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
// import About from "../components/AboutMe/About";
import AboutAchivement from "../components/AboutMe/AboutAchivement";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState([]);
  const [aboutAchivement, setAboutAchivement] = useState([]);
  const [desc, setDesc] = useState();
  const [pic, setPic] = useState();

  useEffect(() => {
    const fetchAbout = async () => {
      let url = `http://localhost:1337/api/about?populate=*`;
      const AuthorizationToken = `2b936d14121a3350b1cff32e102f5dfac9ea671ac33911bc3ead8c0d7447c3b5697942befde3933fde69a81c67008e2e7e9a76da36e0318a2fee3cb50e62a106609003fe5a949e65aeed0d86777b245d69d30a378cd01ca65e747b64b63528fb04575931d23e01508789b3389637b175ba884867f17eb3ebd2d507d00dce599a`;

      const config = {
        headers: {
          Authorization: `Bearer ${AuthorizationToken}`,
        },
      };
      await axios
        .get(url, config)
        .then((response) => {
          setAbout(response.data.data);
          // console.log(response.data.data.attributes.image.data.attributes.url);
          setDesc(response.data.data.attributes.Description);
          setPic(response.data.data.attributes.Image.data.attributes.url);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchAbout();
  }, []);

  // useEffect(() => {
  //   const fetchAboutAchievemnt = async () => {
  //     let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/about-achievements?populate=*`;
  //     await axios
  //       .get(url)
  //       .then((response) => {
  //         setAboutAchivement(response.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   fetchAboutAchievemnt();
  // }, []);

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
                  {pic ? (
                    <Image
                      className="object-cover object-center w-full h-64 rounded-md shadow"
                      src={pic}
                      alt="image"
                      height={650}
                      width={500}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 pt-10">
              <ReactMarkdown
                parserOptions={{ commonmark: true }}
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeRaw]}
                children={desc}
                className=" text-gray-500 lg:max-w-3xl leading-normal text-left text-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Fotter />
    </div>
  );
};

export default About;
