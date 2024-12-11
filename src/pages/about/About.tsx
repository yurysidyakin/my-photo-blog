import Paragraph from '../../components/Paragraph/Paragraph';
import Headling from '../../components/Title/Headlig';
import Layout from '../../layout/Layout/Layout';
import styles from './About.module.css';

function About() {
	return (
		<>
			<Layout>
				<div className={styles['about']}>
					<img
						src='/public/photo/author.png'
						alt='photo_icon'
						className={styles['author']}
					/>
					<div className={styles['content']}>
						<div className={styles['text']}>
							<Headling>
								Персональный фотоальбом
								<br />
								пленочной фотографии
							</Headling>
							<Paragraph>
								Добро пожаловать
								<br />
								<br />В мир пленочной фотографии и ломографии! Меня зовут Юрий,
								и я увлеченный фотограф, который находит вдохновение в каждом
								кадре пленки. Мой блог посвящен искусству создания уникальных
								снимков, полных жизни и эмоций, в духе движения ломографии.
								<br />
								<br />
								Ломография – это больше чем просто техника съемки. Это
								философия, основанная на идее запечатления момента таким, какой
								он есть, без излишней подготовки и обработки. Ломо-фото часто
								характеризуются яркими цветами, неожиданными ракурсами и
								случайностями, которые придают каждому кадру особую магию.
							</Paragraph>
						</div>
						<div className={styles['contacts']}>
							<a href='#'>
								<img
									className={styles['social']}
									src='/public/icon/telegram-icon.svg'
									alt='Telergram'
								/>
							</a>
							<a href='#'>
								<img
									className={styles['social']}
									src='/public/icon/vk-icon.svg'
									alt='VK'
								/>
							</a>
							<a href='#'>
								<img
									className={styles['social']}
									src='/public/icon/mail-icon.svg'
									alt='Mail'
								/>
							</a>
						</div>
					</div>
				</div>
			</Layout>
			{/* <Footer /> */}
		</>
	);
}

export default About;
