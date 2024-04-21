import React, { useState } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import Navbar from "./navbar";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import editor styles



const Posts = () => {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);

    
};
    return (
        <React.Fragment>
        <div>
          
            <Navbar/>
            <input type="text" className='post-title' />
            <br/>
            <div className="editor">
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    toolbar={{
                    options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                }}
               />
           </div>

           <button type="submit" className="btn btn-primary">Add</button>
            
            
            
  
        </div>
        
  
      </React.Fragment>
    );
};

export default Posts;