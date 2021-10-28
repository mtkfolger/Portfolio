import { useState } from 'react';
import PortfolioAbout from './PortfolioAbout';


function PortfolioHome(props) {

    return (
        <div>
            <header className="App-header">
                Michael Folger | Portfolio
                <nav tagline="Michael Folger Portfolio">
                    <a href="www.google.com">Home</a>
                    <a href="www.google.com">About</a>
                    <a href="www.google.com">Contact</a>
                    </nav>
                </header>
                
            <body className="App-Body">

                    <h1 className="h2">Welcome to my web development portfolio! Take a look at some examples of my work in Web Development.</h1>
                   <div id = "card-grid" className="grid">
                     <h1>Card 1</h1>
                        <img src="./images/image1.jpg" alt="car"></img>
                        <p>test test test test test test test test test test test test test test test test test test test test</p>
                    </div>

                    <div id = "card-grid" className="grid">
                     <h1>Card 2</h1>
                     
                        <p>Project 2</p>
                        <p>test test test test test test test test test test test test test test test test test test test test</p>
                    </div>

                    <div id = "card-grid" className="grid">
                     <h1>Card 3</h1>
                     
                        <p>Project 3</p>
                        <p>test test test test test test test test test test test test test test test test test test test test</p>
                    </div>

                    <div id = "card-grid" className="grid">
                     <h1>Card 4</h1>
                     
                        <p>Project 4</p>
                        <p>test test test test test test test test test test test test test test test test test test test test</p>
                    </div>
                
                </body>

            <footer className="App-footer">
                This Application is © Michael Folger 2021
            </footer>
        </div>
    );
}

export default PortfolioHome;
