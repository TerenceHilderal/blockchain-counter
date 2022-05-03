import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ethers } from 'ethers';

const useWalletConnection = () => {
	const [walletConnected, setWalletConnected] = useState<boolean>(false);
	const provider = new ethers.providers.Web3Provider(window.ethereum);

	const isAwalletAlreadyConnected = async () => {
		const accounts = await provider.listAccounts();

		accounts.length !== 0
			? setWalletConnected(true)
			: setWalletConnected(false);
	};
	useEffect(() => {
		isAwalletAlreadyConnected();

		window.ethereum.on('accountsChanged', (accounts: string[]) => {
			if (accounts[0]) {
				setWalletConnected(true);
				return toast.success('Successfully connected to your wallet');
			}
		});

		window.ethereum.on('accountsChanged', (accounts: string[]) => {
			if (accounts.length === 0) {
				setWalletConnected(false);
				return toast.success('Successfully disconnected to your wallet');
			}
		});
	}, []);

	return {
		walletConnected,
		setWalletConnected,
		isAwalletAlreadyConnected,
	};
};

export default useWalletConnection;
