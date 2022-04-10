
import React from 'react';
import './App.css';
import { Route, Link, Routes,} from 'react-router-dom'

import Home from "./components/Home"
import ListaDePersonajes from './components/ListaPersonajes';
import PersonajeId from './components/PersonajePorId';
import Error404 from './components/Error404';
import BuscarPersonaje from './components/Busqueda';

function App() {
  return (
    <div>
      <Routes>

      <Route path='/' element={<Home/>}/>

      <Route path='/ListaDePersonajes' element={<ListaDePersonajes/>}/>

      <Route path='/PersonajeId/:id' element={<PersonajeId/>}/>

      <Route path='/Busqueda' element={<BuscarPersonaje/>}/>

      <Route path='*' element={<Error404/>}/>

      </Routes>
    </div>
  );
}

export default App;


/* import './App.css';
import ListaDePersonajes from './components/ListaPersonajes';
import PersonajeId from './components/PersonajePorId';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react'

function App() {
  return (
    <Routes> 

      <Route  path="/" exact={true} element={Home}/>

      <Route  path="ListaDePersonajes" element={<ListaDePersonajes/>}/>
 

      <Route  path="PersonajeId" element={PersonajeId}/>


    </Routes>
  );
}

export default App;
 */