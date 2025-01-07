import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mt-16 lg:mt-20 mb-4">
      {title}
    </h1>
  );
};

export default Heading;
