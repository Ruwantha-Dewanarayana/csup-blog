import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import Footer from './Components/Footer';
import SinglePost from './Components/SinglePost';
import Register from './Components/Register';
import AddPost from './Components/AddPost';
const name="sasika";
export const User =React.createContext(name);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
