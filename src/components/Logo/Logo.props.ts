import { HTMLAttributes, ReactNode } from "react";

export interface LogoProps extends HTMLAttributes<HTMLImageElement> {
	children?: ReactNode;
}
