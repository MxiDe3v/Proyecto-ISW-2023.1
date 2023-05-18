import './App.css';

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import Home from './Home';
import Login from './user/Login';
import Register from './user/Register';

import Notas from './etapas/etapa-1/notas-musicales/Notas'
import Etapa1 from './etapas/Etapa1';
import Etapa2 from './etapas/Etapa2';
import Etapa3 from './etapas/Etapa3';
import { EmparejarDuracion } from './components/EmparejarDuracion';
import { EmparejarTimbre } from './components/EmparejarTimbre';
import { EmparejarIntensidad } from './components/EmparejarIntensidad';
import { EmparejarFrecuencia } from './components/EmparejarFrecuencia';
import Memorice from './Memorice';
import Tempo from './Tempo';
import Metronome from "./components/Metronome";
import Card from './components/Card';

import { images } from './import';

function App() {

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, [])

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }

  return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/etapa1" element={<Etapa1 />} />
                <Route path="/etapa2" element={<Etapa2 />} />
                <Route path="/etapa3" element={<Etapa3 />} />
                <Route path="/memorice" element={<Memorice/>}/>
                <Route path="/tempo" element={<Tempo/>}/>
            </Routes>
      </div>
    /*
    <div className='app'>
      <div className='cards-container' >
        {
          cards.map((card, index) => (
            <Card
              name={card.nota}
              number={index}
              frontFace={card.src}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
            />
          ))
        }
      </div>
    </div>
    */
  );
}

export default App;
