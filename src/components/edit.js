import React, { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import {store} from "../BLL/store";
import { addCreate} from "../BLL/creatpost";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                console.log(response)
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                console.log(error)
                reject(error);
            });
        }
    );
}

function EditTool() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [convertedContent, setConvertedContent] = useState(null);
    const [Name, setName] = useState(null);
    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
    }, [editorState]);

    function createMarkup(html) {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }
    const setTextName = (text) => {
        setName(text)
    }
    const sendContent = () =>{
        store.dispatch(addCreate({name: Name, text: convertedContent}))
    }
    return (
        <div className="App">
            <input  type='text' onChange={(e) => setTextName(e.target.value)} value={Name} className='input-auth' placeholder='Name...'/>

            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{

                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } }
                }}

            />
            <div
                className="preview"
                dangerouslySetInnerHTML={createMarkup(convertedContent)}>
            </div>
            <button className='button-input' onClick={sendContent}>Create</button>
        </div>
    )
}

export default EditTool;