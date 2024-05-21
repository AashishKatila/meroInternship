import React from "react";

interface ImageProps {
  source: string;
  alternate: string;
}

const Image: React.FC<ImageProps> = ({ source, alternate }) => {
  return (
    <img
      src={source}
      alt={alternate}
      className=" max-h-20 w-full object-contain max-w-32 grayscale "
    />
  );
};

export default Image;
