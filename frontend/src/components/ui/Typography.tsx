import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "text-6xl scroll-m-20 font-bold",
      h2: "text-5xl scroll-m-20 font-bold",
      h3: "text-4xl scroll-m-20 font-bold",
      h4: "text-3xl scroll-m-20 font-bold",
      h5: "text-2xl scroll-m-20 font-bold",
      h6: "text-xl scroll-m-20 font-bold",
      p: "leading-7 ",
      regularText: "text-base",
      largeText: "text-lg font-semibold",
      smallText: "text-sm leading-none",
    },
    weight: {
      bold: "!font-bold",
      semibold: "!font-semibold",
      normal: "!font-normal",
      medium: "!font-medium",
      light: "!font-light",
    },
  },
  defaultVariants: {
    variant: "regularText",
    weight: "normal",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  largeText: "div",
  regularText: "div",
  smallText: "small",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: string;
  label?: string | number;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, label, variant, weight, as, asChild, children, ...props },
    ref
  ) => {
    const Comp = asChild
      ? Slot
      : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
    return (
      <Comp
        className={cn(typographyVariants({ variant, weight, className }))}
        ref={ref}
        {...props}
      >
        {label ?? children}
      </Comp>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
