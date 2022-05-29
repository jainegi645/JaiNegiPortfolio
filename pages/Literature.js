import React, { useState, useEffect } from "react";
import axios from "axios";
import LiteratureCard from "../components/Literature/LiteratureCard";
import Navbar from "../components/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";


const Literature = ({ literatures, literaturesHindi }) => {
  const router = useRouter();
  const [literature, setLiterature] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pages, setPages] = useState([]);
  const [option, setOption] = useState(`populate=*`);

  useEffect(() => {
    if (router.query.filter === "Hindi") {
      setOption(`filters[filter][$eq]=Hindi&populate=*`);
    } else if (router.query.filter === "English") {
      setOption(`filters[filter][$eq]=English&populate=*`);
    } else if (router.query.filter === "Kashmiri") {
      setOption(`filters[filter][$eq]=Kashmiri&populate=*`);
    }
  }, [router.query.filter]);

  useEffect(() => {
    const fetchLiterature = async () => {
      let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/literatures?${option}&pagination[page]=${pageNo}`;
      await axios
        .get(url)
        .then((response) => {
          setLiterature(response.data.data);
          setPages(response.data.meta.pagination);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchLiterature();
  }, [option, pageNo]);


  
  const handlePageClick = ({ selected }) => {
    setPageNo(selected+1);
  };
  
  return (
    <>
      <Navbar />

      <div className="md:flex md:justify-between px-5 md:py-16 py-8 items-center">
        <div>
          <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 ">
            Literature
          </h2>

          <p className="mt-4 text-gray-500  lg:max-w-xl text-xl">
            No sense in counting ripples that wisdom your cripples
          </p>
          <p className="text-gray-500  lg:max-w-xl text-xl">
            Watch out for huge tides your wisdom will triples
          </p>
        </div>

        <div className="pt-4 md:pt-0 md:flex md:justify-center">
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
                  : null || option === `filters[filter][$eq]=Hindi&populate=*`
                  ? "Hindi"
                  : null || option === `filters[filter][$eq]=English&populate=*`
                  ? "English"
                  : null ||
                    option === `filters[filter][$eq]=Kashmiri&populate=*`
                  ? "Kashmiri"
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
                          pathname: "/Literature",
                        },
                        "/Literature",
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
                      setOption(`filters[filter][$eq]=English&populate=*`);
                      setPageNo(1);
                      router.push(
                        {
                          pathname: "/Literature",
                        },
                        "/Literature/English",
                        { shallow: true }
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
                    // onClick={() => setOption("Hindi")}
                    onClick={() => {
                      setOption(`filters[filter][$eq]=Hindi&populate=*`);
                      setPageNo(1);
                      router.push(
                        {
                          pathname: "/Literature",
                        },
                        "/Literature/Hindi",
                        { shallow: true }
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
                      setOption(`filters[filter][$eq]=Kashmiri&populate=*`);
                      setPageNo(1);
                      router.push(
                        {
                          pathname: "/Literature",
                        },
                        "/Literature/Kashmiri",
                        { shallow: true }
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
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {literature.map((item) => {
              return (
                <LiteratureCard
                  key={item.id}
                  id={item.id}
                  Filter={item.attributes.Filter}
                  Title={item.attributes.Title}
                  Content={item.attributes.Content}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-center py-9">
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
    </>
  );
};



export default Literature;
