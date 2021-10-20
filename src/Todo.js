import React, { useState } from 'react';
import ListOfTodos from './ListOfTodos';
import TodoInput from './TodoInput';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const handleInputChange = (event) => {
		setInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setTodos((prev) => [...prev, input]);
		setInput('');
	};

	const handleDelete = (idx) => {
		setTodos((prev) => prev.filter((_, i) => i !== idx));
	};

	return (
		<>
			{/* <h2>todo list</h2> */}
			<TodoInput
				input={input}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
			/>
			<ListOfTodos todos={todos} handleDelete={handleDelete} />
		</>
	);
};

export default Todo;
