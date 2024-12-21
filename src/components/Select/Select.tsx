import styles from './Select.module.css';
import { SelectProps } from './Select.props';

function Select({ children, ...props }: SelectProps) {
	return (
		<div className={styles['select-wrapper']}>
			<select className={styles.select} {...props}>
				<option disabled selected hidden>
					выберите плёнку...
				</option>
				<option className={styles.option} value='Tasma 100'>
					Tasma 100
				</option>
				<option className={styles.option} value='Kodak Vision 500'>
					Kodak Vision 500
				</option>
				{children}
			</select>
		</div>
	);
}

export default Select;
