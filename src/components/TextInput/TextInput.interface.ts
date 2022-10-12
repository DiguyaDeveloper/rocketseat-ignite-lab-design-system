import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}
