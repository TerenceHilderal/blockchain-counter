import loadingGif from '../../assets/gif/loading.gif';
import './loading.css';

const Loading: React.FC = () => {
	return (
		<div data-testid='loading_container' className='loading_container'>
			<div className='loading_gif'>
				<img src={loadingGif} alt='loading gif' />
			</div>
			<div className='loading_text'>
				<p>
					Updating data in the blockchain <span className='dot'>.</span>
					<span className='dot1'>.</span>
					<span className='dot2'>.</span>
				</p>
			</div>
		</div>
	);
};

export default Loading;
