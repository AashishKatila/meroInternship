import { DialogContent } from "@radix-ui/react-dialog";
import React from "react";
import { Dialog, DialogFooter, DialogHeader } from "./ui/Dialog";
import { Button } from "./ui/Button";
import { X } from "lucide-react";
import { Typography } from "./ui/Typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobSchema } from "@/utils/zod";
import { z } from "zod";
import { ValidatedInput } from "./ui/ValidatedInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { postJob } from "@/redux/companyPostSlice";

type JobInputs = z.infer<typeof JobSchema>;

const CustomDialog: React.FC = ({ openModal, setJobModal, company_id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobInputs>({
    resolver: zodResolver(JobSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleCloseModal = () => {
    setJobModal(false);
  };

  const onSubmit = (jobDetails: JobInputs) => {
    // console.log(company_id);
    const jobDataWithCompanyId = { ...jobDetails, company_id };
    console.log("Detail of the job:", jobDataWithCompanyId);
    dispatch(postJob(jobDataWithCompanyId));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog open={openModal} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-[425px] border-2 border-black rounded-3xl px-4 py-2 ">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <Typography label="Add Job" weight="medium" variant="h6" />
              <X size={20} className="" onClick={handleCloseModal} />
            </div>
            <Typography
              label="Describe the job you want to post."
              weight="medium"
              variant="regularText"
              className="text-gray"
            />
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Typography
                label="Title"
                weight="medium"
                variant="regularText"
                className="text-right"
              />

              <ValidatedInput
                name="title"
                type="text"
                register={register}
                className=""
                placeholder="Title for the job"
              />
            </div>
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Typography
                label="Description"
                weight="medium"
                variant="regularText"
                className="text-right"
              />
              <ValidatedInput
                name="description"
                className="col-span-3 row-span-4 border-2 rounded-md px-2 pt-1"
                placeholder="Describe the job details"
                register={register}
              />
            </div>
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
            <div className="grid grid-cols-4 items-center gap-4">
              <Typography
                label="Due Date"
                weight="medium"
                variant="regularText"
                className="text-right"
              />
              <ValidatedInput
                type="date"
                name="due_date"
                register={register}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Typography
                label="Skills"
                weight="medium"
                variant="regularText"
                className="text-right"
              />
              <ValidatedInput
                name="skills"
                type="text"
                register={register}
                className="col-span-3"
                placeholder="Skills required"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default CustomDialog;
