import './App.css';



import Entrypoint from './Entrypoint';
import Login from './user/Login';
import Register from './user/Register';
import Notas from './etapas/etapa-1/notas-musicales/Notas'
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {

  return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Entrypoint />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/etapas/1/notas_musicales" element={<Notas/>}/>  {/* No se puede llegar desde página. Usar ruta en navegador. */}
           </Routes>
          </BrowserRouter>
  );
}

export default App;
