import React from "react"
import "./style.css"
function Score(props) {
    return (
        <div>
            <nav className="navbar fixed-top">
                <div className="navbar-brand mb-0 h1 title">Clickity Cat</div>
                <div className={props.navclass}>{props.navtext}</div>
                <div className="score">Score: {props.score} | Top Score: {props.topscore}</div>
            </nav>
        </div>
    );
}

export default Score;