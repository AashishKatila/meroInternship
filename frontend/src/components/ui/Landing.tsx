import Searchbar from "./Searchbar";
import { Typography } from "./Typography";

const Landing = () => {
  return (
    <div className="grid grid-cols-4 pt-6 items-center">
      <div className="flex justify-center">1</div>
      <div className="col-span-2 flex flex-col items-center justify-center h-[550px] ">
        <Typography label="Find & Hire" variant="h3" weight="semibold" />
        <Typography
          label="Experts for any job"
          variant="h3"
          weight="semibold"
        />
        <Typography
          label="Job & Job search, Find jobs globally. Executive jobs and work."
          className="text-gray pt-4"
        />
        <Searchbar label="Search" />
        <div className="flex pt-2 items-center">
          <Typography weight="semibold" label="Popular : " />
          <Typography
            label="Design, Art, Business, Video Editing"
            variant="p"
            weight="light"
            className="text-gray ml-1"
          />
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Landing;
