import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Memorice from './Memorice';
import Home from './Home';
import Tempo from './Tempo';

const router = createBrowserRouter([{
  path: "/",
  element: <Home className = 'button'/>
},
  {
    path: "/Memorice",
    element: <Memorice/>
},
{
  path: "/Tempo",
  element: <Tempo/>
},
{
  path: "/Memorice",
  element: <Memorice/>
}
])
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);

