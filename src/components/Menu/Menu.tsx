import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';

function Menu({ children }: MenuProps) {
	return (
		<>
			<nav className={styles.menu}>
				<ul className={styles.list}>
					<li className={styles.link}>
						<NavLink to='/'>главная</NavLink>
					</li>
					<li className={styles.link}>
						<NavLink to='/favorite'>избранное</NavLink>
					</li>
					<li className={styles.link}>
						<NavLink to='/about'>контакты</NavLink>
					</li>
				</ul>
				{children}
			</nav>
		</>
	);
}

export default Menu;
