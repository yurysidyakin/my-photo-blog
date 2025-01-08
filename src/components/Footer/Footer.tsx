import { BASE_URL } from "../../api/api";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

function Footer({ children }: FooterProps): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-content"]}>
				<img
					className={styles["footer-logo"]}
					src={`${BASE_URL}/a7661804473461a9b0db5961557ee891adf31754/public/icon/logo-footer.svg`}
					alt="Footer logo"
				/>
				<div className={styles["footer-text"]}>
					©2024. All rights reserved.
				</div>
				<a href="https://github.com/fikyslsgg">
					<img
						src={`${BASE_URL}/a7661804473461a9b0db5961557ee891adf31754/public/icon/github-icon.svg`}
						alt="Git icon"
					/>
				</a>
			</div>
			{children}
		</footer>
	);
}

export default Footer;
