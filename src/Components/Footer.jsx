function Footer ({ todos, setTodos, filter, setFilter }) {
    const activeCount = todos.filter( t => !t.completed).length;

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> items left
            </span>
            
            <ul className="filters">
                <li>
                    <a className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>All</a>
                </li>
                <li>
                    <a className={filter === "active" ? "selected" : ""} onClick={() => setFilter("active")}>Active</a>
                </li>
                 <li>
                     <a className={filter === "completed" ? "selected" : ""} onClick={() => setFilter("completed")}>Completed</a>
                 </li>
            </ul>

      <button className="clear-completed" onClick={() => setTodos(todos.filter(t => !t.completed))}>
        Clear completed
      </button>
    </footer>
    );
}
export default Footer;