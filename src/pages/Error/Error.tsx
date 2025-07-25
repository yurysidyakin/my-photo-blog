import { NavLink } from "react-router";
import { api } from "../../api/api";
import Paragraph from "../../components/Paragraph/Paragraph";
import styles from "./Error.module.css";
import { ErrorProps } from "./Error.props";

function Error({ children }: ErrorProps): JSX.Element {
	return (
		<div className={styles.error}>
			<div>Упс! Что-то пошло не так.</div>
			<Paragraph>
				К сожалению, произошла ошибка. <br />
				Попробуйте вернуться на главную страницу.
			</Paragraph>
			<NavLink to="/main" className={styles["back-link"]}>
				Вернуться на главную
			</NavLink>
			<img
				className={styles["error-icon"]}
				src={`${api}/7b620b405ef73bac462a672f9df70ae706c3bf08/public/icon/error-icon.svg`}
				alt="error-icon"
			/>
			{children}
		</div>
	);
}

export default Error;
