import React from "react"
import "./style.css"
function Score(props) {
    return (
        <div>
            <nav className="navbar fixed-top">
                <div className="navbar-brand mb-0 h1 title">Clicky Kitties</div>
                <div className="text">Click on an image to earn points, but don't click on an image more than once!</div>
                <div className="score">Score: {props.score} | Top Score: {props.topscore}</div>
            </nav>
        </div>
    );
}

export default Score;