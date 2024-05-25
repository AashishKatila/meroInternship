import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Typography } from "./Typography";
import { Input } from "./Input";

interface ISearchbar {
  label: string;
}

const Searchbar: React.FC<ISearchbar> = ({ label }) => {
  return (
    <div className="relative w-[70%] pt-4">
      <Input placeholder="Search your dream job " />
      <Button
        size="sm"
        className={cn("absolute right-1 bottom-1 bg-teal_700 outline-none")}
      >
        <Typography variant="p" className="text-white">
          {label}
        </Typography>
      </Button>
    </div>
  );
};

export default Searchbar;
