import React from "react"
import "./style.css"

function Squares(props) {
    
    return(
        
            <div className="col-md-2">
                <img alt={props.name} src={props.image} data-clicked={props.clicked} onClick={()=> {
                    props.shuffle()
                    props.handleScore();
                    }}/>
            </div>
    
    );
}

export default Squares;