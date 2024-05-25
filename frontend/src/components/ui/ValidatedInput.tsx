import * as React from "react";

import { cn } from "@/lib/utils";
import { FieldError, UseFormRegister } from "react-hook-form";
import { Typography } from "./Typography";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const ValidatedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, type, placeholder, register, error, ...props }) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500" : "",
            className
          )}
          {...register(name)}
          {...props}
        />
        {error && (
          <Typography
            label={error.message}
            variant="smallText"
            weight="light"
            className="text-red-500 mt-1"
          />
        )}
      </>
    );
  }
);
ValidatedInput.displayName = "ValidatedInput";

export { ValidatedInput };
