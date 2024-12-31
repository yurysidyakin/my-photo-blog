import { HTMLAttributes, ReactNode } from "react";

export interface PhotoProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}
