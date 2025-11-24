import { cn } from "@/lib/utils";

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={cn("text-center", className)}>
      <h1 className="text-4xl font-bold tracking-tight font-headline lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
