import './App.css';



import Entrypoint from './Entrypoint';
import Login from './user/Login';
import Register from './user/Register';
import { Routes, Route, BrowserRouter } from 'react-router-dom';



function App() {

  return (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Entrypoint />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
           </Routes>
            <h1>This is a test</h1>
          </BrowserRouter>
  );
}

export default App;
