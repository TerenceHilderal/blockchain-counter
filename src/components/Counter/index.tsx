import useFetchCounter from './useFetchCounter';
import './style.css';

const Counter = () => {
	const { counter, incrementByOne, decrementByOne } = useFetchCounter();

	return (
		<div className='counter_container'>
			<div className='counter_title'>
				<h1>The famous counter</h1>
			</div>
			<p className='counter'>{Number(counter)}</p>
			<div className='counter_buttons'>
				<button className='increment_button' onClick={incrementByOne}>
					Increment{' '}
				</button>
				<button className='decrement_button' onClick={decrementByOne}>
					Decrement{' '}
				</button>
			</div>
		</div>
	);
};

export default Counter;
