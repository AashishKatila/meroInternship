import React from "react";
import Image from "./ui/Image";
import Search from "../assets/landing/search.png";
import { Typography } from "./ui/Typography";
import DiscoverCard from "./DiscoverCard";
import { Button } from "./ui/Button";

const Hiring: React.FC = () => {
  const hiringData = [
    {
      title: "60k+",
      subtitle: "Jobs submitted",
    },
    {
      title: "30k+",
      subtitle: "Monthly Users",
    },
    {
      title: "18k+",
      subtitle: "Candidate Applied",
    },
    {
      title: "5k+",
      subtitle: "Campany Reviews",
    },
  ];
  return (
    <div className="grid grid-cols-2 items-center mt-10">
      <Image source={Search} alternate="Hiring" className="" />
      <div>
        <Typography
          label="Discover Why companies are using Job Portal?"
          variant="h3"
          weight="bold"
          className="mb-6"
        />
        <Typography label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque atque dolore quisquam tempora necessitatibus nesciunt cum reprehenderit iusto dolorum!  " />
        <div className="grid grid-cols-2 py-6">
          {hiringData.map((item) => (
            <DiscoverCard total={item.title} description={item.subtitle} />
          ))}
        </div>
        <Button
          variant="secondary"
          className="bg-teal_700 text-white rounded-3xl"
        >
          Post your job for free
        </Button>
      </div>
    </div>
  );
};

export default Hiring;
