import React, { useState } from 'react';
import PortfolioHome from './PortfolioHome';

function PortfolioAbout () {
    return (
        <div>
            <header className="App-header">
                Michael Folger | Portfolio
                </header>
                <nav>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./PortfolioHome">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            <body className="App-Body">

                    <h1 className="h2">TEST</h1>
                    
            
                <div>

                </div>

            </body>

            <footer className="App-footer">
                This Application is © Michael Folger 2021
            </footer>
        </div>
    );
}

export default PortfolioContact;