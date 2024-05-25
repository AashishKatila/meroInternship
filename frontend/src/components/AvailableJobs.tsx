import { Typography } from "./ui/Typography";
import iac from "../assets/landing/discover.png";
import CustomCard from "./ui/CustomCard";

const AvailableJobs = () => {
  const availableJobs = [
    {
      source: iac,
      alternate: "image",
      jobTitle: "UI/UX Designer",
      company: "Codse pvt ltd",
      jobType: "Full time",
      companyLocation: "New Road",
      salary: "400",
      deadline: 50,
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "UI/UX Designer",
      company: "Codse pvt ltd",
      jobType: "Full time",
      companyLocation: "New Road",
      salary: "400",
      deadline: 50,
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "UI/UX Designer",
      company: "Codse pvt ltd",
      jobType: "Full time",
      companyLocation: "New Road",
      salary: "400",
      deadline: 50,
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "UI/UX Designer",
      company: "Codse pvt ltd",
      jobType: "Full time",
      companyLocation: "New Road",
      salary: "400",
      deadline: 50,
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "UI/UX Designer",
      company: "Codse pvt ltd",
      jobType: "Full time",
      companyLocation: "New Road",
      salary: "400",
      deadline: 50,
    },
    {
      source: iac,
      alternate: "image",
      jobTitle: "UI/UX Designer",
      company: "Codse pvt ltd",
      jobType: "Full time",
      companyLocation: "New Road",
      salary: "400",
      deadline: 50,
    },
  ];
  return (
    <div className="px-20 py-10">
      <Typography label="Hot Jobs" variant="h4" weight="semibold" />
      <Typography
        label="50k+ jobs for you to explore"
        variant="p"
        weight="normal"
        className="text-gray"
      />

      <div className="grid grid-cols-3 mt-6 gap-6 pb-2 ">
        {availableJobs.map((job) => (
          <CustomCard
            imgsrc={job.source}
            alt={job.alternate}
            job={job.jobTitle}
            company={job.company}
            jobType={job.jobTitle}
            companyLocation={job.companyLocation}
            salary={job.salary}
            deadline={job.deadline}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Typography
          label="View all jobs"
          weight="semibold"
          className="pt-8  text-teal_800 underline underline-offset-4 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AvailableJobs;
