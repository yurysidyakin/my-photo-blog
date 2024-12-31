import { HTMLAttributes, ReactNode } from "react";

export interface OptionProps {
	value: string;
	label: string;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
	children?: ReactNode;
}
