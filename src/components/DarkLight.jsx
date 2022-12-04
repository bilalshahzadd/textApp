import React from 'react'
import { useState } from 'react';

export default function DarkLight(props) {

    const [btnText, setBtnText] = useState("Enable Light Theme")

    const toggleDarkMode = () => {
        document.body.classList.toggle("light");
        if (btnText === "Enable Light Theme") {
            setBtnText("Enable Dark Theme");
        } else {
            setBtnText("Enable Light Theme");
        }
    }

    return (
        <>
            <div className="switchTheme">
                <label class="switch">
                    <input type="checkbox" onClick={toggleDarkMode} />
                    <span class="slider"></span>
                </label>
                <p>{btnText}</p>
            </div>
        </>
    )
}
