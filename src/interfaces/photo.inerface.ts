import { HTMLAttributes } from 'react';

export interface IPhoto extends HTMLAttributes<HTMLDivElement> {
	id: string;
	path: string;
	camera: string;
	plenka: string;
}
