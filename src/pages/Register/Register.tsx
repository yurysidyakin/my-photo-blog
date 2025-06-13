import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth.api";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import styles from "./Register.module.css";
import { RegisterProps } from "./Register.props";

interface FormErrors {
	login: boolean;
	password: boolean;
	name: boolean;
}

function Register({ children }: RegisterProps): JSX.Element {
	const navigate = useNavigate();
	const [error, setError] = useState<string>("");
	const [errors, setErrors] = useState<FormErrors>({
		login: false,
		password: false,
		name: false,
	});

	const validateField = (value: FormDataEntryValue | null): boolean => {
		return value !== null && value.toString().trim() !== "";
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");

		const formData = new FormData(e.currentTarget);
		const login = formData.get("login");
		const password = formData.get("password");
		const name = formData.get("name");

		const newErrors = {
			login: !validateField(login),
			password: !validateField(password),
			name: !validateField(name),
		};

		setErrors(newErrors);

		if (newErrors.login || newErrors.password || newErrors.name) {
			setError("Все поля должны быть заполнены");
			return;
		}

		try {
			if (login && password && name) {
				await register({
					login: login.toString(),
					password: password.toString(),
					name: name.toString(),
				});
				navigate("/auth/login");
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("Ошибка при регистрации. Пожалуйста, попробуйте снова.");
			}
		}
	};

	return (
		<div className={styles["login"]}>
			<Headling>Регистрация</Headling>
			<form className={styles["form"]} onSubmit={handleSubmit}>
				<div className={styles["field"]}>
					<label htmlFor="login">
						<img src="/public/icons/user-icon.svg" alt="user-icon" />
					</label>
					<Input
						id="login"
						name="login"
						placeholder="Логин"
						required
						className={errors.login ? "error" : ""}
					/>
				</div>
				<div className={styles["field"]}>
					<label htmlFor="password">
						<img src="/public/icons/password-icon.svg" alt="password-icon" />
					</label>
					<Input
						id="password"
						name="password"
						type="password"
						placeholder="Пароль"
						required
						className={errors.password ? "error" : ""}
					/>
				</div>
				<div className={styles["field"]}>
					<label htmlFor="name">
						<img src="/public/icons/user-icon.svg" alt="user-icon" />
					</label>
					<Input
						id="name"
						name="name"
						placeholder="Имя"
						required
						className={errors.name ? "error" : ""}
					/>
				</div>
				{error && <div className={styles.error}>{error}</div>}
				<Button type="submit">Зарегистрироваться</Button>
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
