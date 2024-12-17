import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<Header />
				<Outlet />
				{children}
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
