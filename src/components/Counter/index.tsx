import toast, { Toaster } from 'react-hot-toast';

import useFetchCounter from './useFetchCounter';
import Loading from '../Loading/Loading';
import './counter.css';

interface Props {
	allowInteractionWithCounter: boolean;
}

const Counter: React.FC<Props> = ({ allowInteractionWithCounter }) => {
	const { counter, incrementByOne, decrementByOne, loading } =
		useFetchCounter();

	return (
		<>
			<div data-testid='counter_container' className='counter_container'>
				<div className='counter_title'>
					<h1>Counter</h1>
				</div>
				<Toaster />
				<div className='counter'>
					{loading ? <Loading /> : <p>{counter}</p>}
				</div>

				{allowInteractionWithCounter && (
					<div className='counter_buttons'>
						<button className='increment_button' onClick={incrementByOne}>
							Increase{' '}
						</button>
						<button
							className={
								counter === 0 ? `decrement_button_disabled` : 'decrement_button'
							}
							{...(counter === 0
								? {
										onClick: () =>
											toast.error(
												'Sorry, the counter can not be negatively decrease',
												{ duration: 7000 },
											),
								  }
								: { onClick: () => decrementByOne() })}
						>
							Decrease{' '}
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Counter;
