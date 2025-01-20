import { BASE_URL } from "../../api/api";
import styles from "./User.module.css";
import { UserProps } from "./User.props";

function User({ name = "username", children }: UserProps): JSX.Element {
	return (
		<div className={styles.user}>
			<img
				className={styles.icon}
				src={`${BASE_URL}/9ecf9fa5d9f265fcb4f28446c8dda2f0f8e55390/public/icon/user-icon.svg`}
				alt="user-icon"
			/>
			<div className={styles.name}>{name}</div>
			{children}
		</div>
	);
}

export default User;
