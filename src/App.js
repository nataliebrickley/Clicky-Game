import React from "react";
import Squares from "./components/Squares/index"
import Score from "./components/Score/index"
import characters from "./characters.json"
class App extends React.Component {
    state = {
        characters,
        score: 0,
        topscore: 0,
        status: "playing"
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
        //console.log(this.state.characters)
        this.setState({ characters: shuffledarray })
        return shuffledarray;
    }
    handleScore = (id) => {
        this.state.characters.map(character => {
            if (character.id === id) {
                if (!character.clicked) {
                    character.clicked = true
                    this.setState({ score: this.state.score + 1 })
                }
                else {
                    //manage topscore
                    if(this.state.score>this.state.topscore){
                        this.setState({topscore: this.state.score})
                    }
                    //reset score
                    this.setState({score: 0})
                    //reset all clicked values to false:
                    this.resetClicked();
                }
            }
        
            return character.clicked
        })

    }
    resetClicked = () => {
        this.state.characters.map(character => {
            character.clicked = false
            return character
        }
        )
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
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                clicked={character.clicked}
                                shuffle={this.shuffle}
                                handleScore={this.handleScore}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        {this.state.characters.filter(character => 3 < this.state.characters.indexOf(character) && this.state.characters.indexOf(character) <= 7).map(character => (
                            <Squares
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                clicked={character.clicked}
                                shuffle={this.shuffle}
                                handleScore={this.handleScore}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        {this.state.characters.filter(character => 7 < this.state.characters.indexOf(character)).map(character => (
                            <Squares
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                clicked={character.clicked}
                                shuffle={this.shuffle}
                                handleScore={this.handleScore}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default App;