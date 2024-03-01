import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './componentes/pages/Home/home';
import Login from './componentes/pages/Login/Login';
import Cadastro from './componentes/pages/Cadastro/Cadastro';
import './App.css';

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
     </Router>
    </>
  )
}

export default App
