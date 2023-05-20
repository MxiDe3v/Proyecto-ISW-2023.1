import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function Menu() {
  return (
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

            <Link to="/juegos">
                <Image className="m-5" src="images/logo.png"
                    rounded
                    width={300} 
                    height={300}/>
            </Link>
        </div>
  );
}

export default Menu;
