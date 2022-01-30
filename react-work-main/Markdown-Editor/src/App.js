import React  from 'react';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          inputValue: ''
        }
      this.handleChange = this.handleChange.bind(this);
      }
    handleChange(event) {
        this.setState({
          inputValue: event.target.value,
       
        });
    }
   
    render()
    {
       // let items = this.state.str.map(i => <p>{i}</p>);
        return(
            <div id="container">
                <Editor input={this.state.inputValue}
                        handleChange={this.handleChange}/>
                <Preview input={this.state.inputValue}/>
            </div>
        )
    }
}

export default App;
/*
               
                <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                className={style.reactMarkDown}>
                 {this.state.data}
                </ReactMarkdown>

                
*/