import React from 'react'
import { useState } from 'react';
import DarkLight from './DarkLight';


export default function Nav() {

    const [style, setStyle] = useState({
        display: 'none'
    })

    const toggleMenu = () => {
        if (style.display === 'none') {
            setStyle({
                display: 'block'
            })
        } else {
            setStyle({
                display: 'none'
            })
        }
    }

    return (
        <>
            <header className="header">
                <div className="identity">
                    <h1 className="title">Word Counter</h1>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                        </ul>
                    </nav>
                </div>
                <DarkLight />
            </header>

            <header className="mobileHeader">
                <h1 className="mobileTitle">Word Counter</h1>
                <button className="fa-solid fa-bars" onClick={toggleMenu}></button>
            </header>

            <div id="myLinks" style={style}>
                <ul>
                    <li>Home</li>
                    <div className="divider"></div>
                    <li>About</li>
                    <div className="divider"></div>
                    <DarkLight />
                </ul>
            </div>
        </>
    )
}
