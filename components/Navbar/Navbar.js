import React, { useState,useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import {Link} from 'react-scroll';
import logo from "../../public/logowithoutbg.png";
import hamburger from "../../public/hamburger.png";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  // let history = useHistory();

  useEffect(() => {
    console.log(router.pathname);
  }, [])
  
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
          <Link href="/AboutMe" smooth={true} duration={1000}>
            <a className=" hover:bg-heroButton hover:shadow-xl hover:text-white rounded-sm px-5 py-2 cursor-pointer">
              About Me
            </a>
          </Link>


          <div className="flex justify-center border-none items-center">
              <div className="dropdown relative flex items-center hover:bg-heroButton px-4 py-2 cursor-pointer group">
                <Link href="/Catalouge" smooth={true} duration={1000}>
                  <a>Catalouge</a>
                </Link>
                
                 
                <button
                  className="dropdown-toggle group-hover:block group-hover:z-50 z-50 rounded-sm hover:bg-heroButton hover:shadow-xl leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
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
                    className="w-2 ml-2"
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
                  className="dropdown-menu  -left-0 group-hover:block px-4 py-2 min-w-max absolute bg-white text-base  list-none rounded-lg shadow-lg mt-40 hidden md:hover:block bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li >
                    <a
                      className="
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
                  <li className="z-50 " >
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              z-50
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      onClick={() => {
                        router.push(
                          {
                            pathname: "/Catalouge",
                            query: { filter: "Portraits" },
                          },
                          "/Catalouge/Portraits"
                        );
                      }}
                    >
                      Portraits
                    </a>
                  </li>
                  <li className="z-50 " >
                    <a
                      className="
              dropdown-item
              text-sm
              py-2
              px-4
              z-50
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                      onClick={() => {
                        router.push(
                          {
                            pathname: "/Catalouge",
                            query: { filter: "Sculptures" },
                          },
                          "/Catalouge/Sculptures"
                        );
                      }}
                    >
                      Sculptures
                    </a>
                  </li>
                </ul>
              </div>
          </div>

          <div className="flex justify-center border-none items-center">
            <div>
              <div className="dropdown relative  flex items-center hover:bg-heroButton px-4 py-2 cursor-pointer group">
                <Link href="/Literature" smooth={true} duration={1000}>
                  <a>Literature</a>
                </Link>

                <button
                  className="dropdown-toggle group-hover:block  rounded-sm hover:bg-heroButton hover:shadow-xl leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
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
                    className="w-2 ml-2"
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
                  className="dropdown-menu -left-0  group-hover:block px-4 py-2 min-w-max absolute bg-white text-base  list-none rounded-lg shadow-lg mt-40 hidden md:hover:block bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="
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
                      className="
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
                        router.push(
                          {
                            pathname: "/Literature",
                            query: { filter: "English" },
                          },
                          "/Literature/English"
                        );
                      }}
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      className="
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
                        router.push(
                          {
                            pathname: "/Literature",
                            query: { filter: "Kashmiri" },
                          },
                          "/Literature/Kashmiri"
                        );
                      }}
                    >
                      Kashmiri
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
        
        {/* hamburger menu icon below */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={openNavbar}
            alt="mobile drawer"

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
         
        </div>
      </nav>

      <div
        className="fixed z-10 bg-white top-0 right-0 h-screen  ease-in-out"
        style={{ width: size }}
      >
        <div className="pt-4  w-11" onClick={closeNavbar}>
          <img
            className="ml-8"
            src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-right.png"
          />
        </div>
        <div className="mobileNav-header border-b-2 font-medium  ml-5 px-3 text-xl py-1 text-heroTitle">
          Artist Ravi Dhar
        </div>
        <nav className=" mt-2 ">
          <ul className="grid space-x-8 ">
            <div className="flex ml-8 pt-5">
              <img src="https://img.icons8.com/material-outlined/28/000000/home--v2.png" />
              {/* <img src="https://img.icons8.com/ios/22/000000/home--v1.png"/> */}
              <Link href="/" smooth={true} duration={1000}>
                <a className=" text-lg pl-2 "> Home</a>
              </Link>
            </div>
            <div className="flex ml-8 pt-12">
              <img src="https://img.icons8.com/material-outlined/24/000000/about.png" />
              <Link href="/AboutMe" smooth={true} duration={1000}>
                <a className="text-lg  pl-2">About Me</a>
              </Link>
            </div>

            {/* accordian starts here */}
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample border-b-0 "
            >
              <div className="accordion-item border-t-0 border-l-0 border-r-0 border-none rounded-none bg-white border ">
                <h2 className="accordion-header mb-0" id="flush-headingOne">
                  <button
                    className=" pt-12 accordion-button text-lg relative flex items-center w-full  text-left bg-white rounded-none transition focus:outline-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    onClick={() => {
                      router.push("/Catalouge");
                    }}
                  >
                    <img src="https://img.icons8.com/pastel-glyph/23/000000/catalog--v2.png" />
                    <Link href="/Catalouge" smooth={true} duration={1000}>
                      <a className="pl-2 text-lg">Catalouge</a>
                    </Link>
                  </button>
                </h2>

                <div
                  id="flush-collapseOne"
                  className="accordion-collapse border-0 collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body py-4 px-5">
                    <ul>
                      <li>
                        <a
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
                    </ul>
                  </div>
                  <div className="accordion-body py-4 px-5">
                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            router.push(
                              {
                                pathname: "/Catalouge",
                                query: { filter: "Portraits" },
                              },
                              "/Catalouge/Portraits"
                            );
                          }}
                        >
                          Portraits
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white  border-gray-200">
                  <h2 className="accordion-header mb-0" id="flush-headingThree">
                    <button
                      className=" pt-12 accordion-button text-lg relative flex items-center w-full  text-left bg-white rounded-none transition focus:outline-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                      onClick={() => {
                        router.push("/Literature");
                      }}
                    >
                      <img src="https://img.icons8.com/glyph-neue/24/000000/literature.png" />
                      <Link href="/Literature" smooth={true} duration={1000}>
                        <a className="pl-2 text-lg">Literature</a>
                      </Link>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body py-4 px-5">
                      <ul>
                        <li>
                          <a
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
                      </ul>
                    </div>
                    <div className="accordion-body py-4 px-5">
                      <ul>
                        <li>
                          <a
                            onClick={() => {
                              router.push(
                                {
                                  pathname: "/Literature",
                                  query: { filter: "English" },
                                },
                                "/Literature/English"
                              );
                            }}
                          >
                            English
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* accordian ends here: */}
            <div className="flex pt-12">
              <img src="https://img.icons8.com/ios/24/000000/physical-gallery.png" />
              <Link href="/Exihibition" smooth={true} duration={1000}>
                <a className="text-lg pl-2">Exihibition</a>
              </Link>
            </div>
          </ul>
          <div className="flex pt-12 ml-7 space-x-7">
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
            {/* <a
              // href="https://goo.gl/maps/5n3KMaxyvccE9rrGA"
              className="w-10 h-1/4 lg:w-10 lg:h-2/4 cursor-pointer"
              target="_blank"
            >
              <img
                // href="https://goo.gl/maps/5n3KMaxyvccE9rrGA"
                alt="google map"
                src="https://img.icons8.com/color/40/000000/google-maps.png"
              />
            </a> */}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
