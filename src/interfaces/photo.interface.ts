export interface IPhoto {
	id?: number | string;
	_id?: string;
	path: string;
	camera: string;
	film: string;
	lens: string;
	location: string;
	count?: number;
}
