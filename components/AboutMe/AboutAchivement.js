import React from "react";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import ReactMarkdown from "react-markdown";
import Achivement from "./Achivement";

const AboutAchivement = (props) => {
  // const source =  props.description.replace(/\n/gi, '\n &nbsp;');

  return (
    <>
      <div>
      {
        props.aboutAchivement.map((item,index) => {
          return(
           <Achivement
           key={item.id}
            src = {item.attributes.Image.data.attributes.url}
            desc = {item.attributes.Description}
            id = {item.id}
            />
          )
        })
      }
      {/* <div className="lg:w-1/2">
        
          <ReactMarkdown
            parserOptions={{ commonmark: true }}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw]}
            children={source}
            className="mt-4 text-gray-500  lg:max-w-md text-xl"
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
        </div> */}

      

      </div>
    </>
  );
};

export default AboutAchivement;
