import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.props";

function Logo({ ...props }: LogoProps): JSX.Element {
	return <img {...props} src="/icons/logo.svg" alt="logo-icon" className={styles.logo} />;
}

export default Logo;
