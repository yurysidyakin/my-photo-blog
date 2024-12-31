import styles from "./User.module.css";
import { UserProps } from "./User.props";

function User({ name = "username", children }: UserProps) {
	return (
		<div className={styles.user}>
			<img
				className={styles.icon}
				src="/public/icon/user-icon.svg"
				alt="user"
			/>
			<div className={styles.name}>{name}</div>
			{children}
		</div>
	);
}

export default User;
