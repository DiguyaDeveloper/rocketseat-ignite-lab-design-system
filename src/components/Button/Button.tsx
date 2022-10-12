import clsx from "clsx";
import { ButtonProps } from "./Button.interface";
import { Slot } from "@radix-ui/react-slot";

export function Button({ children, asChild }: ButtonProps) {
  const Tag = asChild ? Slot : "button";
  return (
    <Tag
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
      )}
    >
      {children}
    </Tag>
  );
}
