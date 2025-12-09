import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        active: "border-transparent bg-primary/15 text-primary font-bold uppercase tracking-wide",
        critical: "border-transparent bg-critical/15 text-critical font-bold uppercase tracking-wide animate-pulse",
        resolved: "border-transparent bg-success/15 text-success font-bold uppercase tracking-wide",
        expired: "border-transparent bg-muted text-muted-foreground font-bold uppercase tracking-wide",
        missing: "border-primary/30 bg-primary/10 text-primary",
        endangered: "border-critical/30 bg-critical/10 text-critical",
        abduction: "border-critical/30 bg-critical/10 text-critical",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
