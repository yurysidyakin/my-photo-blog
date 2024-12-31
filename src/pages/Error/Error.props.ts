import { HTMLAttributes, ReactNode } from "react";

export interface ErrorProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}
