import './style.css';
import blockchainCounterLogo from '../../assets/img/blockchainCounterLogo.webp';

const NavbarComponent = () => {
	return (
		<div className='navbar_container'>
			<div className='logo'>
				<img src={blockchainCounterLogo} alt='' />
			</div>
			<div className='title'>
				<h1>Blockchain Counter </h1>
			</div>
		</div>
	);
};

export default NavbarComponent;
