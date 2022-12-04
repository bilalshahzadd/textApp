import React from 'react'

export default function DarkLight(props) {

    const toggleDarkMode = () => {
        document.body.classList.toggle("light-mode");
    }

    return (
        <>
            <button className={props.className} onClick={toggleDarkMode}>Dark/Light</button>
        </>
    )
}
