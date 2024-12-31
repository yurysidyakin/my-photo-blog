import { HTMLAttributes, ReactNode } from "react";
import { IPhoto } from "../../interfaces/photo.interface";

export interface PhotoListProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	items: IPhoto[];
}
