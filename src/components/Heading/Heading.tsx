import clsx from "clsx";
import { HeadingProps } from "./Heading.interface";
import { Slot } from "@radix-ui/react-slot";

export function Heading({
  size = "md",
  children,
  asChild,
  className,
}: HeadingProps) {
  const Tag = asChild ? Slot : "h2";
  return (
    <Tag
      className={clsx(
        "text-gray-100 font-bold font-sans",
        {
          "text-lg": size === "sm",
          "text-xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Tag>
  );
}
