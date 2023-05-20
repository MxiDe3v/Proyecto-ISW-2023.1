import React from "https://cdn.skypack.dev/react@17.0.1"
import { useState } from 'react'
import leon from './images/leon.jpg'
import vaca from './images/vaca.jpg'
import lion_sound from './sounds/lion_roar.mp3'
import cow_sound from './sounds/cow_moo.mp3'
import './Emparejar.css'


export const EmparejarDuracion = () => {
    
    const [tasks, setTasks] = useState([
        { 
            id: 1,
            title: 'Leon',
            body: `${leon}`,
            audio: lion_sound,
            list: 1
        },
        { 
            id: 2,
            title: 'Vaca',
            body: `${vaca}`,
            audio: cow_sound,
            list: 1
        },
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
            <h1>
                Emparejar según duración del sonido &nbsp;
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
                                <p>Escucha su sonido (precaucion volumen)</p>
                                <audio volume='0.1' controls type="audio/mpeg" src={item.audio}>
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column column--2">
                    <h3>
                        Sonidos largos
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
                        Sonidos cortos
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
            </div>
        </>
    )
};