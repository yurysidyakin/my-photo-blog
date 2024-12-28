import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headlig';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';

function Login() {
	return (
		<div className={styles.login}>
			<Headling>Вход</Headling>
			<form className={styles.form}>
				<div className={styles['field']}>
					<label htmlFor='email'>email</label>
					<Input id='email' name='email' placeholder='Email' />
				</div>
				<div className={styles['field']}>
					<label htmlFor='password'>password</label>
					<Input
						id='password'
						name='password'
						type='password'
						placeholder='Пароль'
					/>
				</div>
				<Button>вход</Button>
			</form>

			<Link to='/auth/register'>регистрация</Link>
		</div>
	);
}

export default Login;
