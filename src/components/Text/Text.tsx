import clsx from "clsx";
import { TextProps } from "./Text.interface";
import { Slot } from "@radix-ui/react-slot";

export function Text({ size = "md", children, asChild, className }: TextProps) {
  const Tag = asChild ? Slot : "span";
  return (
    <Tag
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-xs": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
        },
        className
      )}
    >
      {children}
    </Tag>
  );
}
