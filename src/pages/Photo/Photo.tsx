import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, fetchPhotos } from "../../api/api";
import { getImageUrl } from "../../helpers/getImageUrl";
import { IPhoto } from "../../interfaces/photo.interface";
import styles from "./Photo.module.css";
import { PhotoProps } from "./Photo.props";

function Photo({ children }: PhotoProps): JSX.Element {
	const { id } = useParams();
	const [photo, setPhoto] = useState<IPhoto | null>(null);

	useEffect(() => {
		const loadPhoto = async () => {
			try {
				const photos = await fetchPhotos();
				const foundPhoto = photos.find((p) => p._id === id);
				setPhoto(foundPhoto || null);
			} catch (error) {
				console.error("Ошибка загрузки фотографии:", error);
				setPhoto(null);
			}
		};
		loadPhoto();
	}, [id]);

	if (!photo) {
		return <div>Фотография не найдена</div>;
	}

	return (
		<div className={styles["photo-card"]}>
			<img
				className={styles["photo"]}
				// src={
				// 	String(photo.path).startsWith("http")
				// 		? String(photo.path)
				// 		: `${api}/${String(photo.path).replace(/^\/+/, "")}`
				// }
				src={getImageUrl(String(photo.path), API_URL)}
				alt="photo"
			/>
			<div className={styles["photo_desc"]}>
				<div className={styles["photo_item"]}>
					<img className={styles["icon"]} src="/icons/camera-icon.svg" alt="camera-icon" />
					<div>{photo.camera}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img className={styles["icon"]} src="/icons/film-icon.svg" alt="film-icon" />
					<div>{photo.film}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img className={styles["icon"]} src="/icons/location-icon.svg" alt="location-icon" />
					<div className={styles["photo_text"]}>{photo.location}</div>
				</div>
				<div className={styles["photo_item"]}>
					<img className={styles["icon"]} src="/icons/lens-icon.svg" alt="lens-icon" />
					<div className={styles["photo_text"]}>{photo.lens}</div>
				</div>
			</div>
			{children}
		</div>
	);
}

export default Photo;
