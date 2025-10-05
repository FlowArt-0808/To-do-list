import { useState } from "react";
import "./App.css";

function App() {
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  function add() {
    if (input === "") return;
    setActiveTodos([...activeTodos, input]);
    setInput("");
  }

  function complete(index) {
    const task = activeTodos[index];
    setActiveTodos(activeTodos.filter((_, i) => i !== index));
    setCompletedTodos([...completedTodos, task]);
  }

  function undo(index) {
    const task = completedTodos[index];
    setCompletedTodos(completedTodos.filter((_, i) => i !== index));
    setActiveTodos([...activeTodos, task]);
  }

  function removeActive(index) {
    setActiveTodos(activeTodos.filter((_, i) => i !== index));
  }

  function removeCompleted(index) {
    setCompletedTodos(completedTodos.filter((_, i) => i !== index));
  }

  function clear() {
    setCompletedTodos([]);
  }

  const showAll = filter === "all";
  const showActive = filter === "active";
  const showCompleted = filter === "completed";

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

      <div className="todo-tabs">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <div>
        {showAll && (
          <div className="todo-group all">
            {activeTodos.length === 0 && completedTodos.length === 0 ? (
              <p className="no-task">No tasks yet. Add one above!</p>
            ) : (
              <>
                {activeTodos.map((task, i) => (
                  <div className="todo-item" key={i}>
                    <input type="checkbox" onChange={() => complete(i)} />
                    <p className="todo-text">{task}</p>
                    <button
                      className="delete"
                      onClick={() => removeActive(i)}
                    >
                      Delete
                    </button>
                  </div>
                ))}

                {completedTodos.map((task, i) => (
                  <div
                    className="todo-item done"
                    key={i + activeTodos.length}
                  >
                    <input type="checkbox" checked onChange={() => undo(i)} />
                    <p className="todo-text">{task}</p>
                    <button
                      className="delete"
                      onClick={() => removeCompleted(i)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {showActive && (
          <div className="todo-group active">
            {activeTodos.length === 0 ? (
              <p className="no-task">No active tasks</p>
            ) : (
              activeTodos.map((task, i) => (
                <div className="todo-item" key={i}>
                  <input type="checkbox" onChange={() => complete(i)} />
                  <p className="todo-text">{task}</p>
                  <button
                    className="delete"
                    onClick={() => removeActive(i)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {showCompleted && (
          <div className="todo-group completed">
            {completedTodos.length === 0 ? (
              <p className="no-task">No completed tasks</p>
            ) : (
              completedTodos.map((task, i) => (
                <div className="todo-item done" key={i}>
                  <input type="checkbox" checked onChange={() => undo(i)} />
                  <p className="todo-text">{task}</p>
                  <button
                    className="delete"
                    onClick={() => removeCompleted(i)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {(activeTodos.length > 0 || completedTodos.length > 0) && (
        <div className="todo-footer">
          <span>
            {completedTodos.length} of{" "}
            {activeTodos.length + completedTodos.length} tasks completed
          </span>
          <button className="clear" onClick={clear}>
            Clear completed
          </button>
        </div>
      )}

      <div className="footer">
        Powered by <a href="#">Pinecone Academy</a>
      </div>
    </div>
  );
}

export default App;
