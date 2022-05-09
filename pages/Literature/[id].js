import axios from "axios";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Fotter from "../../components/Fotter/Fotter";

const FullLiteraturePage = ({ literature }) => {
  const source =  literature.attributes.Content.replace(/\n/gi, '\n &nbsp;');

   
  function formatMyDate(value, locale = "en-US") {
    return new Date(value).toLocaleDateString(locale);
  }


  return (
    <>
    <Navbar/>
    <div className="container w-full md:max-w-3xl mx-auto py-20">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div className="font-sans">
          <p className="text-base md:text-sm text-heroButton font-bold">
            &lt;{" "}
            <Link href={"/Literature"}>
              <a className="text-base md:text-sm text-heroButton font-bold no-underline hover:underline">
                BACK TO LITERATURES
              </a>
            </Link>
          </p>

          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {literature.attributes.Title}
          </h1>
          <p className="text-sm md:text-base mt-2 font-normal text-gray-600">
            Published On {formatMyDate(literature.attributes.publishedAt)}
          </p>
        </div>
        <ReactMarkdown
          parserOptions={{ commonmark: true }}
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[rehypeRaw]}
          // children={literature.attributes.Content}
          children={source}
          escapeHtml={false}
          className="leading-relaxed mt-5 mb-3 whitespace-normal line-break"
        />
         
      </div>
    </div>
    <Fotter/>
  </>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(
    `https://dashboard-artist-ravi-dhar.herokuapp.com/api/literatures/${id}?populate=*`
  );
  const data = await res.data.data;
  return {
    props: {
      literature: data,
    },
  };
  
}

export default FullLiteraturePage;
