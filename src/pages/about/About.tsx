import { api } from "../../api/api";
import Headling from "../../components/Headling/Headling";
import Paragraph from "../../components/Paragraph/Paragraph";
import styles from "./About.module.css";
import { AboutProps } from "./About.props";

function About({ children }: AboutProps): JSX.Element {
	return (
		<div className={styles["about"]}>
			<img
				src="https://github.com/fikyslsgg/my-photo-blog/blob/main/public/photo/author.png?raw=true"
				alt="author-icon"
				loading="lazy"
				className={styles["author"]}
			/>
			<div className={styles["content"]}>
				<div className={styles["text"]}>
					<Headling className={styles["title"]}>
						Персональный фотоальбом
						<br />
						пленочной фотографии
					</Headling>
					<Paragraph>
						Добро пожаловать
						<br />
						<br />В мир пленочной фотографии и ломографии! Меня зовут Юрий, и я увлеченный фотограф,
						который находит вдохновение в каждом кадре пленки. Мой блог посвящен искусству создания
						уникальных снимков, полных жизни и эмоций, в духе движения ломографии.
						<br />
						<br />
						Ломография – это больше чем просто техника съемки. Это философия, основанная на идее
						запечатления момента таким, какой он есть, без излишней подготовки и обработки.
						Ломо-фото часто характеризуются яркими цветами, неожиданными ракурсами и случайностями,
						которые придают каждому кадру особую магию.
					</Paragraph>
				</div>
				<div className={styles["contacts"]}>
					<a href="https://t.me/yurasidyakin">
						<img
							className={styles["social"]}
							src={`${api}/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/telegram-icon.svg`}
							alt="telegram-icon"
						/>
					</a>
					<a href="https://vk.com/yurafikys">
						<img
							className={styles["social"]}
							src={`${api}/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/vk-icon.svg`}
							alt="vk-icon"
						/>
					</a>
					<a href="yurafikys@gmail.com">
						<img
							className={styles["social"]}
							src={`${api}/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/mail-icon.svg`}
							alt="email-icon"
						/>
					</a>
				</div>
			</div>
			{children}
		</div>
	);
}

export default About;
