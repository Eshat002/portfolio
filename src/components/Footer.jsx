import React from "react";
import Headline from "./Headline";
import { LuArrowUpRight } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto lg:px-14 sm:px-10 px-6 sm:py-10 py-6 flex sm:flex-row flex-col justify-between gap-5 max-w-3xl mt-4">
        {/* left div */}
        <div>
          <div className="headline-container mb-2">
            <Headline text="contact" />
          </div>
          <div className="social-links-container flex gap-5">
            <a
              className="flex items-center gap-1 underline font-medium font-sm text-black/80 capitalize"
              target="_blank"
              href="https://www.linkedin.com/in/shahriar-jubayer-eshat/"
            >
              LinkedIn
              <LuArrowUpRight />
            </a>{" "}
            <a
              className="flex items-center gap-1 underline font-medium font-sm text-black/80 capitalize"
              target="_blank"
              href="https://twitter.com/eshatjubayer"
            >
              Twitter <LuArrowUpRight />
            </a>
            <a
              className="flex items-center gap-1 underline font-medium font-sm text-black/80 capitalize"
              target="_blank"
              href="https://www.instagram.com/eshatjubayer/"
            >
              Instagram <LuArrowUpRight />
            </a>
          </div>
        </div>
        {/* right div */}
        <div className="flex items-end font-medium font-sm text-black/80 ">
          eshatjubayer22@outlook.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
