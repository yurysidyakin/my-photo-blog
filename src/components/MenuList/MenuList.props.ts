import { HTMLAttributes, ReactNode } from "react";
import { IPhoto } from "../../interfaces/photo.interface";

export interface MenuListProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	items: IPhoto[];
}
