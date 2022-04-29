import { render, screen } from '@testing-library/react';
import NavbarComponent from './Navbar';

describe('expect the logo to be on the navbar', () => {
	it('should return the logo on the document', () => {
		render(<NavbarComponent />);
		const logo = screen.getByTestId('logo');
		expect(logo).toBeInTheDocument();
	});
});

describe('the title exists', () => {
	it('should return the title on the document', () => {
		render(<NavbarComponent />);
		const title = screen.getByTestId('title');
		expect(title).toBeInTheDocument();
	});

	it('should return "Blockchain counter as a title"', () => {
		render(<NavbarComponent />);
		const title = screen.getByTestId('title').textContent;
		expect(title).toBe('Blockchain Counter');
	});
});
