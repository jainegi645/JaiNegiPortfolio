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
  const source = literature[0].attributes.Description.replace(
    /\n/gi,
    "\n &nbsp;"
  );
  console.log("blog/id", literature[0].attributes.Description);

  function formatMyDate(value, locale = "en-US") {
    return new Date(value).toLocaleDateString(locale);
  }
  return (
    <>
      <Navbar />
      <div className="container w-full md:max-w-3xl mx-auto py-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <p className="text-base md:text-sm text-heroButton font-bold">
              &lt;{" "}
              <Link href={"/Blogs"}>
                <a className="text-base md:text-sm text-heroButton font-bold no-underline hover:underline">
                  BACK TO LITERATURES
                </a>
              </Link>
            </p>

            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {literature[0].attributes.Title}
            </h1>
            <p className="text-sm md:text-base mt-2 font-normal text-gray-600">
              published On {formatMyDate(literature[0].attributes.publishedAt)}
            </p>
          </div>
          <ReactMarkdown
            parserOptions={{ commonmark: true }}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw]}
            // children={literature[0].attributes.Description}
            children={source}
            escapeHtml={false}
            className="leading-relaxed mt-5 mb-3 whitespace-normal line-break"
          />
        </div>
      </div>
      <Fotter />
    </>
  );
};

//this api call it producing bugs

export async function getServerSideProps({ params }) {
  const id = params.id;
  const AuthorizationToken = `2b936d14121a3350b1cff32e102f5dfac9ea671ac33911bc3ead8c0d7447c3b5697942befde3933fde69a81c67008e2e7e9a76da36e0318a2fee3cb50e62a106609003fe5a949e65aeed0d86777b245d69d30a378cd01ca65e747b64b63528fb04575931d23e01508789b3389637b175ba884867f17eb3ebd2d507d00dce599a`;
  let config = {
    headers: {
      Authorization: `Bearer ${AuthorizationToken}`,
    },
  };
  const res = await axios("http://localhost:1337/api/blogs?populate=*", config);

  //write get request to get the data from the api with headers
  const data = await res.data.data;

  return {
    props: {
      literature: data,
    },
  };
}

export default FullLiteraturePage;
