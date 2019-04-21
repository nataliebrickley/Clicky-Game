import React from "react";
import Squares from "./components/Squares/index"
import characters from "./characters.json"
class App extends React.Component {
    state = {
        characters
    };

    render() {
        return (
            <div>
                <h1>Clicky Game</h1>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-2"></div>
                        {this.state.characters.filter(character => character.id <= 4).map(character => (
                            <Squares
                                name={character.name}
                                image={character.image}
                            />
                        ))}
                    </div>
                    <div className="row">
                    <div className="col-md-2"></div>
                        {this.state.characters.filter(character => 4 < character.id && character.id <= 8).map(character => (
                            <Squares
                                name={character.name}
                                image={character.image}
                            />
                        ))}
                    </div>
                    <div className="row">
                    <div className="col-md-2"></div>
                        {this.state.characters.filter(character => character.id <= 4).map(character => (
                            <Squares
                                name={character.name}
                                image={character.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default App;