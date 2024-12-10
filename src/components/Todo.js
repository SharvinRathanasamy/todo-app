import React, { useState, useEffect } from "react";

function Todo() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <div style={containerStyle}>
      {todo ? <h2>{todo.title}</h2> : <p>Loading...</p>}
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  marginTop: "2rem",
};

export default Todo;
