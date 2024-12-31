import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.props";

function Logo({ ...props }: LogoProps): JSX.Element {
	return (
		<img
			{...props}
			src="/my-photo-blog/public/icon/logo.svg"
			alt="logo"
			className={styles.logo}
		/>
	);
}

export default Logo;
