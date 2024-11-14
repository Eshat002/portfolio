import React from "react";

const Headline = ({ text }) => {
  return (
    <h3 className="font-medium text-lg text-black/80 dark:text-white capitalize">
      {text}
    </h3>
  );
};

export default Headline;
