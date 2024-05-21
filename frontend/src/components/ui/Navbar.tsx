import { Button } from "./Button";
import { Typography } from "./Typography";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <Typography variant="h6" weight="semibold" className="text-teal_700">
          Job Portal
        </Typography>
      </div>
      <div>
        <Button variant="link">
          <Typography weight="semibold">Home</Typography>
        </Button>
        <Button variant="link">
          <Typography weight="semibold">Jobs</Typography>
        </Button>
        <Button variant="link">
          <Typography weight="semibold">Category</Typography>
        </Button>
      </div>
      <div>
        <Button variant="outline" className="rounded-full mr-2">
          Login / Signup
        </Button>
        <Button className="bg-teal_700 text-white rounded-full ml-2">
          Post a Job
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
