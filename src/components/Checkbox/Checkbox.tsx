import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckboxProps } from "./Checkbox.interface";
import { Check } from "phosphor-react";

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p[2px] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500"></Check>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
