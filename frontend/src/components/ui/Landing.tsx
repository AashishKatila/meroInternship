import Searchbar from "./Searchbar";
import { Typography } from "./Typography";

const Landing = () => {
  return (
    <div className="grid grid-cols-4 pt-6 items-center">
      <div className="flex justify-center">1</div>
      <div className="col-span-2 flex flex-col items-center justify-center h-[600px] ">
        <Typography variant="h3" weight="semibold">
          Find & Hire
        </Typography>
        <Typography variant="h3" weight="semibold">
          Experts for any job
        </Typography>
        <Typography className="text-gray pt-4">
          Job & Job search, Find jobs globally. Executive jobs and work.
        </Typography>
        <Searchbar />
        <div className="flex pt-2 items-center">
          <Typography weight="semibold">Popular : </Typography>
          <Typography variant="p" weight="light" className="text-gray ml-1">
            Design, Art, Business, Video Editing
          </Typography>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Landing;
