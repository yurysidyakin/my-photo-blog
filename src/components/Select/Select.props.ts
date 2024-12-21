import { HTMLAttributes, ReactNode } from 'react';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
	children?: ReactNode;
}
