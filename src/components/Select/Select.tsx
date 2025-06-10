import { ChangeEvent, useState } from "react";
import styles from "./Select.module.css";
import { OptionProps, SelectProps } from "./Select.props";

function Select({ children, ...props }: SelectProps): JSX.Element {
	const [selectedOption, setSelectedOption] = useState<string>("");

	const options: OptionProps[] = [
		{ value: "Tasma 100", label: "Tasma 100" },
		{ value: "Kodak Vision 500", label: "Kodak Vision 500" },
		{ value: "Hitchcock 250", label: "Hitchcock 250" },
		{ value: "все фотографии", label: "все фотографии" },
	];

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className={styles["select-wrapper"]}>
			<select className={styles.select} value={selectedOption} onChange={handleChange} {...props}>
				<option value="" disabled hidden>
					выберите плёнку...
				</option>
				{options.map(({ value, label }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
				{children}
			</select>
		</div>
	);
}

export default Select;
