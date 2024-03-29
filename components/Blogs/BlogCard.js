import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { useRouter } from "next/router";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import Logo from "../../public/TailwindLogo.png";
import Image from "next/image";

const BlogCard = (props) => {
  const router = useRouter();

  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={Logo}
          alt="blog"
        />
        <div className="p-6 h-80 overflow-hidden text-ellipsis">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {props.Title}
          </h1>
          <div className="leading-relaxed mb-3 whitespace-normal">
            {/* Proident occaecat qui enim minim est dolor tempor exercitation
            deserunt deserunt amet. Tempor id deserunt excepteur dolor irure
            ipsum sunt deserunt eiusmod deserunt. Aliqua amet veniam cupidatat
            magna ad elit incididunt sunt nisi officia incididunt. Ad proident
            do nulla ex ut consectetur tempor non consectetur minim labore.
            Irure voluptate ea sint labore commodo ullamco exercitation officia
            cillum. Ea voluptate ea ex ipsum. */}
            <ReactMarkdown
              parserOptions={{ commonmark: true }}
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw]}
              children={props.Content}
              className="leading-relaxed text-black mt-5 mb-3 whitespace-normal"
            />
          </div>
        </div>

        <div className="flex items-center flex-wrap p-6">
          <Link href={`/Blog/${props.id}`}>
            <a className="text-heroButton inline-flex items-center md:mb-2 lg:mb-0">
              Read More
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

export default BlogCard;
