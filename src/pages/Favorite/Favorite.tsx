import { useSelector } from "react-redux";
import PhotoList from "../../components/PhotoList/PhotoList";
import { RootState } from "../../store/store";
import styles from "./Favorite.module.css";
import { FavoriteProps } from "./Favorite.props";

function Favorite({ children }: FavoriteProps): JSX.Element {
	const photos = useSelector((s: RootState) => s.favorite.photos);

	return (
		<section className={styles.favorite}>
			<PhotoList items={photos}></PhotoList>
			{children}
		</section>
	);
}

export default Favorite;
