import React from "react";
import { Typography } from "./ui/Typography";
import Searchbar from "./ui/Searchbar";

const Subscribe: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="flex justify-center">
        <Typography
          label="Subscribe"
          variant="h4"
          weight="bold"
          className="mx-1"
        />
        <Typography
          label="Job Portal"
          variant="h4"
          weight="bold"
          className="mx-1 text-teal_700"
        />
        <Typography
          label="& Get Company News"
          variant="h4"
          weight="bold"
          className="mx-1"
        />
      </div>
      <div className="w-[50%] flex justify-center ">
        <Searchbar label="Subscribe" />
      </div>
    </div>
  );
};

export default Subscribe;
