import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color,border-color] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/40 disabled:pointer-events-none disabled:opacity-40 active:enabled:scale-95 min-h-11",
  {
    variants: {
      variant: {
        primary: "bg-fg text-ink hover:opacity-90",
        paper: "bg-paper text-ink hover:opacity-90",
        ghost:
          "bg-transparent text-fg border border-line hover:bg-surface",
        ink: "bg-ink text-paper hover:opacity-90",
        stamp: "bg-stamp text-paper hover:opacity-90",
      },
      size: {
        md: "rounded-[var(--radius-sm)] px-4 text-sm",
        lg: "rounded-[var(--radius-md)] px-5 text-sm",
        sm: "rounded-[var(--radius-sm)] px-3 text-xs min-h-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
