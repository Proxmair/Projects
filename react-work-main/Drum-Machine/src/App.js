import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      soundCollection:{
        href:["https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"],
        id:["Q","W","E","A","S","D","Z","X","C"],
      },
      switchStyle:[
        {backgroundColor:"green"},
        {backgroundColor:"red"},
      ],
      mainSwitch:0,
    }
    this.playsound=this.playsound.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.styleChange=this.styleChange.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(event) {
    if (this.state.mainSwitch==0) {
      const keyPressedIs=event.key.toUpperCase();
    if(keyPressedIs==="Q"  || keyPressedIs==="W" || keyPressedIs==="E" || keyPressedIs==="A" || keyPressedIs==="S" || keyPressedIs==="D" || keyPressedIs==="Z" || keyPressedIs==="X" || keyPressedIs==="C" )
    {
      const divId=document.getElementById(keyPressedIs.toLowerCase());
      divId.style.boxShadow="none";
      const sound = document.getElementById(keyPressedIs);
      sound.currentTime = 0;
      sound.play();
      setTimeout(() => {
        divId.style.boxShadow = "1px 1px 15px rgb(237, 3, 245), -1px -1px 15px rgb(237, 3, 245)";
      }, 100)
    } 
    }
  }
  playsound(event){
    if (this.state.mainSwitch==0) {
   const divId=document.getElementById(event.target.children[0].id.toLowerCase());
   divId.style.boxShadow="none";
   const sound = document.getElementById(event.target.children[0].id);
   sound.currentTime = 0;
   sound.play();
   setTimeout(() => {
    divId.style.boxShadow = "1px 1px 15px rgb(237, 3, 245), -1px -1px 15px rgb(237, 3, 245)";
  }, 100)
}
  }
  styleChange(){
    const a=document.getElementById("on-off-switch");
    if(this.state.mainSwitch==0)
    {
      a.style.justifyContent="flex-start";
    }
    else{
      a.style.justifyContent="flex-end";
    }
    this.setState({
      mainSwitch:(this.state.mainSwitch+1)%2
    })
  }
  render(){
    return(
      <div id="drum-machine">
        <div id="display">
          <div className="drum-pad" onClick={this.playsound} id="q"><audio id={this.state.soundCollection.id[0]} src={this.state.soundCollection.href[0]}/>Q</div>
          <div className="drum-pad" onClick={this.playsound} id="w"><audio id={this.state.soundCollection.id[1]} src={this.state.soundCollection.href[1]}/>W</div>
          <div className="drum-pad" onClick={this.playsound} id="e"><audio id={this.state.soundCollection.id[2]} src={this.state.soundCollection.href[2]}/>E</div>
          <div className="drum-pad" onClick={this.playsound} id="a"><audio id={this.state.soundCollection.id[3]} src={this.state.soundCollection.href[3]}/>A</div>
          <div className="drum-pad" onClick={this.playsound} id="s"><audio id={this.state.soundCollection.id[4]} src={this.state.soundCollection.href[4]}/>S</div>
          <div className="drum-pad" onClick={this.playsound} id="d"><audio id={this.state.soundCollection.id[5]} src={this.state.soundCollection.href[5]}/>D</div>
          <div className="drum-pad" onClick={this.playsound} id="z"><audio id={this.state.soundCollection.id[6]} src={this.state.soundCollection.href[6]}/>Z</div>
          <div className="drum-pad" onClick={this.playsound} id="x"><audio id={this.state.soundCollection.id[7]} src={this.state.soundCollection.href[7]}/>X</div>
          <div className="drum-pad" onClick={this.playsound} id="c"><audio id={this.state.soundCollection.id[8]} src={this.state.soundCollection.href[8]}/>C</div>
        </div>
        <div id="on-off-switch" onClick={this.styleChange}><div style={this.state.switchStyle[this.state.mainSwitch]}></div></div>
      </div>
    )
  }
}
export default App;