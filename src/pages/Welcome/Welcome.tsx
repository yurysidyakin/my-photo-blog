import styles from "./Welcome.module.css";

function Welcome() {
	return (
		<div className={styles["welcome"]}>
			<div className={styles["animation"]}>
				<img className={styles["welcome-logo"]} src="/icons/welcome-logo.svg" alt="welcome-logo" />
				<img className={styles["welcome-icon"]} src="/icons/welcome-icon.svg" alt="welcome-icon" />
			</div>
		</div>
	);
}

export default Welcome;
