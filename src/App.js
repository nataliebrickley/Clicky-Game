import React from "react";
import Squares from "./components/Squares/index"
import Score from "./components/Score/index"
import Modal from "./components/Modal/index"
import characters from "./characters.json"
class App extends React.Component {
    state = {
        characters,
        score: 0,
        topscore: 0,
        navtext: "Click on an image to earn points, but don't click on an image more than once!",
        navclass: "gold",
        correct: 0,
        showModal: false
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
                //if the image has not been clicked...change clicked to true, update score
                if (!character.clicked) {
                    character.clicked = true
                    this.setState({ 
                        score: this.state.score + 1, 
                        navtext: "Correct!", 
                        correct: this.state.correct + 1})
                    this.handleColor()
                }
                else {
                    //show modal
                    this.setState({ showModal: true })
                    //manage topscore
                    if (this.state.score > this.state.topscore) {
                        this.setState({ topscore: this.state.score })
                    }
                    //reset score & change navtext
                    this.setState({ score: 0, navtext: "Incorrect! You lose!", navclass: "red" })
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
    handleColor = () => {
        switch(this.state.correct % 3) {
            case 0: this.setState({navclass: "green"})
            break;
            case 1: this.setState({navclass: "blue"})
            break;
            default: this.setState({navclass: "yellow"})
        }
    }
    onClose = () => {
        this.setState({ 
            showModal: false, 
            navtext: "Click on an image to earn points, but don't click on an image more than once!", 
            navclass: "gold" })
    }
    render() {
        return (
            <div>
                <Score
                    score={this.state.score}
                    topscore={this.state.topscore}
                    navtext={this.state.navtext}
                    navclass={this.state.navclass}
                />
                <div className="container-fluid grid">
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
                <Modal
                    showModal={this.state.showModal}
                    onClose={this.onClose}>
                    <div>
                        <h1>Sorry! You Lost!</h1>
                        <img src="https://i.dailymail.co.uk/i/pix/2014/04/11/article-2602528-1D06B2F200000578-824_634x475.jpg" alt="sad cat"/>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default App;