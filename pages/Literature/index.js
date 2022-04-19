import React, { useState, useEffect } from "react";
import axios from "axios";
import LiteratureCard from "../../components/Literature/LiteratureCard";
import Navbar from "../../components/Navbar/Navbar";
import Fotter from "../../components/Fotter/Fotter";



const Literature = ({literatures,literaturesHindi}) => {
  const [option, setOption] = useState('All');
 

  // useEffect(() => {
  //   const fetchLiterature = async () => {
  //     let url = `https://dashboard-artist-ravi-dhar.herokuapp.com/api/literatures?${option}`;
  //     await axios
  //       .get(url)
  //       .then((response) => {
  //         setCards(response.data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   fetchLiterature();
  // }, [option]);

  return (
    <>
      <Navbar />
      {console.log('hindi',literaturesHindi)}

      <div className="md:flex md:justify-between px-5 md:py-16 py-8 items-center">
        <div>
          <h2 className="lg:text-7xl text-5xl  lg:font-normal text-slate-700 ">
            Literature
          </h2>

          <p className="mt-4 text-gray-500  lg:max-w-md text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in
            sed non alias, fugiat
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
                {option }

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
                    href="#"
                    onClick={() =>
                      setOption('All')
                    }
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
                    href="#"
                    onClick={() =>
                      setOption( `English`)
                    }
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
                    href="#"
                    onClick={() =>
                      setOption( 'Hindi')
                    }
                  >
                    Hindi
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

            {option === 'All'? literatures.map((item) => {
              return (
                <LiteratureCard
                  key={item.id}
                  id = {item.id}
                  Filter={item.attributes.Filter}
                  Title={item.attributes.Title}
                  Content={item.attributes.Content}
                  CoverImg={item.attributes.CoverImage.data.attributes.url}
                />
            
              );
            }) :  literatures.filter((elem) => elem.attributes.Filter === option).map((item) => {
              return (
                <LiteratureCard
                  key={item.id}
                  id = {item.id}
                  Filter={item.attributes.Filter}
                  Title={item.attributes.Title}
                  Content={item.attributes.Content}
                  CoverImg={item.attributes.CoverImage.data.attributes.url}
                />
            
              );
            }) }
            {/* { literatures.filter((elem) => elem.attributes.Filter === option).map((item) => {
              return (
                <LiteratureCard
                  key={item.id}
                  id = {item.id}
                  Filter={item.attributes.Filter}
                  Title={item.attributes.Title}
                  Content={item.attributes.Content}
                  CoverImg={item.attributes.CoverImage.data.attributes.url}
                />
            
              );
            }) 
          } */}


            {/* {option === 'All'? literatures.map((item) => {
              return (
                <LiteratureCard
                  key={item.id}
                  id = {item.id}
                  Filter={item.attributes.Filter}
                  Title={item.attributes.Title}
                  Content={item.attributes.Content}
                  CoverImg={item.attributes.CoverImage.data.attributes.url}
                />
            
              );
            })
            : null ||
            option === 'English'? literatures.map((item) => {
              return (
                <LiteratureCard
                  key={item.id}
                  id = {item.id}
                  Filter={item.attributes.Filter}
                  Title={item.attributes.Title}
                  Content={item.attributes.Content}
                  CoverImg={item.attributes.CoverImage.data.attributes.url}
                />
            
              );
            })
            : null ||
            option === 'Hindi'? literaturesHindi.map((item) => {
              return (
                <LiteratureCard
                  key={item.id}
                  id = {item.id}
                  Filter={item.attributes.Filter}
                  Title={item.attributes.Title}
                  Content={item.attributes.Content}
                  CoverImg={item.attributes.CoverImage.data.attributes.url}
                />
            
              );
            })
            : null 

          } */}
          </div>
        </div>
      </section>
      <Fotter />
    </>
  );
};




export async function getServerSideProps(context){
    const res = await axios(`https://dashboard-artist-ravi-dhar.herokuapp.com/api/literatures?populate=*`)
    const data = await res.data.data;
   
    return{
        props:{
            literatures:data,
            
        }
    }
}

export default Literature;
