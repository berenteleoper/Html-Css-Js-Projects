function Main ({ todos, setTodos, filter }) {

    const filteredTodos = todos. filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed} : r));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <section className="main">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <li key = {todo.id} className={todo.completed ? "completed" : ""}>
                        <div className="view">
                            <input
                            className="toggle"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            />
                            <label>{todo.text}</label>
                            <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Main;