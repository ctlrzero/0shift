import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openValue: string | null;
  setOpenValue: (v: string | null) => void;
  type?: "single" | "multiple";
  collapsible?: boolean;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export const Accordion: React.FC<{
  children: React.ReactNode;
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
}> = ({ children, type = "single", collapsible = true, className }) => {
  const [openValue, setOpenValue] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue, type, collapsible }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) return null;
  const isOpen = ctx.openValue === value;
  return (
    <div data-value={value} className="border-b">
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        // inject isOpen prop into content/trigger if needed
        return React.cloneElement(child, { itemValue: value, isOpen });
      })}
    </div>
  );
};

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, any>(function AccordionTrigger(
  { children, className, itemValue, isOpen, ...props },
  ref,
) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) return null;

  const toggle = () => {
    if (ctx.type === "single") {
      if (isOpen) {
        if (ctx.collapsible) ctx.setOpenValue(null);
      } else {
        ctx.setOpenValue(itemValue);
      }
    }
  };

  return (
    <button
      ref={ref}
      onClick={toggle}
      className={cn("flex w-full items-center justify-between py-4 text-left text-sm font-medium", className)}
      aria-expanded={isOpen}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "") as string} />
    </button>
  );
});

export const AccordionContent = ({ children, isOpen }: { children: React.ReactNode; isOpen?: boolean }) => {
  return (
    <div className={cn("overflow-hidden text-sm transition-all", isOpen ? "max-h-96 py-3" : "max-h-0")}>{children}</div>
  );
};

AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";

export default Accordion;
