import React from "react";
import logo from "../../public/logowithoutbg.png";
import Image from "next/image";

const Fotter = () => {
  return (
    <div>
      <footer className=" bg-navBg body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src={logo}
                className=""
                alt="logo"
                height="50"
                width="50"
              />

              <span className="ml-3 text-xl text-white">Artist Ravi Dhar</span>
            </a>
            <p className="mt-2 text-sm text-slate-300">
              Showing superiority is arrogance being inferior is ignorance
            </p>
            <p className="text-sm text-slate-300">
              Thinking cowardly is demise but being wise is emergence
            </p>
          </div>

          <div className="flex-grow justify-end flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="md:w-1/2 w-full px-4">
              <h2 className="font-medium text-white tracking-widest text-xl mb-3">
                Info
              </h2>
           
              <p className="text-slate-300  mb-1">
                Email: artistravidhar.in@gmail.com
              </p>
              <p className="text-slate-300  mb-1">Contact No: +91 9588046519</p>

              <div className="flex pt-2   space-x-2">
            <a
              href="https://www.instagram.com/ravi.dhar3/?hl=en"
              className="w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/instagram-new.png"
                alt="insta"
              />
            </a>
            <a
              href="https://www.facebook.com/ravi.dhar3"
              className="w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/facebook.png"
                alt="facebook"
              />
            </a>
          
          </div>
            </div>
          </div>
        </div>
        <div className="bg-navBg">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              Copyright©2022 ArtistRaviDhar.
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                All Rights Reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 text-center mt-2 justify-center sm:justify-start text-white">
              Developed by - Jai Negi. Need a Website? I Can Help: 8005619348
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
