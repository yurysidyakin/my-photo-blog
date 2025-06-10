import { ChangeEvent, useEffect, useState } from "react";
import { fetchPhotos } from "../../api/api";
import PhotoList from "../../components/PhotoList/PhotoList";
import Select from "../../components/Select/Select";
import { IPhoto } from "../../interfaces/photo.interface";

function Main(): JSX.Element {
	const [photos, setPhotos] = useState<IPhoto[]>([]);
	const [filterPhotos, setFilterPhotos] = useState<IPhoto[]>([]);

	useEffect(() => {
		const loadPhotos = async () => {
			try {
				const data = await fetchPhotos();
				setPhotos(data);
				setFilterPhotos(data);
			} catch (error) {
				console.error("Failed to load photos:", error);
			}
		};
		loadPhotos();
	}, []);

	const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;
		let filteredItems = photos;

		if (newValue && newValue !== "все фотографии") {
			filteredItems = photos.filter((el) => el.film === newValue);
		}

		setFilterPhotos(filteredItems);
	};

	return (
		<main>
			<Select onChange={updateFilter} />
			<PhotoList items={filterPhotos} />
		</main>
	);
}

export default Main;
