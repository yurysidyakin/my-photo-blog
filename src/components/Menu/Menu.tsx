import cn from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";
import styles from "./Menu.module.css";
import { MenuProps } from "./Menu.props";

function Menu({ children }: MenuProps) {
	const photos = useSelector((s: RootState) => s.favorite.photos);

	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				<li>
					<NavLink
						className={({ isActive }) =>
							cn(styles.link, {
								[styles.active]: isActive,
							})
						}
						to="/"
					>
						главная
					</NavLink>
				</li>
				<li className={styles.item}>
					<NavLink
						className={({ isActive }) =>
							cn(styles.link, {
								[styles.active]: isActive,
							})
						}
						to="/favorite"
					>
						избранное
					</NavLink>
					{photos.length == 0 && ""}
					{photos.length !== 0 && (
						<div className={styles.count}>{photos.length}</div>
					)}
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							cn(styles.link, {
								[styles.active]: isActive,
							})
						}
						to="/about"
					>
						контакты
					</NavLink>
				</li>
				<li className={styles.item}>
					<img
						className={styles.icon}
						src="/public/icon/user-icon.svg"
						alt="user"
					/>
					<div className={styles.name}>username</div>
				</li>
			</ul>
			{children}
		</nav>
	);
}

export default Menu;
