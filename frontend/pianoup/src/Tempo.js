import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Howl } from 'howler';
import './Tempo.css';

import Adagio from './Sonidos/Adagio.mp3';
import Allegro from './Sonidos/Allegro.mp3';
import Andante from './Sonidos/Andante.mp3';
import Presto from './Sonidos/Presto.mp3';

import imgAdagio from './images/Tempo/Adagio.png';
import imgAndante from './images/Tempo/Andante.png';
import imgAllegro from './images/Tempo/Allegro.png';
import imgPresto from './images/Tempo/Presto.png';

export default function Tempo() {
  const [currentSound, setCurrentSound] = useState(null);

  const playSound = (soundUrl) => {
    // Detener el sonido actual si se está reproduciendo
    if (currentSound) {
      currentSound.stop();
    }

    const sound = new Howl({ src: [soundUrl], volume: 0.3 });
    setCurrentSound(sound);
    sound.play();
  };

  const handleClick = (event) => {
    const tempo = event.target.dataset.value;

    if (tempo === 'Adagio') {
      playSound(Adagio);
    } else if (tempo === 'Andante') {
      playSound(Andante);
    } else if (tempo === 'Allegro') {
      playSound(Allegro);
    } else if (tempo === 'Presto') {
      playSound(Presto);
    }

    console.log('Image clicked');
  };

  return (
    <div>
      <h1 className="title">Tempo</h1>
      <div className='image-container'>
      <figure>
        <img
          src={imgAdagio}
          onClick={handleClick}
          className="imgSound"
          data-value="Adagio"
          alt="Adagio"
        />
        <figcaption className='elegant-text'>Lento</figcaption>
      </figure>
      <figure>
        <img
          src={imgAndante}
          onClick={handleClick}
          className="imgSound"
          data-value="Andante"
          alt="Andante"
        />
        <figcaption className='elegant-text'>Moderado</figcaption>
      </figure>
      <figure>
        <img
          src={imgAllegro}
          onClick={handleClick}
          className="imgSound"
          data-value="Allegro"
          alt="Allegro"
        />
        <figcaption className='elegant-text'>Rapido</figcaption>
      </figure>
      <figure>
        <img
          src={imgPresto}
          onClick={handleClick}
          className="imgSound"
          data-value="Presto"
          alt="Presto"
        />
        <figcaption className='elegant-text'>Muy rapido</figcaption>
      </figure> 
      </div>
      <ul>
        <li>
          <Link to={'/Home'} className="button-bottom-center">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
