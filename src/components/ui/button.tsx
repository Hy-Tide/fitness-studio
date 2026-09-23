import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-3 border text-xs font-bold uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
        primary: "border-primary bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
        outline: "border-foreground/35 bg-transparent text-foreground hover:border-primary hover:text-primary",
        ghost: "border-transparent bg-transparent text-foreground hover:text-primary",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "min-h-0 border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-12 px-6",
        sm: "min-h-9 px-3",
        lg: "min-h-14 px-8",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { asChild, className, variant, size, ...props },
  ref,
) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});