import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import { MenuProps } from './Menu.props';

function Menu({ children }: MenuProps) {
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
						to='/'
					>
						главная
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							cn(styles.link, {
								[styles.active]: isActive,
							})
						}
						to='/favorite'
					>
						избранное
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							cn(styles.link, {
								[styles.active]: isActive,
							})
						}
						to='/about'
					>
						контакты
					</NavLink>
				</li>
				<li className={styles.link}>
					<img src='/public/icon/user-icon.svg' alt='user' />
					<div>username</div>
				</li>
			</ul>
			{children}
		</nav>
	);
}

export default Menu;
