import styles from './Headling.module.css';
import { HeadlingProps } from './Headling.props';

function Headling({ children, ...props }: HeadlingProps) {
	return (
		<h1 className={styles['h1']} {...props}>
			{children}
		</h1>
	);
}

export default Headling;
