import { useState, useEffect } from 'react';

import { ethers } from 'ethers';
import toast from 'react-hot-toast';

import Counter from './Counter.json';
import { handleError } from '../../utils/handleError';

const counterAdress: string = '0xf3c86cDF1B3b87e2ec68649F7498C3d867Fc78c0';

const useFetchCounter = () => {
	const [counter, setCounter] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(false);

	const hexadecimalToDecimal = (hexString: any) => {
		return parseInt(hexString, 16);
	};

	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const contract = new ethers.Contract(counterAdress, Counter.abi, provider);
	const signer = provider.getSigner();

	useEffect(() => {
		fetchCounterFromContract();
	}, []);

	const fetchCounterFromContract = async () => {
		if (typeof window.ethereum !== 'undefined') {
			try {
				const currentCounter: number = await contract.getCounter();
				currentCounter >= 0
					? setCounter(hexadecimalToDecimal(currentCounter))
					: toast.error('Counter can not be negative');
			} catch (error: any) {
				handleError(error);
			}
		}
	};

	const incrementByOne = async () => {
		const contract = new ethers.Contract(counterAdress, Counter.abi, signer);

		try {
			const transaction = await contract.incrementCounterByOne();
			setLoading(true);
			await transaction.wait();
			fetchCounterFromContract();
			toast.success('Counter incremented by one');
			setLoading(false);
		} catch (error: any) {
			handleError(error);
		}
	};

	const decrementByOne = async () => {
		const contract = new ethers.Contract(counterAdress, Counter.abi, signer);

		try {
			const transaction = await contract.decrementCounterByOne();
			setLoading(true);
			await transaction.wait();
			fetchCounterFromContract();
			toast.success('Counter decremented by one');
			setLoading(false);
		} catch (error: any) {
			handleError(error);
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
