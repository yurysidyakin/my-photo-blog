import { api } from "../../api/api";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

function Footer({ children }: FooterProps): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-content"]}>
				<img
					className={styles["footer-logo"]}
					src={`${api}/a7661804473461a9b0db5961557ee891adf31754/public/icon/logo-footer.svg`}
					alt="footer-logo"
				/>
				<div className={styles["footer-text"]}>©2024. All rights reserved.</div>
				<a href="https://github.com/fikyslsgg">
					<img
						src={`${api}/a7661804473461a9b0db5961557ee891adf31754/public/icon/github-icon.svg`}
						alt="git-icon"
					/>
				</a>
			</div>
			{children}
		</footer>
	);
}

export default Footer;
