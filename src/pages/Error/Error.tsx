import { NavLink } from "react-router";
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
			<NavLink to="/" className={styles["back-link"]}>
				Вернуться на главную
			</NavLink>
			<img
				className={styles["error-icon"]}
				src="/public/icon/error-icon.svg"
				alt="Error"
			/>
			{children}
		</div>
	);
}

export default Error;
