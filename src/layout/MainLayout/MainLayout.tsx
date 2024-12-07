import Paragraph from '../../components/Paragraph/Paragraph';
import Headling from '../../components/Title/Headlig';
import styles from './MainLayout.module.css';

function MainLayout() {
	return (
		<main className={styles['section-main']}>
			<section className={styles['section']}>
				<div>
					<img
						src='/public/photo/author.png'
						alt='photo_icon'
						className={styles['photo_author']}
					/>
				</div>
			</section>
			<section className={styles['section']}>
				<Headling>Welcome to my personal photo blog!</Headling>
				<Paragraph>
					Here I share my passion for lomography, capturing the world through
					the lens of a film camera. Each photograph is a moment of chance and
					beauty, frozen on film. Lomography is an art of spontaneity and
					randomness, allowing us to see the world in a new light. I strive to
					capture those fleeting moments that seem insignificant yet are rich
					with meaning. My blog is a collection of such moments, each photo
					telling its own unique story. I invite you to dive into the atmosphere
					of creativity and inspiration where every frame opens up new horizons.
					I hope my work brings you joy and inspiration, opening new
					perspectives in the world of photography. May each frame serve as your
					guide into the realm of chance and beauty.
				</Paragraph>
			</section>
		</main>
	);
}

export default MainLayout;
