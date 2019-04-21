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
shuffle = () => {
    var shuffledarray = this.state.characters
    var currentIndex = shuffledarray.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = shuffledarray[currentIndex];
		shuffledarray[currentIndex] = shuffledarray[randomIndex];
		shuffledarray[randomIndex] = temporaryValue;
	}
    console.log(this.state.characters)
    this.setState({characters: shuffledarray})
    return shuffledarray;
    
}
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
                        {this.state.characters.filter(character => this.state.characters.indexOf(character) <= 3).map(character => (
                            <Squares
                                name={character.name}
                                image={character.image}
                                shuffle={this.shuffle}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        {this.state.characters.filter(character => 3 < this.state.characters.indexOf(character) && this.state.characters.indexOf(character) <= 7).map(character => (
                            <Squares
                                name={character.name}
                                image={character.image}
                                shuffle={this.shuffle}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        {this.state.characters.filter(character => 7 < this.state.characters.indexOf(character)).map(character => (
                            <Squares
                                name={character.name}
                                image={character.image}
                                shuffle={this.shuffle}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default App;