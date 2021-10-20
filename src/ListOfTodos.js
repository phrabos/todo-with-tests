import React from 'react';

const ListOfTodos = ({ todos, handleDelete }) => {
	return (
		<ul>
			todo list
			{todos &&
				todos.map((todo, idx) => (
					<li key={`${todo}-${idx}`} onClick={() => handleDelete(idx)}>
						{todo}
					</li>
				))}
		</ul>
	);
};

export default ListOfTodos;
