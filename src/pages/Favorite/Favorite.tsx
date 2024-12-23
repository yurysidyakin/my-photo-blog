import { NavLink } from 'react-router';
import styles from './Favorite.module.css';

function Favorite() {
	return (
		<div className={styles.favorite}>
			<NavLink to='/' className={styles['back-link']}>
				Вернуться на главную
			</NavLink>
		</div>
	);
}

export default Favorite;
