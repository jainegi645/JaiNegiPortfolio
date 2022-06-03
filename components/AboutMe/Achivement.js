import React from "react";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import ReactMarkdown from "react-markdown";
const achivement = (props) => {
  return (<>
    <div className="md:block hidden" >
      {props.id % 2 !== 0 ? (
        <div className="items-center py-12  lg:flex justify-evenly">
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center  ">
              <div className="max-w-lg">
                <Image
                  className="object-cover object-center w-full h-64 rounded-md shadow"
                  src={props.src}
                  alt="image"
                  height={650}
                  width={500}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 pt-10">
            <ReactMarkdown
              parserOptions={{ commonmark: true }}
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw]}
              children={props.desc}
              className=" text-gray-500 lg:max-w-3xl leading-normal text-left text-xl"
            />
          </div>
        </div>
      ) : (
        <div className="items-center py-12  lg:flex justify-evenly">
                <div className="lg:w-1/2 pt-10">
                  <ReactMarkdown
                    parserOptions={{ commonmark: true }}
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    rehypePlugins={[rehypeRaw]}
                    children={props.desc}
                    className=" text-gray-500 lg:max-w-3xl leading-normal text-left text-xl"
                  />
                </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center  ">
              <div className="max-w-lg">
                <Image
                  className="object-cover object-center w-full h-64 rounded-md shadow"
                  src={props.src}
                  alt="image"
                  height={650}
                  width={500}
                />
              </div>
            </div>
          </div>

        </div>
      )}
    </div>



    <div className="md:hidden block">
        <div className="items-center py-12  lg:flex justify-evenly">
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="flex items-center  ">
              <div className="max-w-lg">
                <Image
                  className="object-cover object-center w-full h-64 rounded-md shadow"
                  src={props.src}
                  alt="image"
                  height={650}
                  width={500}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 pt-10">
            <ReactMarkdown
              parserOptions={{ commonmark: true }}
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw]}
              children={props.desc}
              className=" text-gray-500 lg:max-w-3xl leading-normal text-left text-xl"
            />
          </div>
        </div>
   
  
    </div>
    </>
  );
};

export default achivement;
