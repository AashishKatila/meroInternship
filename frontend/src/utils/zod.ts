import { z } from "zod";

const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8,{ message: "Password must be atleast 8 characters" }).regex(passwordValidation,{
              message: "Password isnot valid"})
              .max(18,{ message: "Password too long" }),
})

export const SignupSchema = z.object({
  name: z.string().min(2,{message:"Name must be atleast 2 characters"})
    .max(18,{message:"Name must not exceed 18characters"}),
  email: z.string().email(),
  password: z.string().min(8,{message:"Password must be atleast 8 characters"}).regex(passwordValidation,{message:"Password isnot valid"})
  .max(18,{message:"Password is too long"}),
  password_confirmation: z.string(),
  skills: z.string(),
}).refine((data) => data.password === data.password_confirmation , {message:"Passwords donot match",path:["password_confirmation"]})

// Company Auth

export const CompanyLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6,{ message: "Password must be atleast 6 characters" })
            .max(18,{ message: "Password too long" }),
})

// New Job Post by company
const dateStringPattern = /^\d{4}-\d{2}-\d{2}$/;

export const JobSchema = z.object({
  title: z.string().min(2,{message:"Job title is too short"}),
  description: z.string().min(6,{message:"Job Description is too short"}),
  due_date:  z.string()
  .refine(val => dateStringPattern.test(val)),
  skills: z.string(),
})
