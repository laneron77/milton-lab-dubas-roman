import React from "react";
import "./side-bar.css";

function Side() {
return (
    <div className="sidebar-wrapper">
        <div className="header">
            <a href="#top" className="name">Milton</a>
            <hr></hr>
            <p className="description">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
            <hr></hr>
            <nav class="navigation">
                <a href="#top" className="link">Home</a>
                <a href="#top" className="link">About</a>
                <a href="#top" className="link">Contact</a>
            </nav>
            <hr></hr>
            <a href="#">
                <div className="icons">
            <img className="icons1" src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491addf265a8e_social-03.svg" width="25" alt=""></img>
            <img className="icons1" src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4914f3a265ae5_social-09.svg" width="25" alt=""></img>
            <img className="icons1" src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4912fad265ab9_social-30.svg" width="25" alt=""></img>
            <img className="icons1" src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491586a265ad4_social-18.svg" width="25" alt=""></img>
            <img className="icons1" src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491834e265b00_social-07.svg" width="25" alt=""></img>
                </div>
            </a>
        </div>
    </div>
);
}

export default Side;