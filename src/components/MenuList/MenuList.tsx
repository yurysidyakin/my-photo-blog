import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router';
import { IPhoto } from '../../interfaces/photo.interface';
import { favoriteActions } from '../../store/favorite.slice';
import { AppDispatch } from '../../store/store';
import styles from './MenuList.module.css';
import { MenuListProps } from './MenuList.props';

function MenuList({ children, items, ...props }: MenuListProps) {
	const dispatch = useDispatch<AppDispatch>();

	const add = (photo: IPhoto) => {
		dispatch(favoriteActions.add(photo));
	};

	return (
		<div className={styles.main} {...props}>
			{items
				.toSorted(() => Math.random() - 0.5)
				.map(photo => (
					<div key={photo.id} className={styles.wrapper}>
						<NavLink to={`/photo/${photo.id}`}>
							<img src={photo.path} alt='photo' className={styles.photo} />
						</NavLink>
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
							<div className={styles.item}>
								<button
									className={styles['button-like']}
									onClick={() => add(photo)}
								>
									<img src='/public/icon/like-icon.svg' alt='like' />
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
