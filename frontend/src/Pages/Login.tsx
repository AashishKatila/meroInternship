import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { LoginSchema } from "../utils/zod";
import { ValidatedInput } from "@/components/ui/ValidatedInput";
import useMutate from "@/customHook/useMutate";
import { Link } from "react-router-dom";

type LoginFormInputs = z.infer<typeof LoginSchema>;

const Login: React.FC = () => {
  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const mutation = useMutate("login");

  const onSubmit = (userCredentials: LoginFormInputs) => {
    mutation.mutate(userCredentials);
    console.log("Login data:", userCredentials);
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
          {mutation.isError && <p>Error: {mutation.error.message}</p>}
          {mutation.isSuccess && <p>Login successful!</p>}
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

export default Login;
