import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { SignupSchema } from "../utils/zod";
import { ValidatedInput } from "@/components/ui/ValidatedInput";
import useMutate from "@/customHook/useMutate";
import { Link, useNavigate } from "react-router-dom";

type SignupFormInputs = z.infer<typeof SignupSchema>;

const Signup: React.FC = () => {
  const navigate = useNavigate();
  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(SignupSchema),
  });

  const mutation = useMutate("register");

  const onSubmit = (userCredentials: SignupFormInputs) => {
    mutation.mutate(userCredentials);
    console.log("Signup data:", userCredentials);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-4">
      <Typography label="Signup" variant="h2" weight="bold" className="mb-4" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidatedInput
          placeholder="Name"
          type="name"
          name="name"
          register={register}
          error={errors.name}
        />
        <ValidatedInput
          placeholder="Email"
          type="email"
          name="email"
          register={register}
          error={errors.email}
        />
        <ValidatedInput
          placeholder="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password}
        />
        <ValidatedInput
          placeholder="Confirm Password"
          type="password"
          name="password_confirmation"
          register={register}
          error={errors.password_confirmation}
        />
        <ValidatedInput
          placeholder="Skills"
          type="skills"
          name="skills"
          register={register}
          error={errors.skills}
        />
        <div className="flex justify-center ">
          <Button
            variant="secondary"
            type="submit"
            className="px-10 bg-teal_700 rounded-3xl "
          >
            <Typography
              label="Signup"
              className="text-white "
              weight="semibold"
            />
          </Button>
        </div>
        <div className="text-center mt-2">
          {mutation.isError && <p>Error: Email already exists</p>}
          {mutation.isSuccess && <p>Signup successful!</p>}
        </div>
      </form>
      <div className="flex justify-center">
        <Typography
          label="Already have an account? "
          variant="p"
          weight="normal"
          className="mt-4 text-center mr-1"
        />
        <Link to="/login">
          <Typography
            label="Login "
            variant="p"
            weight="bold"
            className="mt-4 text-center cursor-pointer underline underline-offset-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Signup;
