import toast, { Toaster } from 'react-hot-toast';

import useFetchCounter from './useFetchCounter';
import Loading from '../Loading/Loading';
import './counter.css';

const Counter: React.FC = () => {
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
					{loading ? <Loading /> : <p>{Number(counter)}</p>}
				</div>
				<div className='counter_buttons'>
					<button className='increment_button' onClick={incrementByOne}>
						Increase{' '}
					</button>
					<button className='decrement_button' onClick={decrementByOne}>
						Decrease{' '}
					</button>
				</div>
			</div>
		</>
	);
};

export default Counter;
