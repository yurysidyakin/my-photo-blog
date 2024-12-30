import { ReactNode } from "react";
import styles from "./Logo.module.css";

function Logo(): ReactNode {
	return <img src="/public/icon/logo.svg" alt="logo" className={styles.logo} />;
}

export default Logo;
