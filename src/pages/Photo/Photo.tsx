import { useParams } from "react-router-dom";
import { photodb } from "../../db/photodb";
import styles from "./Photo.module.css";
import { PhotoProps } from "./Photo.props";

function Photo({ children }: PhotoProps): JSX.Element {
	const { id } = useParams();
	const photo = photodb.find((photo) => String(photo.id) === id);

	if (!photo) {
		return <div>Фотография не найдена</div>;
	}

	return (
		<div className={styles["photo-card"]}>
			<img
				className={styles["photo"]}
				src={`https://raw.githubusercontent.com/fikyslsgg/my-photo-blog/refs/heads/main/${photo.path}`}
				alt="photo"
			/>
			<div className={styles["photo_desc"]}>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src="https://raw.githubusercontent.com/fikyslsgg/my-photo-blog/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/camera-icon.svg"
						alt="camera"
					/>
					<div>{photo.camera}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src="https://raw.githubusercontent.com/fikyslsgg/my-photo-blog/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/film-icon.svg"
						alt="film"
					/>
					<div>{photo.film}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src="https://raw.githubusercontent.com/fikyslsgg/my-photo-blog/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/location-icon.svg"
						alt="location"
					/>
					<div className={styles["photo_text"]}>{photo.location}</div>
				</div>
			</div>
			{children}
		</div>
	);
}

export default Photo;
