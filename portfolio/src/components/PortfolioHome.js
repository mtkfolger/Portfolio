import React, { useState } from 'react';
import PortfolioAbout from './PortfolioAbout';

function PortfolioHome(props) {

    return (
        <div>
            <header className="App-header">
                Michael Folger | Portfolio
                </header>
                <nav>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./PortfolioAbout.js">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            <body className="App-Body">

                    <h1 className="h2">Welcome to my web development portfolio! Take a look at some examples of my work in Web Development.</h1>
                    
            
                <div>

                </div>

            </body>

            <footer className="App-footer">
                This Application is © Michael Folger 2021
            </footer>
        </div>
    );
}

export default PortfolioHome;
