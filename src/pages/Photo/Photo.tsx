import { Link, useParams } from "react-router-dom";
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
			<Link to={"/my-photo-blog"} className={styles["back"]}>
				назад...
			</Link>
			<img
				className={styles["photo"]}
				src={`/my-photo-blog${photo.path}`}
				alt="photo"
			/>
			<div className={styles["photo_desc"]}>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src="/my-photo-blog/public/icon/camera-icon.svg"
						alt="camera"
					/>
					<div>{photo.camera}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src="/my-photo-blog/public/icon/film-icon.svg"
						alt="film"
					/>
					<div>{photo.film}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img
						className={styles["icon"]}
						src="/my-photo-blog/public/icon/location-icon.svg"
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
