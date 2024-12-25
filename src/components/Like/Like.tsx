import { ReactElement } from 'react';
import styles from './Like.module.css';

export interface LikeProps {
	active: boolean;
}

function Like(): ReactElement {
	return (
		<img className={styles.like} src='/public/icon/like-icon.svg' alt='like' />
	);
}

export default Like;
