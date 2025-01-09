import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { LoginProps } from "./Login.props";

function Login({ children }: LoginProps): JSX.Element {
	return (
		<div className={styles.login}>
			<Headling>Вход</Headling>
			<form className={styles.form}>
				<div className={styles["field"]}>
					<label htmlFor="email">
						<img src="/public/icon/email-icon.svg" alt="email" />
					</label>
					<Input id="email" name="email" placeholder="Email" />
				</div>
				<div className={styles["field"]}>
					<label htmlFor="password">
						<img src="/public/icon/password-icon.svg" alt="password" />
					</label>
					<Input id="password" name="password" type="password" placeholder="Пароль" />
				</div>
				<Button>вход</Button>
			</form>
			<div className={styles["links"]}>
				<div>Нет аккаунта?</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
			{children}
		</div>
	);
}

export default Login;
