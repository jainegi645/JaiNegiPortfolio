import React from "react";
import aboutMe from "../../public/aboutme.jpg"
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <section className="bg-slate-50 dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex justify-evenly">

          <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center  ">
                <div className="max-w-lg">
                  <Image
                    className="object-cover object-center w-full h-64 rounded-md shadow"
                    src={aboutMe}
                    alt=""
                    height={650}
                    width={500}
                  />
                </div>
              </div>
            </div>


            <div className="lg:w-1/2">
              <h2 className="lg:text-7xl text-5xl font-normal lg:font-normal text-slate-700  dark:text-gray-100">
                About Me
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md text-xl">
                Hi I am Ravi Dhar,        
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti
                dolorem sequi ex veniam consequuntur id, maiores beatae ipsa
                omnis aliquam?
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <a className="mx-2" href="#" aria-label="Twitter">
                  <svg
                    className="w-5 h-5 text-heroButton fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                  </svg>
                </a>

                <a className="mx-2" href="#" aria-label="Facebook">
                  <svg
                    className="w-5 h-5 text-heroButton  fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                  </svg>
                </a>

             

              </div>
            </div>

           

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
