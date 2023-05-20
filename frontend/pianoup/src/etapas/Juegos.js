import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import ResponsiveAppBar from '../ResponsiveAppBar';
import './Etapa.css';

function Etapa1() {
	return (
		<>
			<Link to="/"> 
                <button>Volver</button>
            </Link>
			<h1>Juegos</h1>
			<div className='d-flex justify-content-center'>

				<Card className='m-5'>
					<Link to='/memorice'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act1.png'
						/>
					</Link>
					<CardContent>
						<Link to='/memorice'>
							<Typography gutterBottom variant='h3'>
                                Memorice
							</Typography>
						</Link>
						<Typography variant='body2'>
							Progreso : {}
						</Typography>
					</CardContent>
				</Card>
				
			</div>
		</>
	);
}

export default Etapa1;
