import styles from "./User.module.css";
import { UserProps } from "./User.props";

function User({ name = "username", children }: UserProps): JSX.Element {
	return (
		<div className={styles.user}>
			<img
				className={styles.icon}
				src="/my-photo-blog/public/icon/user-icon.svg"
				alt="user"
			/>
			<div className={styles.name}>{name}</div>
			{children}
		</div>
	);
}

export default User;
