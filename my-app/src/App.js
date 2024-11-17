import { useEffect, useState } from 'react';
import { Todos } from './components/Todos';
import styles from './App.module.css';

export const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);
	const state = {
		isLoading,
		setIsLoading,
		todos,
		setTodos,
	};

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.app}>
			<h1>Todo list</h1>
			<div className={styles.todo}>
				<Todos {...state} />
			</div>
		</div>
	);
};
