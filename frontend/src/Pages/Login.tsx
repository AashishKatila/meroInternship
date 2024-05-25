import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { LoginSchema } from "../utils/zod";
import { ValidatedInput } from "@/components/ui/ValidatedInput";

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

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data:", data);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Typography label="Login" variant="h1" weight="bold" className="mb-4" />
      <form onSubmit={handleSubmit(onSubmit)} className="mb-2">
        <div className="mb-4">
          <ValidatedInput
            placeholder="Email"
            type="email"
            name="email"
            register={register}
            error={errors.email}
          />
        </div>
        <div className="mb-4">
          <ValidatedInput
            placeholder="Password"
            type="password"
            name="password"
            register={register}
            error={errors.password}
          />
        </div>
        <div className="flex justify-center">
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
      </form>
      <div className="flex justify-center">
        <Typography
          label="Don't have an account? "
          variant="p"
          weight="normal"
          className="mt-4 text-center mr-1"
        />
        <Typography
          label="Signup "
          variant="p"
          weight="bold"
          className="mt-4 text-center"
        />
      </div>
    </div>
  );
};

export default Login;
