import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './user/Login';
import Register from './user/Register';

import Etapa1 from './etapas/Etapa1';
import Etapa2 from './etapas/Etapa2';
import Etapa3 from './etapas/Etapa3';
import Metronome from './components/Metronome';

function App() {

  return (
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/pulso" element={<Metronome />}></Route>
              <Route path="/etapa1" element={<Etapa1 />} />
              <Route path="/etapa2" element={<Etapa2 />} />
              <Route path="/etapa3" element={<Etapa3 />} />
            </Routes>
      </div>
  );
}

export default App;
