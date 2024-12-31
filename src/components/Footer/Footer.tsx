import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";

function Footer({ children }: FooterProps): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer-content"]}>
				<img
					className={styles["footer-logo"]}
					src="/my-photo-blog/public/icon/logo-footer.svg"
					alt="Footer logo"
				/>
				<div className={styles["footer-text"]}>
					©2024. All rights reserved.
				</div>
				<a href="https://github.com/fikyslsgg">
					<img
						src="/my-photo-blog/public/icon/github-icon.svg"
						alt="Git icon"
					/>
				</a>
			</div>
			{children}
		</footer>
	);
}

export default Footer;
