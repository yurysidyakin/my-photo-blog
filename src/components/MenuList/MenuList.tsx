import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router';
import { photodb } from '../../db/photodb';
import { IPhoto } from '../../interfaces/photo.interface';
import Select from '../Select/Select';
import styles from './MenuList.module.css';
import { MenuListProps } from './MenuList.props';

function MenuList({ children, ...props }: MenuListProps) {
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
		<>
			<Select onChange={updateFilter} />
			<main className={styles.main} {...props}>
				{filterPhotos
					.sort(() => Math.random() - 0.5)
					.map(photo => (
						<Link
							to={`/photo/${photo.id}`}
							key={photo.id}
							className={styles.wrapper}
						>
							<img src={photo.path} alt='photo' className={styles.photo} />
							<div className={styles.desc}>
								<div className={styles.item}>
									<img
										className={styles.icon}
										src='/public/icon/camera-icon.png'
										alt='camera-icon'
									/>
									{photo.camera}
								</div>
								<div className={styles.item}>
									<img
										className={styles.icon}
										src='/public/icon/plenka-icon.png'
										alt='plenka-icon'
									/>
									{photo.plenka}
								</div>
							</div>
						</Link>
					))}
				{children}
			</main>
		</>
	);
}

export default MenuList;
