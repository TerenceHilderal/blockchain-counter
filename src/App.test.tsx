import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Blockchain counter as title', () => {
	render(<App />);
	const titleElement = screen.getByText(/Blockchain counter/i);
	expect(titleElement).toBeInTheDocument();
});

test('renders btn', () => {
	render(<App />);
	// const btnElement = screen.getAllByRole('button');
	// expect(btnElement).toBeInTheDocument();
});
