import { FC } from "react";
import Image from "./ui/Image";
import { Typography } from "./ui/Typography";

interface ICustomCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CustomCard: FC<ICustomCard> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-row items-center  px-2 py-4">
      <div className="w-1/4 flex justify-center ">
        <Image
          source={imageSrc}
          alternate={imageAlt}
          className="rounded-full w-12 h-12"
        />
      </div>
      <div className="w-3/4 pl-4 justify-self-auto">
        <Typography label={title} variant="h6" weight="semibold" />
        <Typography
          label={description}
          variant="p"
          weight="light"
          className="text-gray"
        />
      </div>
    </div>
  );
};

export default CustomCard;
