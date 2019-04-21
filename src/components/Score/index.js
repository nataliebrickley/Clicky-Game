import React from "react"
import "./style.css"
function Score(props) {
    return (
        <div>
            <nav className="navbar">
                <span className="navbar-brand mb-0 h1">Clicky Kitties</span>
                <span className="text-center">Click an image to begin!</span>
                <span className="score">Score: {props.score} | Top Score: {props.topscore}</span>
            </nav>
        </div>
    );
}

export default Score;