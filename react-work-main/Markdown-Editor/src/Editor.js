import React  from 'react';
class Editor extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            icon:[ <i class="fa fa-expand" aria-hidden="true"></i>,
            <i class="fa fa-compress" aria-hidden="true"></i>],
            editorContainer:[
                {
                    width:"45vw",
                    minHeight: "160px",
                    marginLeft: "27.5vw",
                    transition: `width 1000ms, margin-left 1000ms , min-height 1000ms`,
                },
                {
                    width:"60vw",
                    minHeight: "200px",
                    marginLeft: "20vw",
                    transition: `width 1000ms, margin-left 1000ms , min-height 1000ms`,
                }
            ],
            currentStyle:0,
        }
        this.handleIcon=this.handleIcon.bind(this);
    }
    handleIcon()
    {
        this.setState({
            currentStyle:(this.state.currentStyle+1)%2
        })
    }
    render()
    {
        return(
            <div style={this.state.editorContainer[this.state.currentStyle]} className="containers-item">
                <div className="header">
                    <h1>Editor</h1>
                    <button onClick={this.handleIcon}>{this.state.icon[this.state.currentStyle]}</button>
                </div>
                <div className="display">
                    <textarea
                        id="editor"
                        value={this.props.input}
                        onChange={this.props.handleChange}>
                    </textarea>
                </div>     
            </div>
        )
    }
}

export default Editor;
/**/