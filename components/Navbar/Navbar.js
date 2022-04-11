import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import {Link} from 'react-scroll';
import SearchBox from "./SearchBox";
import logo from "../../images/logoWithoutbg.png";
import hamburger from "../../images/hamburger.png";
import { useHistory } from "react-router-dom";
import Link from "next/link";

function Navbar() {
  // let history = useHistory();
  const [size, setSize] = useState(`0px`);

  const openNavbar = () => {
    setSize(`260px`);
  };
  const closeNavbar = () => {
    setSize(`0px`);
  };

  return (
    <div className="">
      <nav className="flex bg-white drop-shadow-xl text-white  top-0 justify-between items-center px-4 py-5 lg:px-14 lg:pt-4 pb-3 md:space-x-0 space-x-2">
        <div className="flex items-center text-white">
          <Image src={logo} className="" alt="logo" height="50" width="50" />
          <p className="pl-3 font-normal tracking-wider text-black">
            Artist Ravi Dhar
          </p>
        </div>

        <ul className="hidden  md:flex text-black ">
          <Link href="/" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white rounded-sm px-5 py-2 cursor-pointer">
              Home
            </a>
          </Link>
          <Link href="/" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white rounded-sm px-5 py-2 cursor-pointer">
              About Us
            </a>
          </Link>

          <Link
            href="/Catalouge"
            smooth={true}
            duration={1000}
          >
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white  rounded-sm px-4 py-2 cursor-pointer">
              Catalouge
            </a>
          </Link>
          <Link href="/Literature" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white  rounded-sm px-4 py-2 cursor-pointer">
              Literature
            </a>
          </Link>
          <Link href="/Exihibition" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white rounded-sm px-4 py-2 cursor-pointer">
              Exihibition
            </a>
          </Link>
        </ul>

        <div className="md:hidden">
          <Image
            src={hamburger}
            alt="mobile drawer"
            onClick={openNavbar}
            height={40}
            width={35}
          />
        </div>
      </nav>

      <div
        className="fixed z-10 bg-white top-0 right-0 h-screen  ease-in-out"
        style={{ width: size }}
      >
        <div className="pt-8 pl-3 w-11" onClick={closeNavbar}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png" />
        </div>
        <div className="mobileNav-header  px-3 font-bold py-1 text-heroTitle">
          Artist Ravi Dhar
        </div>
        <nav className=" mt-2 ">
          <ul className="grid space-x-8 space-y-10">
            <Link
              href="/"
              smooth={true}
              duration={1000}
            >
              <a 
              className="ml-8 text-lg 0 "
              >Home</a>
              
            </Link>
            <Link
              href="/About Us"
              smooth={true}
              duration={1000}
            >
              <a
              className=" ml-8 text-lg  "
              >About Us</a>

              
            </Link>
            <Link
              href="/Catalouge"
              smooth={true}
              duration={1000}
            >
              <a
              className="text-lg"
              >Catalouge</a>

              
            </Link>
            <Link
              href="/Literature"
              smooth={true}
              duration={1000}
            >
              <a
              className="text-lg "
              >Literature</a>

              
            </Link>
            <Link
              href="/Exihibition"
              smooth={true}
              duration={1000}
            >
              <a
              className="text-lg "
              >Exihibition</a>

              
            </Link>
          </ul>
          <div className="flex pt-6 ml-7 space-x-4">
            <a
              href="https://www.instagram.com/insuranceservicepilani/"
              className="w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/instagram-new.png"
                alt="insta"
              />
            </a>
            <a
              href="https://www.facebook.com/insuranceservicepilani/"
              className="w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/facebook.png"
                alt="facebook"
              />
            </a>
            <a
              href="https://goo.gl/maps/5n3KMaxyvccE9rrGA"
              className="w-10 h-1/4 lg:w-10 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                href="https://goo.gl/maps/5n3KMaxyvccE9rrGA"
                alt="google map"
                src="https://img.icons8.com/color/40/000000/google-maps.png"
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
