import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");

    const [copyText, setCopyText] = useState({
        visibility: "hidden"
    });

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        setCopyText({
            visibility: "hidden"
        })
    }

    const handleClear = () => {
        setText('');
    }

    const copyContent = () => {
        navigator.clipboard.writeText(text);
        setCopyText({
            visibility: 'visible'
        })
    }

    return (
        <>
            <div className="all">
                <div className='section'>
                    <div className='container'>
                        <h1>Enter Text Below</h1>
                        <div>
                            <div>
                                <textarea className="textarea" value={text} onChange={handleOnChange} rows={8}></textarea>
                            </div>
                            <div className="buttons">
                                <div className="btnContainer">
                                    <button className="btn" onClick={handleUpperCase}>Convert to Uppercase</button>
                                    <button className="btn" onClick={handleLowerCase}>Convert to Lowercase</button>
                                </div>
                                <div className="btnContainer">
                                    <button className="btn" onClick={handleClear}>Clear Text</button>
                                    <button className="btn" onClick={copyContent}>Copy Text</button>
                                </div>
                                <p style={copyText}>Text Copied!</p>
                            </div>
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
            </div>
        </>
    )
}
