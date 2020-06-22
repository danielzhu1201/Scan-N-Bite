import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. This is a Visa
          Hackathon project!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
            axios
              .get("https://dog.ceo/api/breeds/image/random")
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Howdy!
        </button>
      </header>
    </div>
  );
}

export default App;
