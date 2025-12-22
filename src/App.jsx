import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <>
      <section className="todoapp">
        <Header todos={todos} setTodos={setTodos} />
        <Main todos={todos} setTodos={setTodos} filter={filter} />
        <Footer todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
      </footer>
    </>
  );
}

export default App;