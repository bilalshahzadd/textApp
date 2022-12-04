import React from 'react'
import DarkLight from './DarkLight';


export default function Nav() {

    return (
        <>
            <header className="header">
                <h1 className="title">TextApp</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </nav>
                <DarkLight className="toggle" />
            </header>

            <header className="mobileHeader">
                <h1 className="mobileTitle">TextApp</h1>
                <button className="fa-solid fa-bars"></button>
            </header>

        </>
    )
}
