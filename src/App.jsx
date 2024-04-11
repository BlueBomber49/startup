import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Create} from './Create/Create'
import {Galleria} from './Galleria/Galleria'
import {Main} from './Main/Main'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export default function App() {
  const [authenticated, setAuthentication] = React.useState(false)

  
  return <BrowserRouter>
  <div><header>
  <h1>Tony's Pizza Galleria</h1>
  <nav id = "mainmenu">
      <menu>
        {authenticated === true &&(
          <NavLink to="/">
              <button type="button" className="btn btn-primary">Home</button>
          </NavLink>
        )} 
        {authenticated === true &&(
          <NavLink to="create">
          <button type="button" className="btn btn-primary">Create</button>
          </NavLink>
        )}
        {authenticated === true &&(
          <NavLink to="galleria">
              <button type="button" className="btn btn-primary">Galleria</button>
          </NavLink>
        )}
      </menu>
  </nav>
  <hr />
</header>

<Routes>
  <Route path='/' element={<Main
                            auth = {authenticated}
                            changeAuth = {setAuthentication}
                            />} exact />
  <Route path='/create' element={<Create/>}/>
  <Route path='/galleria' element={<Galleria/>}/>
  <Route path='*' element={<NotFound />} />
</Routes>

<footer>
        <p id="Fact">.</p>

        <p id="source">
        <a href="https://github.com/BlueBomber49/startup">Github repo</a>
        </p>
    </footer>
</div>
</BrowserRouter>
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>Looks like somebody got a bit lost!  </main>;
}