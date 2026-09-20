import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-[var(--radius-sm)] border border-line bg-surface px-3 text-sm text-fg placeholder:text-faint",
        "transition-[border-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/30",
        className,
      )}
      {...props}
    />
  );
}
