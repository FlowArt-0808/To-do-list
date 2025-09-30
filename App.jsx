import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const todos = ["Do the dishes", "Walk the dog", "Learn React"];
  const numbers = [1, 2, 3, 4, 5];

  function add() {}

  function Delete() {}

  function completed() {}

  function clear() {}

  function active() {}

  function all() {}

  // map
  // filter
  // reduce

  // const newTodos = todos.map(function (todo) {
  //   return "hi";
  // });

  // console.log(newTodos);

  // const newNumbers = numbers.map(function (number) {
  //   return number * 2;
  // });
  // console.log(newNumbers, numbers);

  // const newFilteredNumbers = numbers.filter(function (number) {
  //   return number % 2 === 0;
  // });
  // console.log(newFilteredNumbers, numbers);

  // const sum = numbers.reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);
  // console.log(sum, numbers);

  return (
    <>
      <div
        style={{ height: "500px", width: "500px", border: "1px solid black" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {todos.map(function (todo, index) {
            return (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <input type="checkbox" />
                <p
                  style={{
                    fontSize: "16px",
                    color: index === 0 ? "red" : "green",
                  }}
                >
                  {todo}
                </p>
              </div>
            );
          })}
        </div>
        <button onClick={all()}>All</button>
        <button onCLick={active()}>Active</button>
        <button onClick={completed()}>Completed</button>
        <button onClick={add()}>Add</button>
        <button onClick={Delete()}>Delete</button>
        <button onClick={clear()}></button>
      </div>
    </>
  );
}

export default App;
