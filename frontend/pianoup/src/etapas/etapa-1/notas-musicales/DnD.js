import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"
import './DnD.css'

import Dom from './audio/0Dom.mp3';
import Re from './audio/1Re.mp3';
import Mi from './audio/2Mi.mp3';
import Fa from './audio/3Fa.mp3';
import Sol from './audio/4Sol.mp3';
import La from './audio/5La.mp3';
import Si from './audio/6Si.mp3';
import Do from './audio/7Do.mp3';

import Espacio from './imgs/espacio.png';
import DomImg from './imgs/0Dom.png';
import ReImg from './imgs/1Re.png';
import MiImg from './imgs/2Mi.png';
import FaImg from './imgs/3Fa.png';
import SolImg from './imgs/4Sol.png';
import LaImg from './imgs/5La.png';
import SiImg from './imgs/6Si.png';
import DoImg from './imgs/7Do.png';

export default function DnD() {

    const [tasks, setTasks] = useState([
        {
            id: 0,
            type: 0,
            title: 'Espacio',
            body: <img src={Espacio} alt="Nada" style={{width: '50%'}}/>,
            list: 0,
        },
        { 
            id: 1,
            type: 1,
            title: 'Dom',
            body: <img src={DomImg} alt="Nota DO" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Dom)
        },
        { 
            id: 2,
            type: 2,
            title: 'Re',
            body: <img src={ReImg} alt="Nota RE" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Re)
        },
        { 
            id: 3,
            type: 3,
            title: 'Mi',
            body: <img src={MiImg} alt="Nota MI" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Mi)
        },
        { 
            id: 4,
            type: 4,
            title: 'Fa',
            body: <img src={FaImg} alt="Nota FA" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Fa)
        },
        { 
            id: 5,
            type: 5,
            title: 'Sol',
            body: <img src={SolImg} alt="Nota SOL" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Sol)
        },
        { 
          id: 6,
          type: 6,
          title: 'La',
          body: <img src={LaImg} alt="Nota LA" style={{width: '50%'}}/>,
          list: 0,
          audio: new Audio(La)
        },
        { 
          id: 7,
          type: 7,
          title: 'Si',
          body: <img src={SiImg} alt="Nota SI" style={{width: '50%'}}/>,
          list: 0,
          audio: new Audio(Si)
        },
        { 
          id: 8,
          type: 8,
          title: 'Do',
          body: <img src={DoImg} alt="Nota Do" style={{width: '50%'}}/>,
          list: 0,
          audio: new Audio(Do)
        }
    ]);

    const getList = (list) => {
        return tasks.filter(item => item.list === list)
    }

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id);
        evt.dataTransfer.setData('itemType', item.type);
        evt.dataTransfer.setData('itemTitle', item.title);
        console.log(item);
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    //Simplificar
    const cloneNote = (itemType, lastId, title) => {
        const newId = lastId++;

        const blank = {
            id: newId,
            type: 0,
            title: 'Espacio',
            body: <img src={Espacio} alt="Nada" style={{width: '50%'}}/>,
            list: 0,
            // audio: new Audio(Dom)
        }
        const dom = {
            id: newId,
            type: 1,
            title: title,
            body: <img src={DomImg} alt="Nota Dom" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Dom)
        }
        const re = {
            id: newId,
            type: 2,
            title: title,
            body: <img src={ReImg} alt="Nota Re" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Re)
        }
        const mi = {
            id: newId,
            type: 3,
            title: title,
            body: <img src={MiImg} alt="Nota Mi" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Mi)
        }
        const fa = {
            id: newId,
            type: 4,
            title: title,
            body: <img src={FaImg} alt="Nota Fa" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Fa)
        }
        const sol = {
            id: newId,
            type: 5,
            title: title,
            body: <img src={SolImg} alt="Nota Sol" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Sol)
        }
        const la = {
            id: newId,
            type: 6,
            title: title,
            body: <img src={LaImg} alt="Nota La" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(La)
        }
        const si = {
            id: newId,
            type: 7,
            title: title,
            body: <img src={SiImg} alt="Nota Si" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Si)
        }
        const nota_do = {
            id: newId,
            type: 8,
            title: title,
            body: <img src={DoImg} alt="Nota Do" style={{width: '50%'}}/>,
            list: 0,
            audio: new Audio(Do)
        }

        console.log('tipo: ' + itemType);

        switch(itemType){
            
            case '0':
                setTasks([...tasks, blank]);
                console.log('tipo: ' + itemType);
                break;
            case '1':
                setTasks([...tasks, dom]);
                console.log('tipo: ' + itemType);
                break;
            case '2':
                setTasks([...tasks, re]);
                break;
            case '3':
                setTasks([...tasks, mi]);
                break;
            case '4':
                setTasks([...tasks, fa]);
                break;
            case '5':
                setTasks([...tasks, sol]);
                break;
            case '6':
                setTasks([...tasks, la]);
                break;
            case '7':
                setTasks([...tasks, si]);
                break;
            case '8':
                setTasks([...tasks, nota_do]);
                break;
        }

    };

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const itemType = evt.dataTransfer.getData('itemType');
        const itemTitle = evt.dataTransfer.getData('itemTitle');
        const item = tasks.find(item => item.id == itemID);
        console.log(itemID);
        console.log(itemType);
        console.log(item.list);
        
        if((itemType == list || itemType==0) || list == 0) {
            item.list = list;
                
                const newState = tasks.map(task => {
                    if(task.id === itemID) return item;
                    return task
                })
                
                setTasks(newState);
                cloneNote(itemType, tasks.length + 1, itemTitle);
            }
    }

    return (
        <>
            <h1>
                PENTAGRAMA &nbsp;
                {/* <img className='icon-react' src="src/assets/react.svg" alt="" /> */}
            </h1>
            <br/>

            <div className='drag-and-drop'>
                <div className='column column--2'>
                    <h3>Do</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 8))}>
                        {getList(8).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Si</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 7))}>
                        {getList(7).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <h3>La</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 6))}>
                        {getList(6).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Sol</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 5))}>
                        {getList(5).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Fa</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 4))}>
                        {getList(4).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Mi</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                        {getList(3).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Re</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getList(2).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                    <h3>Do</h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--1'>
                    <h3>
                        Tus Notas Musicales
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 0))}>
                        {getList(0).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <div className='body'>{item.body}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
