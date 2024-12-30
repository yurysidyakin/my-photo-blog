import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router';
import { IPhoto } from '../../interfaces/photo.interface';
import { favoriteActions } from '../../store/favorite.slice';
import { AppDispatch, RootState } from '../../store/store';
import Like from '../Like/Like';
import styles from './MenuList.module.css';
import { MenuListProps } from './MenuList.props';

function MenuList({ children, items, ...props }: MenuListProps) {
	const dispatch = useDispatch<AppDispatch>();

	const favorites = useSelector((state: RootState) => state.favorite.photos);

	const isFavorite = (id: number) =>
		favorites.some((photo: IPhoto) => photo.id === id);

	const toggle = (photo: IPhoto) => {
		dispatch(favoriteActions.toggle(photo));
	};

	return (
		<div className={styles.main} {...props}>
			{items.map(photo => (
				<div key={photo.id} className={styles.wrapper}>
					<NavLink to={`/photo/${photo.id}`}>
						<img
							src={photo.path}
							alt='photo'
							loading='lazy'
							className={styles.photo}
						/>
					</NavLink>
					<div className={styles.desc}>
						<div className={styles.item}>
							<img
								className={styles.icon}
								src='/public/icon/camera-icon.svg'
								alt='camera-icon'
							/>
							{photo.camera}
						</div>
						<div className={styles.item}>
							<img
								className={styles.icon}
								src='/public/icon/plenka-icon.svg'
								alt='plenka-icon'
							/>
							{photo.film}
						</div>
						<div className={styles.item}>
							<button
								className={styles['button-like']}
								onClick={() => toggle(photo)}
							>
								<Like active={isFavorite(photo.id)} />
							</button>
						</div>
					</div>
				</div>
			))}
			{children}
		</div>
	);
}

export default MenuList;
