import { z } from "zod";

const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

export const LoginSchema = z.object({
    email: z.string().min(2,{ message: "Username must be atleast 2 characters" }).email(),
    password: z.string().min(8,{ message: "Password must be atleast 8 characters" }).regex(passwordValidation,{
              message: "Password isnot valid"})
              .max(18,{ message: "Password too long" }),
})