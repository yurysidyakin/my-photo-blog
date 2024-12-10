import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

function Footer({ children }: FooterProps) {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer-content']}>
				<img src='/public/icon/logo-footer.svg' alt='logo footer' />
				<div className={styles['footer-text']}>©2024. All rights reserved.</div>
				<a href='#'>
					<img src='/public/icon/github-icon.svg' alt='Git icon' />
				</a>
			</div>

			{children}
		</footer>
	);
}

export default Footer;
