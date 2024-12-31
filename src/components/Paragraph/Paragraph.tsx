import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";

function Paragraph({ children, ...props }: ParagraphProps): JSX.Element {
	return (
		<p className={styles["paragraph"]} {...props}>
			{children}
		</p>
	);
}

export default Paragraph;
