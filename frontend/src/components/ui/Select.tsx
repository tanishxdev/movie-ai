import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  icon?: React.ReactNode;
}

export function Select({ label, icon, className, id, children, ...props }: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={selectId} className="text-sm font-medium text-text-muted">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-faint">
            {icon}
          </span>
        )}
        <select
          id={selectId}
          className={cn(
            "w-full appearance-none rounded-xl border border-border bg-surface py-3 pr-10 text-sm font-medium text-text outline-none transition-colors hover:border-border-strong focus-visible:border-violet-soft",
            icon ? "pl-10" : "pl-4",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-text-faint"
        />
      </div>
    </div>
  );
}
