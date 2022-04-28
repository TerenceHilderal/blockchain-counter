import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Counter from '../../artifacts/contracts/Counter.sol/Counter.json';

const counterAdress: string = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const useFetchCounter = () => {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		fetchCounterFromContract();
	}, []);

	const fetchCounterFromContract = async () => {
		//@ts-ignore
		if (typeof window.ethereum !== 'undefined') {
			//@ts-ignore
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const contract = new ethers.Contract(
				counterAdress,
				Counter.abi,
				provider,
			);
			try {
				const currentCounter = await contract.getCounter();
				setCounter(currentCounter);
				console.log(currentCounter);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const incrementByOne = async () => {
		//@ts-ignore
		await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
		//@ts-ignore
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(counterAdress, Counter.abi, signer);
		try {
			const transaction = await contract.incrementCounterByOne();
			await transaction.wait();
			fetchCounterFromContract();
		} catch (error) {
			console.log(error);
		}
	};

	const decrementByOne = async () => {
		//@ts-ignore
		await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
		//@ts-ignore

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(counterAdress, Counter.abi, signer);
		try {
			const transaction = await contract.decrementCounterByOne();
			await transaction.wait();
			fetchCounterFromContract();
		} catch (error) {
			console.log(error);
		}
	};
	return {
		counter,
		fetchCounterFromContract,
		incrementByOne,
		decrementByOne,
	};
};

export default useFetchCounter;
