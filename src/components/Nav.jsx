import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkLight from './DarkLight';


export default function Nav() {

    const [style, setStyle] = useState({
        display: 'none'
    })

    const [linkStyle, setLinkStyle] = useState({
        color: "#7bf763",
        textDecoration: "none"
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
                    <Link to="/" className="link"><h1 className="title">Word Counter</h1></Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className="link">Home</Link>
                            </li>
                            <li>
                                <Link to="/About" className="link">About</Link>
                            </li>
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
