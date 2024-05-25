import React from "react";
import { cn } from "@/lib/utils";

interface ImageProps {
  source: string;
  alternate: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  source,
  alternate,
  className,
  ...props
}) => {
  return (
    <img
      src={source}
      alt={alternate}
      className={cn(" w-full object-contain ", className)}
      {...props}
    />
  );
};

export default Image;
