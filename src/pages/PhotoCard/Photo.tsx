import { Link, useParams } from 'react-router-dom';
import Paragraph from '../../components/Paragraph/Paragraph';
import { photodb } from '../../db/photodb';
import styles from './Photo.module.css';
import { PhotoProps } from './Photo.props';

function Photo({ ...props }: PhotoProps): JSX.Element {
	const { id } = useParams();
	const photo = photodb.find(photo => String(photo.id) === id);

	if (!photo) {
		return <div>Фотография не найдена</div>;
	}

	return (
		<div {...props} className={styles['photo-card']}>
			<Link to={'/'} className={styles['back']}>
				назад...
			</Link>
			<img className={styles['photo']} src={photo.path} alt='photo' />
			<Paragraph>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex deserunt
				repellat ad, debitis sunt sint, eveniet numquam id nobis laudantium
				veritatis culpa reiciendis, vero molestias blanditiis tempore quis
				assumenda.
			</Paragraph>
		</div>
	);
}

export default Photo;
