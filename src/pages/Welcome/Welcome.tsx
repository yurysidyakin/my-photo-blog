import styles from "./Welcome.module.css";

function Main() {
	return (
		<div className={styles["welcome"]}>
			<div className={styles["animation"]}>
				<img
					className={styles["welcome-logo"]}
					src="public/icons/welcome-logo"
					alt="welcome-logo"
				/>
				<img
					className={styles["welcome-icon"]}
					src="public/icons/welcome-icon"
					alt="welcome-icon"
				/>
			</div>
		</div>
	);
}

export default Main;
