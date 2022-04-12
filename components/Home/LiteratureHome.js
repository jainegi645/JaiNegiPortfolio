import React from "react";
import axios from "axios";
import LiteratureCard from "../Literature/LiteratureCard";
import { useQuery } from "react-query";
import Link from "next/link";


const LiteratureHome = () => {
  const fetchLiterature = async () => {
    let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/literatures?populate=*`;

    let res = await axios({
      method: "get",
      url,
    });
    return res;
  };

  //react query to fetch carousel data
  const { isLoading, isError, data, error, status } = useQuery(
    "literatureData",
    fetchLiterature
  );
  return (
    <>
      <div className="md:flex bg-slate-50 justify-between md:px-12  px-6 py-7 md:py-14">
        <div>
          <h2 className="lg:text-7xl text-5xl font-normal lg:font-normal text-slate-700 ">
            Literature
          </h2>
          <p className="self-center mt-4  text-gray-500  text-xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in
            sed non alias,
          </p>
        </div>
        <Link href="/Literature">
        <button className="px-11 mt-10 lg:mt-0  py-3 self-center bg-heroButton rounded-xl text-white">
        View More →

         
        </button>
        </Link>

        <div className="flex items-center mt-6 -mx-2"></div>
      </div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {status === "success" &&
              data.data.data.slice(0,5).map((item) => {
                return (
                  <LiteratureCard
                    key={item.id}
                    Filter={item.attributes.Filter}
                    Title={item.attributes.Title}
                    Content={item.attributes.Content}
                    CoverImg={item.attributes.CoverImage.data.attributes.url}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LiteratureHome;
