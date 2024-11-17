import styles from '../App.module.css';
export const Todos = (props) => {
	const { isLoading, todos } = props;
	return (
		<>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles['todo__list']}>
					{todos.map(({ id, title }) => (
						<li className={styles['todo__list-item']} key={id}>
							{title}
						</li>
					))}
				</ul>
			)}
		</>
	);
};
