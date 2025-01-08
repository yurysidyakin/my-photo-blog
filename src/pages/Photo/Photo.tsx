import { useParams } from "react-router-dom";
import { BASE_URL } from "../../api/api";
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
				src={`${BASE_URL}/refs/heads/main/${photo.path}`}
				alt="photo"
			/>
			<div className={styles["photo_desc"]}>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src={`${BASE_URL}/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/camera-icon.svg`}
						alt="camera"
					/>
					<div>{photo.camera}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src={`${BASE_URL}/d481911a18489a77f96195f34f3f6bcd967edceb/public/icon/film-icon.svg`}
						alt="film"
					/>
					<div>{photo.film}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src={`${BASE_URL}/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/location-icon.svg`}
						alt="location"
					/>
					<div className={styles["photo_text"]}>{photo.location}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src={`${BASE_URL}/d481911a18489a77f96195f34f3f6bcd967edceb/public/icon/lens-icon.svg`}
						alt="lens"
					/>
					<div className={styles["photo_text"]}>{photo.lens}</div>
				</div>
			</div>
			{children}
		</div>
	);
}

export default Photo;
