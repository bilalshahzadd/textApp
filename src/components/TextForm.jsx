import React from 'react'
import { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState("Enter Text Here..");

    const myStyle = {
        "height": "250px"
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-4">
                <h1 className="display-6">Your Text Contain:</h1>
                <p className="lead">{text.length} Characters and {text.split(' ').length} Words</p>
                <p className="lead">{0.008 * text.split(' ').length} Minutes to Read</p>
            </div>
            <div className="container">
                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control" value={text} id="myText" onChange={handleOnChange} style={myStyle}></textarea>
                    </div>
                    <button className="btn btn-primary my-2" onClick={handleUpperCase}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
                </div>
            </div>
            <hr />
        </>
    )
}
