import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import ResponsiveAppBar from '../ResponsiveAppBar';
import './Etapa.css';

function Etapa1() {
	return (
		<>
			<h1>Etapa 1</h1>
			<div className='d-flex justify-content-center'>
				<Card className='m-5'>
					<Link to='/llavesol'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act1.png'
						/>
					</Link>
					<CardContent>
						<Link to='/llavesol'>
							<Typography gutterBottom variant='h3'>
                                Llave de Sol
							</Typography>
						</Link>
						<Typography variant='body2'>
							Progreso : {}
						</Typography>
					</CardContent>
				</Card>
				<Card className='m-5'>
					<Link to='/notas'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act1.png'
						/>
					</Link>
					<CardContent>
						<Link to='/notas'>
							<Typography gutterBottom variant='h3'>
                                Notas musicales
							</Typography>
						</Link>
						<Typography variant='body2'>
							Progreso : {}
						</Typography>
					</CardContent>
				</Card>
				
				<Card className='m-5'>
					<Link to='/metronome'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act1.png'
						/>
					</Link>
					<CardContent>
						<Link to='/metronome'>
							<Typography gutterBottom variant='h3'>
                                Metronomo
							</Typography>
						</Link>
						<Typography variant='body2'>
							Progreso : {}
						</Typography>
					</CardContent>
				</Card>

				<Card className='m-5'>
					<Link to='/emparejar-frecuencia'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act1.png'
						/>
					</Link>
					<CardContent>
						<Link to='/emparejar-frecuencia'>
							<Typography gutterBottom variant='h3'>
                                Emparejar-frecuencia
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
