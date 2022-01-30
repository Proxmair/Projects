import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timer: {
        minutes: 25,
        seconds: 0,
      },
      currentpostion: ["play", "pause"],
      currentpostionNo: 0,
      period: ["Break", "Session"],
      sessionperiod: 1,
    };
    this.timeleft = 0;
    this.handletime = this.handletime.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.countDown = this.countDown.bind(this);
    this.changeToReset = this.changeToReset.bind(this);
  }
  handletime(event) {
    if (this.state.currentpostionNo === 0) {
      let addBreak = 0;
      let addSession = 0;
      switch (event.target.id) {
        case "break-decrement":
          if (this.state.breakLength !== 1) {
            addBreak--;
          }
          break;
        case "break-increment":
          addBreak++;
          break;
        case "session-decrement":
          if (this.state.sessionLength !== 1) {
            addSession--;
          }
          break;
        case "session-increment":
          addSession++;
          break;
        default:
          break;
      }
      if(this.state.sessionperiod===1)
      {
        this.setState((state) => {
          return (
            (state.breakLength += addBreak),
            (state.sessionLength += addSession),
            (state.timer.minutes = state.sessionLength),
            (state.timer.seconds = 0)
          );
        });
      }
      else{
        this.setState((state) => {
          return (
            (state.breakLength += addBreak),
            (state.sessionLength += addSession),
            (state.timer.minutes = state.breakLength),
            (state.timer.seconds = 0)
          );
        });
      }
     
    }
  }
  handlePlayPause() {
    this.setState({
      currentpostionNo: (this.state.currentpostionNo + 1) % 2,
    });
    if (this.state.currentpostionNo === 0) {
      this.timeleft = setInterval(this.countDown, 10);
    } else {
      clearInterval(this.timeleft);
    }
  }
  countDown() {
    this.setState((seconds) => {
      return seconds.timer.seconds--;
    });
    if (this.state.timer.seconds === -1) {
      this.setState((state) => {
        return (state.timer.seconds += 60), state.timer.minutes--;
      });
    }
    if (this.state.timer.minutes === 0 && this.state.timer.seconds === 0) {
      const sound = document.getElementById("beep");
      sound.play();
      if (this.state.sessionperiod === 1) {
        this.setState((state) => {
          return (
            (state.timer.seconds = 0),
            (state.timer.minutes = this.state.breakLength),
            state.sessionperiod--
          );
        });
      } else {
        this.setState((state) => {
          return (
            (state.timer.seconds = 0),
            (state.timer.minutes = this.state.sessionLength),
            state.sessionperiod++
          );
        });
      }
    }
  }
  changeToReset() {
    this.setState((state) => {
      return (
        (state.breakLength = 5),
        (state.sessionLength = 25),
        (state.currentpostionNo=0),
        (state.sessionperiod=1),
        (state.timer.minutes = 25),
        (state.timer.seconds = 0)
      );
    });
    clearInterval(this.timeleft);
  }
  render() {
    return (
      <div id="container">
        <div id="App">
          <h1>Break Session Timer</h1>
          <div id="break">
            <h2 id="break-label">Break Length</h2>
            <button id="break-decrement" onClick={this.handletime}>
              ↓
            </button>
            <div id="break-length">{this.state.breakLength}</div>
            <button id="break-increment" onClick={this.handletime}>
              ↑
            </button>
          </div>
          <div id="session">
            <h2 id="session-label">Session Length</h2>
            <button id="session-decrement" onClick={this.handletime}>
              ↓
            </button>
            <div id="session-length">{this.state.sessionLength}</div>
            <button id="session-increment" onClick={this.handletime}>
              ↑
            </button>
          </div>
          <div id="time-display">
            <div id="timer-label">
              {this.state.period[this.state.sessionperiod]}
            </div>
            <div id="time-left">
              {this.state.timer.minutes}:{this.state.timer.seconds}
            </div>
            <div id="clockbuttons">
              <button id="reset" onClick={this.changeToReset}>
                reset
              </button>
              <button id="start_stop" onClick={this.handlePlayPause}>
                {this.state.currentpostion[this.state.currentpostionNo]}
              </button>
              <audio
                id="beep"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
              />
            </div>
          </div>
        </div>
        <div id="author">Umair</div>
      </div>
    );
  }
}
export default App;
