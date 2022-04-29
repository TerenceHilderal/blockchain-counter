// import Counter from './artifacts/contracts/Counter.sol/Counter.json';
import './App.css';
import Counter from './components/Counter';
import NavbarComponent from './components/Navbar/Navbar';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
	return (
		<>
			<div className='app'>
				<NavbarComponent />
				<Description />
				<Counter />
				<Footer />
			</div>
		</>
	);
};

export default App;
