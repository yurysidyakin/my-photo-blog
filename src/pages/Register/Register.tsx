import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import styles from "./Register.module.css";
import { RegisterProps } from "./Register.props";

function Register({ children }: RegisterProps): JSX.Element {
	return (
		<div className={styles["login"]}>
			<Headling>Регистрация</Headling>
			<form className={styles["form"]}>
				<div className={styles["field"]}>
					<label htmlFor="email">
						<img src="/public/icons/email-icon.svg" alt="email-icon" />
					</label>
					<Input id="email" name="email" placeholder="Email" />
				</div>
				<div className={styles["field"]}>
					<label htmlFor="password">
						<img src="/public/icons/password-icon.svg" alt="password-icon" />
					</label>
					<Input id="password" name="password" type="password" placeholder="Пароль" />
				</div>
				<div className={styles["field"]}>
					<label htmlFor="name">
						<img src="/public/icons/user-icon.svg" alt="user-icon" />
					</label>
					<Input id="name" name="name" placeholder="Имя" />
				</div>
				<Button>Зарегистрироваться</Button>
			</form>
			<div className={styles["links"]}>
				<div>Есть аккаунт?</div>
				<Link to="/auth/login">Войти</Link>
			</div>
			{children}
		</div>
	);
}

export default Register;
