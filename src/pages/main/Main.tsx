import Footer from '../../components/Footer/Footer';
import Layout from '../../layout/Layout/Layout';
import styles from './Main.module.css';

function Main() {
	return (
		<>
			<Layout>
				<main className={styles.main}>Main</main>
			</Layout>
			<Footer />
		</>
	);
}

export default Main;
