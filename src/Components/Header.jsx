import { useState } from "react";

function Header({ todos , setTodos }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        const newTodo = {
            id: crypto.randomUUID(),
            text: text,
            complated: false
        };

        setTodos([...todos, newTodo]);
        setText("");
    };
    return (
        <header className="header">
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input 
                className = "new-todo"
                placeholder = "What needs to be done?"
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                autoFocus
                />
            </form>
        </header>
    );
}

export default Header;