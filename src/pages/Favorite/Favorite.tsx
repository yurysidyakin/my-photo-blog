import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import MenuList from '../../components/MenuList/MenuList';
import { RootState } from '../../store/store';
import styles from './Favorite.module.css';

function Favorite() {
	const photos = useSelector((s: RootState) => s.favorite.photos);

	return (
		<div className={styles.favorite}>
			<NavLink to='/' className={styles['back-link']}>
				Вернуться на главную
			</NavLink>
			<MenuList items={photos}></MenuList>
			{/* {photos.map(photo => (
					<li key={photo.id}>
						<img src={photo.path} alt='#' />
					</li>
				))} */}
		</div>
	);
}

export default Favorite;
