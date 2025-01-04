import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.props";

function Logo({ ...props }: LogoProps): JSX.Element {
	return (
		<img
			{...props}
			src="https://raw.githubusercontent.com/fikyslsgg/my-photo-blog/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/logo.svg"
			alt="logo"
			className={styles.logo}
		/>
	);
}

export default Logo;
