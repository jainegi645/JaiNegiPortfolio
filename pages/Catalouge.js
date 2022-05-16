import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import axios from "axios";
import Test from "../components/Catalouge/Test";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
import { useRouter } from "next/router";

const Catalouge = () => {
  const router = useRouter();
  const [catalouge, setCatalouge] = useState([]);
  const [option, setOption] = useState(`populate=*`);

  useEffect(() => {
    if (router.query.filter === "Paintings") {
      setOption(`filters[filter][$eq]=paintings&populate=*`);
    } else if (router.query.filter === "Portraits") {
      setOption(`filters[filter][$eq]=portraits&populate=*`);
    }
  }, [router.query.filter]);

  useEffect(() => {
    const fetchCatalouge = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/catalouges?${option}`;
      await axios
        .get(url)
        .then((response) => {
          setCatalouge(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCatalouge();
  }, [option]);

  //responsive breakpoits for masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <Navbar />
      <div className=" md:flex md:justify-between px-5 md:py-16 py-8 items-center">
        <div className="">
          <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 ">
            Catalouge
          </h2>
          <p className="mt-4 text-gray-500 lg:max-w-xl text-xl">
            Humble is who hurt none, even that the feeble one
          </p>
          <p className=" text-gray-500 lg:max-w-xl text-xl">
            Show nerve to utter truth to procure the ultimate ken
          </p>
        </div>

        <div class="md:flex md:justify-center mt-4 md:mt-0">
          <div>
            <div class="dropdown relative">
              <button
                class="
                  px-9 py-4 bg-cyan-600
          dropdown-toggle
          rounded-xl
     
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          shadow-md
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {option === `populate=*`
                  ? "All"
                  : null ||
                    option === `filters[filter][$eq]=paintings&populate=*`
                  ? "Paintings"
                  : null ||
                    option === `filters[filter][$eq]=portraits&populate=*`
                  ? "Portraits"
                  : null}

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
                class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        "
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
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                    onClick={() => {
                      setOption(`populate=*`);
                      router.push(
                        {
                          pathname: "/Catalouge",
                        },
                        "/Catalouge",
                        { shallow: true }
                      );
                    }}
                  >
                    All
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
                      setOption(`filters[filter][$eq]=paintings&populate=*`);
                      router.push(
                        {
                          pathname: "/Catalouge",
                        },
                        "/Catalouge/Paintings",
                        { shallow: true }
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
                      setOption(`filters[filter][$eq]=portraits&populate=*`);
                      router.push(
                        {
                          pathname: "/Catalouge",
                        },
                        "/Catalouge/Portraits",
                        { shallow: true }
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
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {catalouge.map((item) => {
          return (
            <Test
              key={item.id}
              src={item.attributes.image.data.attributes.url}
              width={item.attributes.image.data.attributes.width}
              height={item.attributes.image.data.attributes.height}
              title={item.attributes.title}
              size={item.attributes.size}
              medium={item.attributes.medium}
            />
          );
        })}
      </Masonry>
      <Fotter />
    </div>
  );
};

export default Catalouge;
