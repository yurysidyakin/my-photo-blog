import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

function Footer({ children }: FooterProps): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-content"]}>
				<img className={styles["footer-logo"]} src="icons/logo-footer.svg" alt="footer-logo" />
				<div className={styles["footer-text"]}>©2024. All rights reserved.</div>
				<a href="https://github.com/fikyslsgg">
					<img src="icons/github-icon.svg" alt="git-icon" />
				</a>
			</div>
			{children}
		</footer>
	);
}

export default Footer;
