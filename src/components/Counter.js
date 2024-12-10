import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={containerStyle}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  marginTop: "2rem",
};

export default Counter;