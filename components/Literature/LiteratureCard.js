import React from "react";
import ReactMarkdown from 'react-markdown';
import Link from "next/link"

const LiteratureCard = (props) => {
  return (
    <div  className="p-4 lg:w-1/3">
 
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={props.CoverImg}
                  alt="blog"
                />
                <div className="p-6 h-80 overflow-hidden text-ellipsis">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {props.Filter}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {props.Title}
                  </h1>
                  <ReactMarkdown  className="leading-relaxed mb-3 whitespace-normal">{props.Content}</ReactMarkdown>
                 
                </div>

                <div className="flex items-center flex-wrap p-6">
                  <Link href="/FullLiteraturePage">
                    <a className="text-heroButton inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    </Link>
                  </div>
              </div>
        
    </div>
  );
};

export default LiteratureCard;
