import React  from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import style from './markdown-styles.module.css'
class Preview extends React.Component{
    render()
    {
        return(
            <div id="preview-container" className="containers-item">
               <div className="header">
                    <h1>Preview</h1>    
               </div>
               <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                className={style.reactMarkDown}
                >
                 {this.props.input}
                </ReactMarkdown>
            </div>
        )
    }
}
export default Preview;
