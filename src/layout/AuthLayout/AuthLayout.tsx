import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";
import { AuthLayoutProps } from "./AuthLayout.props";

function Layout({ children }: AuthLayoutProps): JSX.Element {
	return (
		<div className={styles["auth-layout"]}>
			<div className={styles.container}>
				<Outlet />
				{children}
			</div>
		</div>
	);
}

export default Layout;
