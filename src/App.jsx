import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,NavLink,Routes,Navigate,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export default function App() {
  return <div><header>
  <h1>Tony's Pizza Galleria</h1>
  <nav id = "mainmenu">
      <menu>
          <a href="index.html">
              <button type="button" className="btn btn-primary">Home</button>
          </a>
          <button type="button" className="btn btn-primary" onclick="changeWindow()">Create</button>
          <a href="galleria.html">
              <button type="button" className="btn btn-primary">Galleria</button>
          </a>

      </menu>
  </nav>
  <hr />
</header>
<body>App will go here</body>
<footer>
        <p id="Fact">.</p>

        <p id="source">
        <a href="https://github.com/BlueBomber49/startup">Github repo</a>
        </p>
    </footer>
</div>
}