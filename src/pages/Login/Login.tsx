import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as loginApi } from "../../api/auth.api";
import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Login.module.css";
import { LoginProps } from "./Login.props";

interface FormErrors {
	login: boolean;
	password: boolean;
}

function Login({ children }: LoginProps): JSX.Element {
	const navigate = useNavigate();
	const { login } = useAuth();
	const [error, setError] = useState<string>("");
	const [errors, setErrors] = useState<FormErrors>({
		login: false,
		password: false,
	});

	const validateField = (value: FormDataEntryValue | null): boolean => {
		return value !== null && value.toString().trim() !== "";
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");

		const formData = new FormData(e.currentTarget);
		const loginValue = formData.get("login");
		const password = formData.get("password");

		const newErrors = {
			login: !validateField(loginValue),
			password: !validateField(password),
		};

		setErrors(newErrors);

		if (newErrors.login || newErrors.password) {
			setError("Все поля должны быть заполнены");
			return;
		}

		try {
			if (loginValue && password) {
				const response = await loginApi({
					login: loginValue.toString(),
					password: password.toString(),
				});

				if (response.token) {
					login(response.token);
					navigate("/main");
				}
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError("Ошибка при входе. Пожалуйста, попробуйте снова.");
			}
		}
	};

	return (
		<div className={styles.login}>
			<Headling>Вход</Headling>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles["field"]}>
					<label htmlFor="login">
						<img src="/icons/login-icon.svg" alt="login-icon" />
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
						<img src="/icons/password-icon.svg" alt="password" />
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
				{error && <div className={styles.error}>{error}</div>}
				<Button type="submit">Вход</Button>
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
