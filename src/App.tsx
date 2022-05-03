// import Counter from './artifacts/contracts/Counter.sol/Counter.json';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import './App.css';
import './components/Counter/counter.css';
import Counter from './components/Counter';
import NavbarComponent from './components/Navbar/Navbar';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import toast from 'react-hot-toast';
import useWalletConnection from './utils/useWalletConnection';

const App: React.FC = () => {
	const [allowInteractionWithCounter, setAllowInteractionWithCounter] =
		useState<boolean>(true);
	// const [walletConnected, setWalletConnected] = useState<boolean>(false);
	const { walletConnected, isAwalletAlreadyConnected } = useWalletConnection();

	const hexadecimalToDecimal = (hexString: string) => {
		return parseInt(hexString, 16);
	};

	const ropstenProviderChainId: number =
		ethers.providers.getNetwork('ropsten').chainId;

	useEffect(() => {
		const initial = async () => {
			// When user connected for 1st time
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const chain = await provider.getNetwork();
			console.log(chain);

			if (chain.chainId !== ropstenProviderChainId) {
				setAllowInteractionWithCounter(false);
				return toast.error(
					' Be careful !! You must be connected to the Ropsten test network to try this Dapp, check your metamask settings',
					{ duration: 7000 },
				);
			}
		};

		window.ethereum.on('chainChanged', (chainId: string) => {
			const windowChainId = hexadecimalToDecimal(chainId);

			if (windowChainId !== ropstenProviderChainId) {
				setAllowInteractionWithCounter(false);
				return toast.error(
					' Be careful !! You must be connected to the Ropsten test network to try this Dapp, check your metamask settings',
					{ duration: 6000 },
				);
			} else {
				setAllowInteractionWithCounter(true);
				return toast.success(
					"You're on the Ropsten network you can now try this app",
					{ duration: 6000 },
				);
			}
		});

		initial();
		isAwalletAlreadyConnected();
	}, []);

	// useEffect(() => {
	// 	const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 	const isAwalletAlreadyConnected = async () => {
	// 		const accounts = await provider.listAccounts();

	// 		accounts.length !== 0
	// 			? setWalletConnected(true)
	// 			: setWalletConnected(false);
	// 	};
	// 	isAwalletAlreadyConnected();
	// }, []);

	// window.ethereum.on('accountsChanged', (accounts: string[]) => {
	// 	if (accounts[0]) {
	// 		setWalletConnected(true);
	// 		return toast.success('Successfully connected to your wallet');
	// 	}
	// });

	// window.ethereum.on('accountsChanged', (accounts: string[]) => {
	// 	if (accounts.length === 0) {
	// 		setWalletConnected(false);
	// 		return toast.success('Successfully disconnected to your wallet');
	// 	}
	// });

	const connectWallet = () => {
		window.ethereum.request({
			method: 'eth_requestAccounts',
		});
	};

	return (
		<>
			<div className='app'>
				<NavbarComponent />
				<Description />
				{walletConnected ? (
					<Counter allowInteractionWithCounter={allowInteractionWithCounter} />
				) : (
					<div
						className='counter_buttons'
						style={{ margin: 'auto', marginBottom: '1rem' }}
					>
						<button className='increment_button' onClick={connectWallet}>
							Connect your Wallet
						</button>
					</div>
				)}
				<Footer />
			</div>
		</>
	);
};

export default App;
