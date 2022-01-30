import React  from 'react';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color:[
        "rgb(34, 35, 77)",
        "rgb(74, 9, 77)",
        "rgb(131, 35, 87)",
        "rgb(21, 63, 80)",
        "rgb(0, 94, 70)",
        "rgb(25, 136, 10)",
        "rgb(150, 83, 7)",
        "rgb(156, 50, 1)",
        "rgb(122, 58, 58)",
        "rgb(3, 98, 122)",
      ],
      quote:[ 
        {text:"Qalm talwaar say taiz hai",author:"Maloom"},
        {text:"Ittehaad mai barkat hai",author:"Azaad"},
        {text:"Kitaab behtreen sathi hai",author:"Anjaan"},
        {text:"Zehr dukaanon pai naqli aur zubaanon pr asli milta hai",author:"Muraad"},
        {text:"Waqt har dard ka marham hai", author:"Iqbaal"},
        {text:"Zindagi say thori wafa kejiya jo nahi milta usay dafa kijiya", author:"Insaaf"},
        {text:"Maloom sab ko hai zindagi behaal hai log phr bhi pouchtay hain kia haal hai", author:"Ishraaq"},
        {text:"Zindagi nai diya itnay dhokay chalo chai piyo its ok", author:"Ishtiyaq"},
        {text:"gham na kr har cheez waqti hai", author:"Imkaan"},
        {text:"Zindagi tu sasti hai sahib guzarnai kai tareeqay mahengay hain", author:"Insaan"},
      ],
      hrefOffacebook:"#",
      hrefOfGithub:"#",
      currenttext:"",
      currentauthor:"",
      currentcolor:"",
      loading: true
    }
    this.handleClick=this.handleClick.bind(this);
  };

  handleClick(){
    let Randomnumber=Math.floor(Math.random()*this.state.quote.length)
    if(this.state.currenttext===this.state.quote[Randomnumber].text){
      Randomnumber=(Randomnumber+1)%this.state.quote.length;}
    this.setState({
      currentauthor:this.state.quote[Randomnumber].author,
      currenttext:this.state.quote[Randomnumber].text,
      currentcolor:this.state.color[Randomnumber],
    })
  }
  componentDidMount() {
    demoAsyncCall().then(
      () => this.setState({ loading: false }),this.handleClick()
      );
  }
  render(){
    const { loading } = this.state;
      
      if(loading) { 
        return <h1>Loading...{this.handleClick}</h1>; 
      }
    let styleBcolor={
      backgroundColor: this.state.currentcolor,
      transition: `background-color 2000ms, opacity 2000ms ease`,
    }
    let stylecolor={
      color: this.state.currentcolor,
      transition: `color 1000ms, opacity 1000ms ease`,
    }  
    return(
      <div id="wrapper" style={styleBcolor}>
        <div id="quote-box" >
          <div id="quote-text" ><h1 style={stylecolor}><i className="fa fa-quote-left" > </i>{this.state.currenttext}<i className="fa fa-quote-right"> </i></h1></div>
          <div id="quote-author"><p style={stylecolor}>{this.state.currentauthor}</p></div>
          <div id="buttons" >
            <div>
              <button className="button" style={styleBcolor} id="facebook-button"><a  href={this.state.hrefOffacebook}><i class="fa fa-facebook-f"></i></a></button>
              <button className="button" style={styleBcolor} id="guthub-button"><a  href={this.state.hrefOfGithub}><i class="fa fa-github"></i></a></button>
            </div>
            <button className="button" id="newquote-button" style={styleBcolor} onClick={this.handleClick}>NewQuote</button>
          </div>
        </div>
        <div id="footer">by Umair</div>
        
      </div>
    )

  }
}
function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }
export default App;