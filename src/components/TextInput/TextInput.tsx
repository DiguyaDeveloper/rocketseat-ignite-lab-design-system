import { TextInputProps, TextInputRootProps } from "./TextInput.interface";
import { Slot } from "@radix-ui/react-slot";

function TextInputIcon(props: TextInputRootProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

function TextInputInput(props: TextInputProps) {
  return (
    <input
      className={
        "bg-transparent flex-1 text-gray-100 text-sm placeholder:text-gray-400 outline-none"
      }
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

/**
 * Composite pattern of React
 *
 * Structure your components so that they complement each other
 */
export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
