import React from 'react'

export default function DarkLight() {

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
    }

    return (
        <>
            <div class="daynight">
                <label for="checkbox">
                    <input type="checkbox" name="" id="checkbox" onClick={toggleDarkMode}/>
                        <div class="toggle">
                            <div class="cloud"></div>
                            <div class="star"></div>
                            <div class="sea"></div>
                            <div class="mountains"></div>
                        </div>
                </label>
            </div>
        </>
    )
}
