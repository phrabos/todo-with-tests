import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', async () => {
	const { container } = render(<App />);
	const input = screen.getByPlaceholderText('new todo');
	expect(input).toBeInTheDocument();

	userEvent.type(input, 'new todo 1');
	expect(input).toHaveValue('new todo 1');

	const button = screen.getByRole('button', { name: 'submit todo' });
	expect(button).toBeInTheDocument();

	userEvent.click(button);

	userEvent.type(input, '{selectall}{del}new todo 2');
	expect(input).toHaveValue('new todo 2');

	userEvent.click(button);

	const li = screen.getAllByText('new todo', { exact: false });
	expect(li.length).toBe(2);

	const toDelete = screen.getByText('new todo 1');
	userEvent.click(toDelete);
	expect(toDelete).not.toBeInTheDocument();

	expect(container).toMatchSnapshot();
});
