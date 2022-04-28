// import Counter from './artifacts/contracts/Counter.sol/Counter.json';
import './App.css';
import Counter from './components/Counter';
import NavbarComponent from './components/Navbar/Navbar';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';

// const counterAdress: string = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const App: React.FC = () => {
	// const [counter, setCounter] = useState(null);
	// const [error, setError] = useState('');

	// useEffect(() => {
	// 	fetchCounterFromContract();
	// }, []);

	// async function mint() {
	// 	//@ts-ignore

	// 	await window.ethereum.request({
	// 		method: 'eth_requestAccounts',
	// 	});
	// 	//@ts-ignore

	// 	const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 	const signer = provider.getSigner();
	// 	const contract = new ethers.Contract(counterAdress, Counter.abi, signer);
	// 	try {
	// 		const transaction = await contract.incrementCounterByOne();
	// 		await transaction.wait();
	// 		fetchCounterFromContract();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// async function demint() {
	// 	//@ts-ignore

	// 	let accounts = await window.ethereum.request({
	// 		method: 'eth_requestAccounts',
	// 	});
	// 	//@ts-ignore

	// 	const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 	const signer = provider.getSigner();
	// 	const contract = new ethers.Contract(counterAdress, Counter.abi, signer);
	// 	try {
	// 		const transaction = await contract.decrementCounterByOne();
	// 		await transaction.wait();
	// 		fetchCounterFromContract();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	// const fetchCounterFromContract = async () => {
	// 	//@ts-ignore

	// 	if (typeof window.ethereum !== 'undefined') {
	// 		//@ts-ignore

	// 		const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		const contract = new ethers.Contract(
	// 			counterAdress,
	// 			Counter.abi,
	// 			provider,
	// 		);
	// 		try {
	// 			const currentCounter = await contract.getCounter();
	// 			setCounter(currentCounter);
	// 			console.log(currentCounter);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// };

	return (
		<>
			<div className='app'>
				<NavbarComponent />
				<Description />
				<Counter />
				<Footer />
				{/* <p>{Number(counter)}</p>
			<div>
			<button onClick={mint}>Increment </button>
			<button onClick={demint}>Decrement </button>
		</div> */}
			</div>
		</>
	);
};

export default App;
