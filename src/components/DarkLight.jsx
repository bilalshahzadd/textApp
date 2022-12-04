import React from 'react'
import { useState } from 'react';

export default function DarkLight(props) {

    const [btnText, setBtnText] = useState("Toggle Light Mode")

    const toggleDarkMode = () => {
        document.body.classList.toggle("light-mode");
        if (btnText == "Toggle Light Mode") {
            setBtnText("Toggle Dark Mode");
        } else {
            setBtnText("Toggle Light Mode");
        }
    }

    return (
        <>
            <button className={props.className} onClick={toggleDarkMode}>{btnText}</button>
        </>
    )
}
