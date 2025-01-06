import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary my-4 md:my-6 lg:my-8">
      {title}
    </h1>
  );
};

export default Heading;
