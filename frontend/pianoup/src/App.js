import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import Entrypoint from './Entrypoint';
import Login from './user/Login';
import Register from './user/Register';
import Etapa1 from './etapas/Etapa1';
import Etapa2 from './etapas/Etapa2';
import Etapa3 from './etapas/Etapa3';
import Metronome from "./components/Metronome";

function App() {

  return (
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Entrypoint />} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/etapa1" element={<Etapa1 />} />
                  <Route path="/etapa2" element={<Etapa2 />} />
                  <Route path="/etapa3" element={<Etapa3 />} />
                  <Route path="/pulso" element={<Metronome />} />
                </Routes>
                <div className='d-flex justify-content-center'>
                    <Link to="/etapa1">
                        <Image className="m-5" src="images/act1.png"
                            rounded
                            width={300} 
                            height={300}/>
                    </Link>
                    <Link to="/etapa2">
                        <Image className="m-5" src="images/act2.png"
                            rounded
                            width={300} 
                            height={300}/>
                    </Link>
                    <Link to="/etapa3">
                        <Image className="m-5" src="images/act3.png"
                            rounded
                            width={300} 
                            height={300}/>
                    </Link>
                </div>
          </BrowserRouter>
  );
}

export default App;
