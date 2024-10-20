import React from "react";
import trollFace from "../images/troll-face.gif";
import"../styles/header.css";


export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="Troll Face"
             className="header--image"
             />
             <h2 className="header--title">Meme Generator</h2>
             <h4 className="header--project">React Course - Project 3</h4>

        </header>
    );
}