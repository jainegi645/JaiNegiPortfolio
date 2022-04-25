import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import {Link} from 'react-scroll';
import logo from "../../public/logowithoutbg.png";
import hamburger from "../../public/hamburger.png";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  // let history = useHistory();
  const router = useRouter();
  const [size, setSize] = useState(`0px`);

  const openNavbar = () => {
    setSize(`260px`);
  };
  const closeNavbar = () => {
    setSize(`0px`);
  };

  return (
    <div className="">
      <nav className="flex relative bg-navBg drop-shadow-xl text-white  top-0 justify-between items-center px-4 py-5 lg:px-14 lg:pt-4 pb-3 md:space-x-0 space-x-2">
        <div className="flex items-center ">
          <Image
            src={logo}
            className=" inline-block absolute"
            alt="logo"
            height="50"
            width="50"
          />
          <p className="pl-3 font-normal tracking-wider ">Artist Ravi Dhar</p>
        </div>

        <ul className="hidden  md:flex ">
          <Link href="/" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white rounded-sm px-5 py-2 cursor-pointer">
              Home
            </a>
          </Link>
          <Link href="/AboutUs" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white rounded-sm px-5 py-2 cursor-pointer">
              About Us
            </a>
          </Link>

          {/* <Link href="/Catalouge" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white  rounded-sm px-4 py-2 cursor-pointer">
              Catalouge
            </a>
          </Link> */}

          <div class="flex justify-center border-none items-center">
            <div>
              <div class="dropdown relative flex items-center hover:bg-heroButton px-4 py-2 cursor-pointer group">
                <Link href="/Catalouge" smooth={true} duration={1000}>
                  <a>Catalouge</a>
                </Link>

                <button
                  class="dropdown-toggle group-hover:block  rounded-sm hover:bg-heroButton hover:shadow-xl leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    class="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </button>

                <ul
                  class="dropdown-menu -left-0  group-hover:block px-4 py-2 min-w-max absolute bg-white text-base  list-none rounded-lg shadow-lg mt-32 hidden md:hover:block bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              z-50
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      onClick={() => {
                        router.push(
                          {
                            pathname: "/Catalouge",
                            query: { filter: "Paintings" },
                          },
                          "/Catalouge/Paintings"
                        );
                      }}
                    >
                      Paintings
                    </a>
                  </li>
                  <li>
                    <a
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      onClick={() => {
                        router.push({
                          pathname: "/Catalouge",
                          query: { filter: "Portraits" },
                        }, "/Catalouge/Portraits");
                      }}
                    >
                      Portraits
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <Link href="/Literature" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white  rounded-sm px-4 py-2 cursor-pointer">
              Literature
            </a>
          </Link> */}

          
<div class="flex justify-center border-none items-center">
            <div>
              <div class="dropdown relative flex items-center hover:bg-heroButton px-4 py-2 cursor-pointer group">
                <Link href="/Literature" smooth={true} duration={1000}>
                  <a>Literature</a>
                </Link>

                <button
                  class="dropdown-toggle group-hover:block  rounded-sm hover:bg-heroButton hover:shadow-xl leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    class="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </button>

                <ul
                  class="dropdown-menu -left-0  group-hover:block px-4 py-2 min-w-max absolute bg-white text-base  list-none rounded-lg shadow-lg mt-32 hidden md:hover:block bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              z-50
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      onClick={() => {
                        router.push(
                          {
                            pathname: "/Literature",
                            query: { filter: "Hindi" },
                          },
                          "/Literature/Hindi"
                        );
                      }}
                    >
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a
                      class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      onClick={() => {
                        router.push({
                          pathname: "/Literature",
                          query: { filter: "English" },
                        }, "/Literature/English");
                      }}
                    >
                      English
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/Exihibition" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white rounded-sm px-4 py-2 cursor-pointer">
              Exihibition
            </a>
          </Link>
        </ul>

        <div className="md:hidden">
          {/* <Image
            src={hamburger}
            className="text-white"
            alt="mobile drawer"
            onClick={openNavbar}
            height={40}
            width={35}
          /> */}
          <img
            alt="mobile drawer"
            onClick={openNavbar}
            src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/ffffff/external-_17-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"
          />
          {/* <img src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/000000/external-mobile-application-hamburger-menu-setting-interface-basic-green-tal-revivo.png" /> */}
        </div>
      </nav>

      <div
        className="fixed z-10 bg-white top-0 right-0 h-screen  ease-in-out"
        style={{ width: size }}
      >
        <div className="pt-8  w-11" onClick={closeNavbar}>
          <img
            className="ml-8"
            src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"
          />
        </div>
        <div className="mobileNav-header ml-5  px-3 font-bold py-1 text-heroTitle">
          Artist Ravi Dhar
        </div>
        <nav className=" mt-2 ">
          <ul className="grid space-x-8 space-y-10">
            <div className="flex ml-8">
              <img src="https://img.icons8.com/material-outlined/28/000000/home--v2.png" />
              <Link href="/" smooth={true} duration={1000}>
                <a className=" text-lg 0 "> Home</a>
              </Link>
            </div>
            <div className="flex ml-8">
              <img src="https://img.icons8.com/material-outlined/24/000000/about.png" />
              <Link href="/AboutUs" smooth={true} duration={1000}>
                <a className="text-lg  ">About Us</a>
              </Link>
            </div>

            <Link href="/Catalouge" smooth={true} duration={1000}>
              <a className="text-lg">Catalouge</a>
            </Link>
            <Link href="/Literature" smooth={true} duration={1000}>
              <a className="text-lg ">Literature</a>
            </Link>
            <Link href="/Exihibition" smooth={true} duration={1000}>
              <a className="text-lg ">Exihibition</a>
            </Link>
          </ul>
          <div className="flex pt-6 ml-7 space-x-4">
            <a
              // href="https://www.instagram.com/insuranceservicepilani/"
              className="w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/instagram-new.png"
                alt="insta"
              />
            </a>
            <a
              // href="https://www.facebook.com/insuranceservicepilani/"
              className="w-10 h-2/4 lg:w-11 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/fluency/40/000000/facebook.png"
                alt="facebook"
              />
            </a>
            <a
              // href="https://goo.gl/maps/5n3KMaxyvccE9rrGA"
              className="w-10 h-1/4 lg:w-10 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                // href="https://goo.gl/maps/5n3KMaxyvccE9rrGA"
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
