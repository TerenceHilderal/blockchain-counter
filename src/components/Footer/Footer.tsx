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
						Le lien Github du projet{' '}
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
						Mon profil LinkedIn
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
