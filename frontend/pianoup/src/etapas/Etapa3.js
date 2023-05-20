import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import ResponsiveAppBar from '../ResponsiveAppBar';
import './Etapa.css';

function Etapa3() {
	return (
		<>
			<h1>Etapa 3</h1>

			<div className='d-flex justify-content-center'>

				<Card className='m-5'>
					<Link to='/tempo'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act3.png'
						/>
					</Link>
					<CardContent>
						<Link to='/tempo'>
							<Typography gutterBottom variant='h3'>
                                Tempo
							</Typography>
						</Link>
						<Typography variant='body2'>
							Progreso : {}
						</Typography>
					</CardContent>
				</Card>

				<Card className='m-5'>
					<Link to='/emparejar-intensidad'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act3.png'
						/>
					</Link>
					<CardContent>
						<Link to='/emparejar-intensidad'>
							<Typography gutterBottom variant='h3'>
                                Emparejar-intensidad
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

export default Etapa3;
