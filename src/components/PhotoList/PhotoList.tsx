import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { BASE_URL } from "../../api/api";
import { IPhoto } from "../../interfaces/photo.interface";
import { favoriteActions } from "../../store/favorite.slice";
import { AppDispatch, RootState } from "../../store/store";
import Like from "../Like/Like";
import styles from "./PhotoList.module.css";
import { PhotoListProps } from "./PhotoList.props";

function PhotoList({ children, items, ...props }: PhotoListProps): JSX.Element {
	const dispatch = useDispatch<AppDispatch>();

	const favorites = useSelector((state: RootState) => state.favorite.photos);

	const isFavorite = (id: number) => favorites.some((photo: IPhoto) => photo.id === id);

	const toggle = (photo: IPhoto) => {
		dispatch(favoriteActions.toggle(photo));
	};

	return (
		<div className={styles.main} {...props}>
			{items.map((photo) => (
				<div key={photo.id || photo._id} className={styles.wrapper}>
					<NavLink to={`/my-photo-blog/photo/${String(photo.id || photo._id)}`}>
						<img
							src={
								String(photo.path).startsWith("http")
									? String(photo.path)
									: `${BASE_URL}/${String(photo.path).replace(/^\/+/, "")}`
							}
							alt="photo"
							loading="lazy"
							className={styles.photo}
						/>
					</NavLink>
					<div className={styles.desc}>
						<div className={styles.item}>
							<img
								className={styles.icon}
								src={`${BASE_URL}/9ecf9fa5d9f265fcb4f28446c8dda2f0f8e55390/public/icon/camera-icon.svg`}
								alt="camera-icon"
							/>
							{photo.camera}
						</div>
						<div className={styles.item}>
							<img
								className={styles.icon}
								src={`${BASE_URL}/d481911a18489a77f96195f34f3f6bcd967edceb/public/icon/film-icon.svg`}
								alt="film-icon"
							/>
							{photo.film}
						</div>
						<div className={styles.item}>
							<button className={styles["button-like"]} onClick={() => toggle(photo)}>
								<Like active={isFavorite(Number(photo.id || photo._id))} />
							</button>
						</div>
					</div>
				</div>
			))}
			{children}
		</div>
	);
}

export default PhotoList;
