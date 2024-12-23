import { ChangeEvent, useState } from 'react';
import MenuList from '../../components/MenuList/MenuList';
import Select from '../../components/Select/Select';
import { photodb } from '../../db/photodb';
import { IPhoto } from '../../interfaces/photo.interface';

function Main() {
	const [filterPhotos, setFilterPhotos] = useState<IPhoto[]>(photodb);

	const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;
		if (newValue) {
			setFilterPhotos(photodb.filter(el => el.plenka === newValue));
		} else {
			setFilterPhotos(photodb);
		}
	};
	return (
		<main>
			<Select onChange={updateFilter} />
			<MenuList items={filterPhotos} />;
		</main>
	);
}

export default Main;
