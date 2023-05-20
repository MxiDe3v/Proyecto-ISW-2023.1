import React from "https://cdn.skypack.dev/react@17.0.1"
import { useState } from 'react'
import { Link } from "react-router-dom"
import guitarra from './images/guitarra.jpg'
import flauta from './images/flauta.jpg'
import tambor from './images/tambor.jpg'
import guitarra_sound from './sounds/guitarra.mp3'
import flauta_sound from './sounds/flauta.mp3'
import tambor_sound from './sounds/tambor.mp3'
import './Emparejar.css'


export const EmparejarTimbre = () => {
    
    const [tasks, setTasks] = useState([
        { 
            id: 1,
            title: 'Guitarra',
            body: `${guitarra}`,
            audio: guitarra_sound,
            list: 1
        },
        { 
            id: 2,
            title: 'Flauta',
            body: `${flauta}`,
            audio: flauta_sound,
            list: 1
        },
        { 
            id: 3,
            title: 'Tambor',
            body: `${tambor}`,
            audio: tambor_sound,
            list: 1
        }
    ]);

    // Delete the item with the given id
  // This function will be called when an "X" button is clicked
    const removeItem = (id) => {
        const updatedList = tasks.filter((item) => item.id !== id);
        setTasks(updatedList);
    };

    const getList = (list) => {
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id)
        console.log('comienza arrastrado...', item);
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        item.list = list;

        const newState = tasks.map(task => {
            if(task.id === itemID) return item;
            return task
        })

        setTasks(newState);
        console.log('termina arrastrado...', item) //importante tener en cuenta la lista en que termina (item.list) para luego determinar si esta correcto o no
    }
    return (
        <>
            <Link to="/etapa2"> 
                <button>Volver</button>
            </Link>
            <h1>
                Emparejar según el timbre del sonido &nbsp;
            </h1>
            <br/>

            <div className="drag-and-drop">
                <div className="column column--1">
                    <h3>
                        Imagenes disponibles
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' 
                            key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <div>
                                    <button
                                        className='delete-button'
                                        onClick={() => removeItem(item.id)}
                                        >
                                        X
                                    </button>
                                </div>
                                <strong className='title'>{item.title}</strong>
                                <img className='img' src={item.body} alt={item.title}></img>
                                <p>Escucha su sonido (precaucin volumen)</p>
                                <audio volume='0.1' controls type="audio/mpeg" src={item.audio}>
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column column--2">
                    <h3>
                        Viento
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className='dd-element' 
                            key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <img className='img' src={item.body} alt={item.title}></img>
                                <p>Escucha su sonido (precaucion volumen)</p>
                                <audio volume='0.1' controls type="audio/mpeg" src={item.audio} >
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column column--3">
                    <h3>
                        Cuerda
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className='dd-element' 
                            key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <img className='img' src={item.body} alt={item.title}></img>
                                <p>Escucha su sonido (precaucion volumen)</p>
                                <audio volume='0.1' controls type="audio/mpeg" src={item.audio} >
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column column--3">
                    <h3>
                        Percusión
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 4))}>
                        {getList(4).map(item => (
                            <div className='dd-element' 
                            key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <img className='img' src={item.body} alt={item.title}></img>
                                <p>Escucha su sonido (precaucion volumen)</p>
                                <audio volume='0.1' controls type="audio/mpeg" src={item.audio} >
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};
