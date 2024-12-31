import Headling from "../../components/Headling/Headlig";
import Paragraph from "../../components/Paragraph/Paragraph";
import styles from "./About.module.css";
import { AboutProps } from "./About.props";

function About({ children }: AboutProps): JSX.Element {
	return (
		<div className={styles["about"]}>
			<img
				src="/my-photo-blog/public/photo/author.png"
				alt="photo_icon"
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
						<br />В мир пленочной фотографии и ломографии! Меня зовут Юрий, и я
						увлеченный фотограф, который находит вдохновение в каждом кадре
						пленки. Мой блог посвящен искусству создания уникальных снимков,
						полных жизни и эмоций, в духе движения ломографии.
						<br />
						<br />
						Ломография – это больше чем просто техника съемки. Это философия,
						основанная на идее запечатления момента таким, какой он есть, без
						излишней подготовки и обработки. Ломо-фото часто характеризуются
						яркими цветами, неожиданными ракурсами и случайностями, которые
						придают каждому кадру особую магию.
					</Paragraph>
				</div>
				<div className={styles["contacts"]}>
					<a href="https://t.me/yurasidyakin">
						<img
							className={styles["social"]}
							src="/my-photo-blog/public/icon/telegram-icon.svg"
							alt="Telergram"
						/>
					</a>
					<a href="https://vk.com/yurafikys">
						<img
							className={styles["social"]}
							src="/my-photo-blog/public/icon/vk-icon.svg"
							alt="VK"
						/>
					</a>
					<a href="yurafikys@gmail.com">
						<img
							className={styles["social"]}
							src="/my-photo-blog/public/icon/mail-icon.svg"
							alt="Email"
						/>
					</a>
				</div>
			</div>
			{children}
		</div>
	);
}

export default About;
