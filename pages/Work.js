import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import axios from "axios";
import Test from "../components/Catalouge/Test";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

const Work = () => {
  const router = useRouter();
  const [catalouge, setCatalouge] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [option, setOption] = useState(`populate=*`);

  useEffect(() => {
    if (router.query.filter === "Paintings") {
      setOption(`filters[filter][$eq]=paintings&populate=*`);
    } else if (router.query.filter === "Portraits") {
      setOption(`filters[filter][$eq]=portraits&populate=*`);
    } else if (router.query.filter === "Sculptures") {
      setOption(`filters[filter][$eq]=sculptures&populate=*`);
    }
  }, [router.query.filter]);

  useEffect(() => {
    const fetchCatalouge = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/catalouges?${option}&pagination[page]=${pageNo}`;
      await axios
        .get(url)
        .then((response) => {
          setCatalouge(response.data.data);
          // console.log(response.data.meta);
          setPages(response.data.meta.pagination);
          // setPageNo(response.data.meta.pagination.page);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCatalouge();
  }, [option, pageNo]);

  //responsive breakpoits for masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const handlePageClick = ({ selected }) => {
    console.log("prop from react paginate", selected);
    setPageNo(selected + 1);
  };

  return (
    <div>
      <Navbar />
      <div className=" md:flex md:justify-between px-5 md:py-16 py-8 items-center">
        <div className="">
          <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 ">
          Some Things I’ve Built
          </h2>
          <p className="mt-4 text-gray-500 lg:max-w-xl text-xl">
            Humble is who hurt none, even that the feeble one
          </p>
          <p className=" text-gray-500 lg:max-w-xl text-xl">
            Show nerve to utter truth to procure the ultimate ken
          </p>
        </div>

        {/* <div className="md:flex md:justify-center mt-4 md:mt-0">
          <div>
            <div className="dropdown relative">
              <button
                className="
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
                  : null ||
                    option === `filters[filter][$eq]=sculptures&populate=*`
                  ? "Sculptures"
                  : null}

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
                className="
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
                      setOption(`filters[filter][$eq]=paintings&populate=*`);
                      setPageNo(1);
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
                      setOption(`filters[filter][$eq]=portraits&populate=*`);
                      setPageNo(1);
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
                      setOption(`filters[filter][$eq]=sculptures&populate=*`);
                      setPageNo(1);
                      router.push(
                        {
                          pathname: "/Catalouge",
                        },
                        "/Catalouge/Sculptures",
                        { shallow: true }
                      );
                    }}
                  >
                    Sculptures
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
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
      <div className="py-9">
        <ReactPaginate
          previousLabel="< previous"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageCount={pages.pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          renderOnZeroPageCount={null}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      <Fotter />
    </div>
  );
};

export default Work;
