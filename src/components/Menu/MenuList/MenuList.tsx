import cn from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../store/store";
import styles from "./MenuList.module.css";
import { MenuListProps } from "./MenuList.props";

function MenuList({ children }: MenuListProps): JSX.Element {
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
						to="/my-photo-blog"
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
						to="/my-photo-blog/favorite"
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
						to="/my-photo-blog/about"
					>
						контакты
					</NavLink>
				</li>
			</ul>
			{children}
		</nav>
	);
}

export default MenuList;
