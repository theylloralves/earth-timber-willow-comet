import { amazonSearch, bestBuySearch } from "@/lib/links";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BuyLinks({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <a
        href={amazonSearch(title)}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ variant: "paper", size: "lg" }), "w-full")}
      >
        Check Amazon
      </a>
      <a
        href={bestBuySearch(title)}
        target="_blank"
        rel="noreferrer"
        className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "w-full")}
      >
        Check Best Buy
      </a>
    </div>
  );
}
