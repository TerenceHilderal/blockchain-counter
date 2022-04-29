import './description.css';
import crypto from '../../assets/img/crypto.png';
import stackArray from '../../assets/description/stackArray.json';

const Description: React.FC = () => {
	return (
		<div data-testid='description_container' className='description_container'>
			<div className='description'>
				<h1>Project's Goal</h1>
				<p>
					The goal of this project is to realize a counter system based on the
					blockchain. You will find below the counter, this one is composed of
					two buttons:
				</p>

				<ul>
					<li>Increase: which will add 1 to the counter </li>
					<li>Decrease: which will subtract 1 from the counter</li>
				</ul>

				<p>
					The state of the counter and the methods used to increment and
					decrement are supported by a smart contract that has been deployed on
					the <b> Ropsten</b> testnet.
					<br /> I chose the ethereum blockchain and the following stack:
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
