import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

function Header({ children }: HeaderProps): JSX.Element {
	return (
		<header className={styles.header}>
			{children}
			<NavLink to="/my-photo-blog">
				<Logo />
			</NavLink>
			<Menu />
		</header>
	);
}

export default Header;
