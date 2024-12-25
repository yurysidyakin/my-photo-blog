import { useSelector } from 'react-redux';
import MenuList from '../../components/MenuList/MenuList';
import { RootState } from '../../store/store';
import styles from './Favorite.module.css';

function Favorite() {
	const photos = useSelector((s: RootState) => s.favorite.photos);

	return (
		<section className={styles.favorite}>
			<MenuList items={photos}></MenuList>
		</section>
	);
}

export default Favorite;
