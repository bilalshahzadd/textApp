import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClear = () => {
        setText('');
    }

    return (
        <>
            <div className='section'>
                <div className='container'>
                    <h1>Enter Text Below</h1>
                    <div>
                        <div>
                            <textarea value={text} onChange={handleOnChange} rows={8}></textarea>
                        </div>
                        <button className="btn btn-primary my-2" onClick={handleUpperCase}>Convert to Uppercase</button>
                        <button className="btn btn-primary my-2 mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                        <button className="btn btn-primary my-2" onClick={handleClear}>Clear Text</button>
                    </div>
                </div>
                <div className="container">
                    <h1 className="heading">Your Text Contain:</h1>
                    <p className="details">{text.length} Characters and {text.split(' ').length} Words</p>
                    <p className="details">{0.008 * text.split(' ').length} Minutes to Read</p>
                    <h1 className="heading">Preview</h1>
                <p>{text}</p>
                </div>
            </div>
        </>
    )
}
