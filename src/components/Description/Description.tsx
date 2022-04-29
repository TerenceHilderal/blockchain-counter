import './description.css';
import crypto from '../../assets/img/crypto.png';
import stackArray from '../../assets/description/stackArray.json';

const Description: React.FC = () => {
	return (
		<div data-testid='description_container' className='description_container'>
			<div className='description'>
				<h1>Project's Goal</h1>
				<p>
					Le but de ce projet est de de réaliser un système de compteur basé sur
					la blockchain. Vous trouverez ci-dessous le compteur, celui-ci est
					composé de deux boutons:
				</p>

				<ul>
					<li>Increase : qui permettra d'ajouter 1 au compteur </li>
					<li>Decrease : qui permettra de soustraire 1 au compteur</li>
				</ul>

				<p>
					L'état du compteur et les méthodes utilisées pour incrémenter et
					décrementer sont pris en charge par un smart contract qui a été
					déployé sur le réseau test <b>Ropsten</b>.<br /> J'ai choisi la
					blockchain de l'ethereum et la stack suivante :
				</p>

				<ul>
					{stackArray.stack.map((stackItem, index) => (
						<li key={index}>{stackItem}</li>
					))}
				</ul>
			</div>

			<div className='description_img'>
				<img src={crypto} alt='crypto currency illustrations' />
			</div>
		</div>
	);
};

export default Description;
