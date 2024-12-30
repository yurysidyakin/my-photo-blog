import styles from "./Paragraph.module.css";
import { PProps } from "./Paragraph.props";

function Paragraph({ children, ...props }: PProps) {
	return (
		<p className={styles["paragraph"]} {...props}>
			{children}
		</p>
	);
}

export default Paragraph;
