import React, { Component } from "react";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import image from "./assets/heart.png";
import "./metronome.css";

const click1 = "//daveceddia.com/freebies/react-metronome/click1.wav";
const click2 = "//daveceddia.com/freebies/react-metronome/click2.wav";

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      count: 0,
      bpm: 80,
      beatsPerMeasure: 4
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleInputChange = event => {
    const bpm = event.target.value;

    if (this.state.isPlaying) {
      // stop old timer and start a new one
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

      // set the new bpm
      // and reset the beat counter
      this.setState({
        count: 0,
        bpm
      });
    } else {
      // otherwise, just update the bpm
      this.setState({ bpm });
    }
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    // alternate click sounds
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }

    // keep track of which beat we're on
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };

  startStop = () => {
    if (this.state.isPlaying) {
      // stop the timer
      clearInterval(this.timer);
      this.setState({
        isPlaying: false
      });
    } else {
      // start a timer with current bpm
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState(
        {
          count: 0,
          isPlaying: true
          // play a click immediately (after setState finishes)
        },
        this.playClick
      );
    }
  };

  render() {
    const { isPlaying, bpm } = this.state;

    return (
        <>
          <Link to="/etapa1"> 
                <button>Volver</button>
            </Link>
          <div className="metronome">
            <div className="bpm-slider">
              <h2 className="title-slider">Corazon a Pulso</h2>
              <p>{bpm} BPM</p>
              <input
                type="range"
                min={40}
                max={180}
                step={20}
                value={bpm}
                onChange={this.handleInputChange}
              />
            </div>
            <Button variant="contained" onClick={this.startStop}>{isPlaying ?   <StopIcon></StopIcon> && <div className="img-heartbeat"><img src={image}></img></div> : <PlayArrowIcon></PlayArrowIcon>}</Button>
          </div>
          {/* <div className="img-heartbeat">
            <img src={image} alt="heart.png" className={isPlaying ? undefined : "stop"}></img>
          </div> */}
        </>
    );
  }
}

export default Metronome;
