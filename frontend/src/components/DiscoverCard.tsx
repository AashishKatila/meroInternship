import React from "react";
import { Typography } from "./ui/Typography";

interface IDiscoverCard {
  total: string;
  description: string;
}

const DiscoverCard: React.FC<IDiscoverCard> = ({ total, description }) => {
  return (
    <div className="p-4">
      <Typography
        label={total}
        variant="h3"
        weight="semibold"
        className="text-teal_700"
      />
      <Typography label={description} className="py-1" />
    </div>
  );
};

export default DiscoverCard;
