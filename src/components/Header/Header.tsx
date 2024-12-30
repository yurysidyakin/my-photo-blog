import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

function Header({ children }: HeaderProps) {
	return (
		<header className={styles.header}>
			{children}
			<Logo />
			<Menu />
		</header>
	);
}

export default Header;
