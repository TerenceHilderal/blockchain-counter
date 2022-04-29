import './navbar.css';
import blockchainCounterLogo from '../../assets/img/ethereum.png';

const NavbarComponent: React.FC = () => {
	return (
		<div data-testid='navbar_container' className='navbar_container'>
			<div className='title'>
				<img data-testid='logo' src={blockchainCounterLogo} alt='' />
				<h1 data-testid='title'>Blockchain Counter</h1>
			</div>
		</div>
	);
};

export default NavbarComponent;
