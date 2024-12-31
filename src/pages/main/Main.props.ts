import { HTMLAttributes } from "react";
import { IPhoto } from "../../interfaces/photo.interface";

export interface MainProps extends HTMLAttributes<HTMLDivElement> {
	items?: IPhoto[];
}
