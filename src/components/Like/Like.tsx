import { ReactElement } from 'react';
import { LikeProps } from './Like.props';

function Like({ active }: LikeProps): ReactElement {
	return (
		<svg width='20.000000' height='18.500000' viewBox='0 0 20 18.5'>
			<path
				id='矢量 13'
				d='M14.5 0C17.53 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.36 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.93 15.6C11.81 15.04 12.61 14.49 13.35 13.9C16.33 11.53 18 8.94 18 6C18 3.64 16.46 2 14.5 2C13.42 2 12.26 2.57 11.41 3.41L10 4.82L8.58 3.41C7.74 2.57 6.57 2 5.5 2C3.56 2 2 3.65 2 6C2 8.94 3.66 11.53 6.64 13.9C7.39 14.49 8.18 15.04 9.06 15.6C9.36 15.79 9.66 15.97 10 16.17C10.33 15.97 10.63 15.79 10.93 15.6L10.93 15.6Z'
				fill={active ? 'red' : 'grey'}
			/>
		</svg>
	);
}

export default Like;
