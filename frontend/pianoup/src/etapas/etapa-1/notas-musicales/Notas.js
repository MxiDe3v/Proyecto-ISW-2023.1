import * as React from "react";
import ResponsiveAppBar from "../../../ResponsiveAppBar";

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import DnD from "./DnD";
import {useEffect, useState} from 'react';

import Dom from './audio/0Dom.mp3';
import Re from './audio/1Re.mp3';
import Mi from './audio/2Mi.mp3';
import Fa from './audio/3Fa.mp3';
import Sol from './audio/4Sol.mp3';
import La from './audio/5La.mp3';
import Si from './audio/6Si.mp3';
import Do from './audio/7Do.mp3';

import DomImg from './imgs/0Dom.png';
import ReImg from './imgs/1Re.png';
import MiImg from './imgs/2Mi.png';
import FaImg from './imgs/3Fa.png';
import SolImg from './imgs/4Sol.png';
import LaImg from './imgs/5La.png';
import SiImg from './imgs/6Si.png';
import DoImg from './imgs/7Do.png';

const notasMusicales = [
  {nota: Dom, label: "Dom"},
  {nota: Re, label: "Re"},
  {nota: Mi, label: "Mi"},
  {nota: Fa, label: "Fa"},
  {nota: Sol, label: "Sol"},
  {nota: La, label: "La"},
  {nota: Si, label: "Si"},
]

export default function Notas() {

  function playDom(){
    new Audio(Dom).play();
  }
  function playRe(){
    new Audio(Re).play();
  }
  function playMi(){
    new Audio(Mi).play();
  }
  function playFa(){
    new Audio(Fa).play();
  }
  function playSol(){
    new Audio(Sol).play();
  }
  function playLa(){
    new Audio(La).play();
  }
  function playSi(){
    new Audio(Si).play();
  }
  function playDo(){
    new Audio(Do).play();
  }
  
return (
    <>
      <Typography 
        textAlign="center"
        variant="h5"
        noWrap
        sx={{
          mx: 2,
          py: 2,
          // display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          // color: "inherit",
          textDecoration: "none",
          }}>

        ¡Presiona las notas para escucharlas!
      </Typography>
      <Container maxWidth="md">
        <Grid 
          container 
          spacing={0.5} 
          maxWidth="md" 
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid 
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button 
              variant="text"
              style={{flexDirection:'column'}}
              onClick={playDom}>
              <img src={DomImg} alt="Dom" width={"60px"}/>&nbsp;{`Do`}
            </Button>
          </Grid>
          <Grid
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              style={{flexDirection:'column'}}
              onClick={playRe}>
              <img src={ReImg} alt="Re" width={"60px"}/>&nbsp;{`Re`}
            </Button>
          </Grid>
          <Grid
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="text"
              style={{flexDirection:'column'}}
              onClick={playMi}>
              <img src={MiImg} alt="Mi" width={"60px"}/>
              &nbsp;{`Mi`}
            </Button>
          </Grid>
          <Grid
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              style={{flexDirection:'column'}}
              onClick={playFa}>
              <img src={FaImg} alt="Fa" width={"60px"}/>
              &nbsp;{`Fa`}
            </Button>
          </Grid>
          <Grid
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              style={{flexDirection:'column'}}
              onClick={playSol}>
              <img src={SolImg} alt="Sol" width={"60px"}/>
              &nbsp;{`Sol`}
            </Button>
          </Grid>
          <Grid
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              style={{flexDirection:'column'}}
              onClick={playLa}>
              <img src={LaImg} alt="La" width={"60px"}/>
              &nbsp;{`La`}
            </Button>
          </Grid>
          <Grid
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              style={{flexDirection:'column'}}
              onClick={playSi}>
              <img src={SiImg} alt="La" width={"60px"}/>
              &nbsp;{`Si`}
            </Button>
          </Grid>
          <Grid
            item xs={1.5}
            style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              style={{flexDirection:'column'}}
              onClick={playDo}>
              <img src={DoImg} alt="Do" width={"60px"}/>
              &nbsp;{`Do`}
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Typography 
        textAlign="center"
        variant="h5"
        noWrap
        sx={{
          mt: 6,
          mb: 2,
          py: 2,
          // display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          // color: "inherit",
          textDecoration: "none",
          }}>

        Arrastra las notas al pentagrama para componer tu melodía
      </Typography>
      <DnD></DnD>
    </>
)}
