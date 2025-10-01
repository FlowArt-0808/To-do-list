import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function add() {
    if (input === "") return;
    setTodos([...todos, input]);
    setInput("");
  }

  function remove(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className="todo-card">
      <h2>To-Do List</h2>

      <div className="todo-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={add}>Add</button>
      </div>

      <div>
        {todos.length === 0 && (
          <p className="no-task">No tasks yet. Add one above!</p>
        )}

        {todos.length > 0 &&
          todos.map((task, i) => (
            <div className="todo-item" key={i}>
              <p className="todo-text">{task}</p>
              <button className="delete" onClick={() => remove(i)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
