import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import firebaseApp from "./config/firebase";
import Login from "./Login";
import Home from "./Home";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload. This is a Visa
//           Hackathon project!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         <div className="RegisterLoginContainer">
//           <input id="txtEmail" type="email" placeholder="Email"></input>
//           <input id="txtPassword" type="password" placeholder="Password"></input>
//           <button id="btnLogin" type="button">Log In</button>
//           <button id="btnSignUp" type="button">Sign Up</button>
//           <button id="btnLogout" type="button">Log Out</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div
        className="App"
        style={{
          margin: "100px 0px",
        }}
      >
        {/* <header className="App-header">
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
        </header> */}

        {this.state.user ? <Home /> : <Login />}
      </div>
    );
  }
}

export default App;
