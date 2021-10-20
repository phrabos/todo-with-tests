import React from 'react';

const TodoInput = ({ input, handleInputChange, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<input
				aria-label="todo input"
				type="text"
				placeholder="new todo"
				value={input}
				onChange={handleInputChange}
			></input>
			<button aria-label="submit todo" type="submit">
				add todo
			</button>
		</form>
	);
};

export default TodoInput;
