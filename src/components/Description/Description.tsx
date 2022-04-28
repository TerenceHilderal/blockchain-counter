import './style.css';
import crypto from '../../assets/img/crypto.png';

const Description = () => {
	return (
		<div className='description_container'>
			<div className='description'>
				<h1>Project's Goal</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
					repellat voluptate officiis voluptatum asperiores non delectus, nemo
					praesentium est nisi et, voluptas distinctio eaque. Exercitationem
					tenetur cupiditate earum nesciunt. Distinctio ad provident reiciendis
					ex. Placeat laborum dolorem necessitatibus voluptas vitae amet
					expedita at libero molestiae provident quas a rerum pariatur, deserunt
					accusamus, earum fugiat? Inventore eos reprehenderit sapiente magnam
					eaque excepturi debitis similique nulla itaque. Facilis officia
					architecto sint ad, rerum esse aspernatur cum quo laboriosam
					consequuntur amet perspiciatis in sit illo culpa eligendi harum, aut
					enim ducimus consectetur magni iusto. Ut, natus! Distinctio dolore
					tempora ipsa explicabo atque cumque quas nihil blanditiis, eius totam
					facere omnis deserunt nam earum modi assumenda rem et. Libero,
					voluptatum! Magni ipsum aut dolorem veniam quae ullam minus soluta
					velit laudantium ut minima, quisquam nisi iure excepturi eum nulla
					sint adipisci maxime exercitationem esse, eius quibusdam! Enim,
					perspiciatis blanditiis quod suscipit quia veritatis voluptates?
				</p>
			</div>
			<div className='description_img'>
				<img src={crypto} alt='crypto currency illustrations' />
			</div>
		</div>
	);
};

export default Description;
