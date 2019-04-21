import React from "react"
import "./style.css"

function Squares(props) {
    
    return(
        
            <div className="col-md-2">
                <img alt={props.name} src={props.image}  onClick={()=>props.shuffle()}/>
            </div>
    
    );
}

export default Squares;