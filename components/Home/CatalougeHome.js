import React from "react";
import aboutMe from "../../images/aboutme.jpg";
import Image from "next/image";
import { useQuery } from "react-query";
import axios from "axios";
import Masonry from "react-masonry-css";
import Link from "next/link";

const CatalougeHome = () => {
  const fetchCatalogue = async () => {
    let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/catalouges?populate=*`;
    let res = await axios({
      method: "get",
      url,
    });
    return res;
  };

  const { isLoading, isError, data, error, status } = useQuery(
    "catalogueData",
    fetchCatalogue,
    {
      refetchOnWindowFocus: false,
    }
  );

  //responsive breakpoits for masonry layout
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <section className=" dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex justify-evenly">
            <div className="lg:w-1/2">
              <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 dark:text-gray-100">
                Catalouge
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem
                sequi ex veniam consequuntur id, maiores beatae ipsa omnis
                aliquam?
              </p>
              <Link href="/Catalouge">
              <button className="px-11 mt-10 py-3 bg-heroButton rounded-xl text-white">
               View More →
              </button>
              </Link>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center  ">
                <div className="max-w-lg">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {status === "success" &&
                      data.data.data.slice(0, 9).map((item) => {
                        return (
                          <Image
                            key={item.id}
                            src={item.attributes.image.data.attributes.url}
                            width={item.attributes.image.data.attributes.width}
                            height={
                              item.attributes.image.data.attributes.height
                            }
                            alt={item.attributes.title}
                          />
                        );
                      })}
                  </Masonry>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatalougeHome;
