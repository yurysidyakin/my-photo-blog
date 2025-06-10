import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { photodb } from "../../db/photodb";
import styles from "./Photo.module.css";
import { PhotoProps } from "./Photo.props";

function Photo({ children }: PhotoProps): JSX.Element {
	const { id } = useParams();
	const photo = photodb.find((photo) => String(photo._id) === id);

	if (!photo) {
		return <div>Фотография не найдена</div>;
	}
	return (
		<div className={styles["photo-card"]}>
			<img className={styles["photo"]} src={`${api}main/${photo.path}`} alt="photo" />
			<div className={styles["photo_desc"]}>
				<div className={styles["photo_item"]}>
					<img className={styles["icon"]} src="public/icons/camera-icon.svg" alt="camera-icon" />
					<div>{photo.camera}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img className={styles["icon"]} src="public/icons/film-icon.svg" alt="film-icon" />
					<div>{photo.film}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src="public/icons/location-icon.svg"
						alt="location-icon"
					/>
					<div className={styles["photo_text"]}>{photo.location}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img className={styles["icon"]} src="public/icons/lens-icon.svg" alt="lens-icon" />
					<div className={styles["photo_text"]}>{photo.lens}</div>
				</div>
			</div>
			{children}
		</div>
	);
}

export default Photo;
