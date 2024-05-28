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
  ({ className, name, type, register, error, ...props }) => {
    return (
      <div className="mb-4">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input px-3 bg-background text-sm ring-offset-background placeholder:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
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
      </div>
    );
  }
);
ValidatedInput.displayName = "ValidatedInput";

export { ValidatedInput };
