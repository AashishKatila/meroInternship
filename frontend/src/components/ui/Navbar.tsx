import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <Typography
          variant="h6"
          weight="semibold"
          className={cn("text-teal_700")}
        >
          Intern Portal
        </Typography>
      </div>
      <div>
        <Button variant="link">
          <Typography weight="semibold" label="Home" />
        </Button>
        <Button variant="link">
          <Typography weight="semibold" label="Jobs" />
        </Button>
        <Button variant="link">
          <Typography weight="semibold" label="Category" />
        </Button>
      </div>
      <div>
        <Link to="/login">
          <Button variant="outline" className="rounded-full mr-2">
            Login / Signup
          </Button>
        </Link>
        <Button className="bg-teal_700 text-white rounded-full ml-2">
          Post a Job
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
