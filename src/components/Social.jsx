import React from "react";
import SocialCard from "./SocialCard";
import Headline from "./Headline";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDev } from "react-icons/fa";

const Social = () => {
  return (
    <section
      id="Social"
      className="container mx-auto lg:px-14 sm:px-10 px-6 flex flex-col gap-5 max-w-3xl mt-14"
    >
      <div className="headline-container">
        <Headline text="Social links" />
      </div>
      <div
        id="Social-card-container"
        className="grid lg:grid-cols-4 grid-cols-2 gap-6"
      >
        <SocialCard
          //   platform="LinkedIn"
          linkURL="https://www.linkedin.com/in/shahriar-jubayer-eshat/"
          icon={<FaLinkedinIn size={34} />}
        />
        <SocialCard
          //   platform="Twitter"
          linkURL="https://twitter.com/eshatjubayer"
          icon={<RiTwitterXLine size={34} />}
        />
        <SocialCard
          //   platform="Instagram"
          linkURL="https://www.instagram.com/eshatjubayer/"
          icon={<FaInstagram size={34} />}
        />
        <SocialCard
          //   platform="Medium"
          linkURL="https://dev.to/eshat002"
          icon={<FaDev size={34} />}
        />
      </div>
    </section>
  );
};

export default Social;
