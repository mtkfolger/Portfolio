import React, { useState } from 'react';
import Navbar from 
import PortfolioAbout from './PortfolioAbout';

function PortfolioHome(props) {

    return (
        <div>
            <header className="App-header">
                Michael Folger | Portfolio
                </header>
                <Navbar tagline="Michael Folger Portfolio"/>
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
