import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../api/api";
import { getImageUrl } from "../../helpers/getImageUrl";
import { IPhoto } from "../../interfaces/photo.interface";
import { favoriteActions } from "../../store/favorite.slice";
import { AppDispatch, RootState } from "../../store/store";
import Like from "../Like/Like";
import styles from "./PhotoList.module.css";
import { PhotoListProps } from "./PhotoList.props";

function PhotoList({ children, items, ...props }: PhotoListProps): JSX.Element {
	const dispatch = useDispatch<AppDispatch>();

	const favorites = useSelector((state: RootState) => state.favorite.photos);

	const isFavorite = (_id: string) => favorites.some((photo: IPhoto) => photo._id === _id);

	const toggle = (photo: IPhoto) => {
		dispatch(favoriteActions.toggle(photo));
	};

	return (
		<div className={styles.main} {...props}>
			{items.map((photo) => (
				<div key={photo._id} className={styles.wrapper}>
					<NavLink to={`/photo/${photo._id}`}>
						<img
							// src={
							// 	String(photo.path).startsWith("http")
							// 		? String(photo.path)
							// 		: `${API_URL}/${String(photo.path).replace(/^\/+/, "")}`
							// }
							src={getImageUrl(String(photo.path), API_URL)}
							alt="photo"
							loading="lazy"
							className={styles.photo}
						/>
					</NavLink>
					<div className={styles.desc}>
						<div className={styles.item}>
							<img className={styles.icon} src="/icons/camera-icon.svg" alt="camera-icon" />
							{photo.camera}
						</div>
						<div className={styles.item}>
							<img className={styles.icon} src="/icons/film-icon.svg" alt="film-icon" />
							{photo.film}
						</div>
						<div className={styles.item}>
							<button className={styles["button-like"]} onClick={() => toggle(photo)}>
								<Like active={isFavorite(photo._id || "")} />
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
