import React from "react";

function Home() {
  return <h1 style={centeredText}>Welcome to the React App!</h1>;
}

const centeredText = {
  textAlign: "center",
  marginTop: "2rem",
};

export default Home;