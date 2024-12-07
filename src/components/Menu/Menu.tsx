import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';

function Menu({ children }: MenuProps) {
	return (
		<>
			<nav className={styles.menu}>
				<ul className={styles.menu_list}>
					<li className={styles.menu_link}>
						<a href='#'>Main</a>
					</li>
					<li>
						<a href='#'>Favorite</a>
					</li>
				</ul>
				{children}
			</nav>
			<div className={styles.menu_link}>en/ru</div>
		</>
	);
}

export default Menu;
