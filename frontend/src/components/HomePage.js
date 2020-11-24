import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <li>
                    <Link to="/anime/20">Yahoo</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </header>
        </div>
    )
}

export default HomePage
