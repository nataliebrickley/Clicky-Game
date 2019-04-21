import React from "react";
import Squares from "./components/Squares/index"
import Score from "./components/Score/index"
import characters from "./characters.json"
class App extends React.Component {
    state = {
        characters,
        score: 0,
        topscore: 0
    };

    render() {
        return (
            <div>
                <Score 
                    score={this.state.score}
                    topscore={this.state.topscore}
                />
                <h1 className="text-center title">Clicky Kitties</h1>
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
                        {this.state.characters.filter(character => 8 < character.id).map(character => (
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