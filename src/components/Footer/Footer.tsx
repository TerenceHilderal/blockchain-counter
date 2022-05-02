import './footer.css';

const Footer: React.FC = () => {
	return (
		<div data-testid='footer' className='footer'>
			<ul className='footer_list'>
				<li>Hildéral Térence</li>
				<li>
					<a
						className='links'
						href='https://github.com/TerenceHilderal/blockchain-counter'
						target='_blank'
						rel='noreferrer'
					>
						Github's link{' '}
					</a>
				</li>
				<li>
					{' '}
					<a
						className='links'
						href='https://www.linkedin.com/in/terencehdl'
						target='_blank'
						rel='noreferrer'
					>
						Linkedin Profile
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
