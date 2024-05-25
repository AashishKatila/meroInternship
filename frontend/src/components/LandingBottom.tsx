import { Typography } from "./ui/Typography";
import iac from "../assets/landing/discover.png";
import Image from "./ui/Image";
import ACard from "./ui/CustomCard";

const LandingBottom = () => {
  const discoverJobs = [
    {
      source: iac,
      alternate: "image",
      jobTitle: "UI/UX Designer",
      jobNo: "120 jobs",
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "Frontend Developer",
      jobNo: "451 jobs",
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "ML Engineer",
      jobNo: "100 jobs",
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "Backend Developer",
      jobNo: "800 jobs",
    },
  ];
  return (
    <div className="grid grid-cols-2 py-14">
      <div>
        <Image source={iac} alternate="asdok" className="h-72 scale-x-[-1]" />
      </div>
      <div>
        <Typography variant="h5" weight="bold">
          Discover Jobs across popular roles
        </Typography>
        <Typography variant="p" weight="normal" className="text-gray">
          Select a role and we'll show you relevant jobs for it!
        </Typography>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {discoverJobs.map((job) => (
            <ACard
              imgsrc={job.source}
              alt={job.alternate}
              job={job.jobTitle}
              jobNumber={job.jobNo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingBottom;
