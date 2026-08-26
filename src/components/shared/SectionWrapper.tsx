import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export function SectionWrapper({ children, className, containerClassName, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("w-full py-12 md:py-20 lg:py-24", className)} {...props}>
      <div className={cn("container mx-auto px-4 md:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
