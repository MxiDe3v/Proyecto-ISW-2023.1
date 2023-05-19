import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import ResponsiveAppBar from '../ResponsiveAppBar';
import './Etapa.css';

function Etapa2() {
	return (
			<h1>Etapa 2</h1>

			<div className='d-flex justify-content-center'>

				<Card className='m-5'>
					<Link to='/pulso' >
						<CardMedia 
							component='img'
							height='300'
							image='images/act2.png'
						/>
					</Link>
					<CardContent>
						<Link to='/pulso'>
							<Typography gutterBottom variant='h3'>
								Memorice
							</Typography>
						</Link>
						<Typography variant='body2'>
							Progreso : {}
						</Typography>
					</CardContent>
				</Card>

				<Card className='m-5'>
					<Link to='/pulso'>
						<CardMedia 
							component='img'
							height='300'
							image='images/act2.png'
						/>
					</Link>
					<CardContent>
						<Link to='/pulso'>
							<Typography gutterBottom variant='h3'>
								Compositor
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
export default Etapa2;
