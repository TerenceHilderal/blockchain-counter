import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar component', () => {
	render(<App />);
	const NavBarContainer = screen.getByTestId('navbar_container');
	expect(NavBarContainer).toBeInTheDocument();
});

test('renders Description component', () => {
	render(<App />);
	const DescriptionContainer = screen.getByTestId('description_container');
	expect(DescriptionContainer).toBeInTheDocument();
});

test('renders Counter component', () => {
	render(<App />);
	const CounterContainer = screen.getByTestId('counter_container');
	expect(CounterContainer).toBeInTheDocument();
});

test('renders Footer component', () => {
	render(<App />);
	const FooterContainer = screen.getByTestId('footer');
	expect(FooterContainer).toBeInTheDocument();
});
