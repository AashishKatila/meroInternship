import React from "react";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { ValidatedInput } from "@/components/ui/ValidatedInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CompanyLoginSchema } from "../../utils/zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { authCompany } from "@/redux/companyAuthSlice";

type CompanyLoginFormInputs = z.infer<typeof CompanyLoginSchema>;

const CompanyLogin: React.FC = () => {
  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyLoginFormInputs>({
    resolver: zodResolver(CompanyLoginSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onSubmit = (companyCredentials: CompanyLoginFormInputs) => {
    console.log("Login data:", companyCredentials);
    dispatch(authCompany({ companyCredentials }))
      .unwrap()
      .then((result) => {
        if (result) {
          navigate("/company/dashboard");
        }
      });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-4">
      <Typography label="Login" variant="h2" weight="bold" className="mb-4" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidatedInput
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email}
          className="mb-4 "
        />
        <ValidatedInput
          placeholder="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />
        <div className="flex justify-center ">
          <Button
            variant="secondary"
            type="submit"
            className="px-10 bg-teal_700 rounded-3xl "
          >
            <Typography
              label="Login"
              className="text-white "
              weight="semibold"
            />
          </Button>
        </div>
        <div className="text-center mt-2">
          {/* {auth.isError && <p>Error: {auth.isError}</p>} */}
          {/* {auth.isSuccess && <p>Login successful!</p>} */}
        </div>
      </form>
      <div className="flex justify-center">
        <Typography
          label="Don't have an account? "
          variant="p"
          weight="normal"
          className="mt-4 text-center mr-1"
        />
        <Link to="/signup">
          <Typography
            label="Signup "
            variant="p"
            weight="bold"
            className="mt-4 text-center cursor-pointer underline underline-offset-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default CompanyLogin;
