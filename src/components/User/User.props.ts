import { HTMLAttributes, ReactNode } from "react";

export interface UserProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	name?: string;
}
