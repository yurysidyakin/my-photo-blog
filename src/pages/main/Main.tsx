import { photodb } from '../../db/photodb';
import styles from './Main.module.css';

function Main() {
	return (
		<main className={styles.main}>
			{photodb
				.sort(() => Math.random() - 0.5)
				.map(photo => (
					<div key={photo.id} className={styles.wrapper}>
						<img src={photo.path} alt='photo' className={styles.photo} />
						<div className={styles.desc}>
							<div className={styles.item}>
								<img
									className={styles.icon}
									src='/public/icon/camera-icon.png'
									alt='camera-icon'
								/>
								{photo.camera}
							</div>
							<div className={styles.item}>
								<img
									className={styles.icon}
									src='/public/icon/plenka-icon.png'
									alt='plenka-icon'
								/>
								{photo.plenka}
							</div>
						</div>
					</div>
				))}
		</main>
	);
}

export default Main;
