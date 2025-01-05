import styles from "./Welcome.module.css";

function Main() {
	return (
		<div className={styles["welcome"]}>
			<div className={styles["animation"]}>
				<img
					className={styles["welcome-logo"]}
					src="https://raw.githubusercontent.com/fikyslsgg/my-photo-blog/6d62264fe48e494ad72f3aa6cbb39be7765a3a6a/public/icon/welcome-logo.svg"
					alt="welcome-logo"
				/>
				<img
					className={styles["welcome-icon"]}
					src="https://raw.githubusercontent.com/fikyslsgg/my-photo-blog/6d62264fe48e494ad72f3aa6cbb39be7765a3a6a/public/icon/welcome-icon.svg"
					alt="welcome-icon"
				/>
			</div>
		</div>
	);
}

export default Main;
