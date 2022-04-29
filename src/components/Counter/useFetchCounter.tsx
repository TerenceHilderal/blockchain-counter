import { useState, useEffect } from 'react';

import { ethers } from 'ethers';
import toast from 'react-hot-toast';

import Counter from './Counter.json';

const counterAdress: string = '0xf3c86cDF1B3b87e2ec68649F7498C3d867Fc78c0';

const useFetchCounter = () => {
	const [counter, setCounter] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);

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
			} catch (error: any) {
				toast.error('Sorry, something went wrong, please try again later.');
			}
		}
	};

	const incrementByOne = async () => {
		await window.ethereum.request({
			method: 'eth_requestAccounts',
		});

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(counterAdress, Counter.abi, signer);

		try {
			const transaction = await contract.incrementCounterByOne();
			setLoading(true);
			await transaction.wait();
			fetchCounterFromContract();
			toast.success('Counter incremented by one');
			setLoading(false);
		} catch (error: any) {
			toast.error('Sorry, something went wrong, you have insufficient funds');
		}
	};

	const decrementByOne = async () => {
		await window.ethereum.request({
			method: 'eth_requestAccounts',
		});

		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(counterAdress, Counter.abi, signer);

		try {
			const transaction = await contract.decrementCounterByOne();
			setLoading(true);
			await transaction.wait();
			fetchCounterFromContract();
			toast.success('Counter decremented by one');
			setLoading(false);
		} catch (error) {
			toast.error('Sorry, something went wrong, please try again later.');
		}
	};
	return {
		loading,
		counter,
		incrementByOne,
		decrementByOne,
	};
};

export default useFetchCounter;
