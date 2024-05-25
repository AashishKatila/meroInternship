import React from "react";
import Image from "./Image";
import { Typography } from "./Typography";
import { Button } from "./Button";

interface ICard {
  imgsrc?: string;
  alt?: string;
  job?: string;
  company?: string;
  jobNumber?: string;
  jobType: string;
  companyLocation?: string;
  salary?: string;
  deadline?: number;
}

const CustomCard: React.FC<ICard> = ({
  imgsrc,
  alt,
  job,
  company,
  jobNumber,
  jobType,
  companyLocation,
  salary,
  deadline,
}) => {
  return (
    <div className="border rounded-2xl p-4">
      {/* 1st row  */}
      <div className="flex mb-2 items-center">
        {imgsrc && alt && (
          <div>
            <Image
              source={imgsrc}
              alternate={alt}
              className="h-14 w-14 rounded-full border-2"
            />
          </div>
        )}

        <div className="ml-6">
          <Typography label={job} weight="semibold" />
          <Typography label={company || jobNumber} />
        </div>
      </div>
      {/* 2nd row */}
      {jobType && (
        <div className="pt-2">
          <div>
            <Button
              variant="destructive"
              className="bg-teal_700 rounded-3xl py-1"
            >
              <Typography label={jobType} variant="p" className="" />
            </Button>
            <Button>{companyLocation}</Button>
            <Button>${salary} / month</Button>
          </div>

          <div className="mt-2 flex">
            <Typography
              label={deadline}
              variant="p"
              weight="semibold"
              className="text-teal_700 mr-2"
            />
            <Typography
              label="days left to apply"
              variant="p"
              weight="normal"
              className="text-gray"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCard;
