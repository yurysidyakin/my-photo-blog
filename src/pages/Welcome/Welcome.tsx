import styles from "./Welcome.module.css";

function Main() {
	return (
		<div className={styles["welcome"]}>
			<div className={styles["animation"]}>
				<img
					className={styles["welcome-logo"]}
					src="my-photo-blog/public/icon/welcome-logo.svg"
					alt="welcome-logo"
				/>
				<img
					className={styles["welcome-icon"]}
					src="my-photo-blog/public/icon/welcome-icon.svg"
					alt="welcome-icon"
				/>
			</div>
		</div>
	);
}

export default Main;
