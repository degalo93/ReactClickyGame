import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import Nav from "./components/Nav"

function charShuff(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters, 
    score: 0,
    topScore: 0,
    Tarot: []

  };
  onCardClicked = id => {
    if (this.state.Tarot.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ Tarot: this.state.Tarot.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,

    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
  
    }
    else if (newScore === this.state.topScore) {
    
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      Tarot: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shufflechar = charShuff(characters);
    this.setState({ characters: shufflechar });
  };


  // Map over this.state.friends and render a Card component for each character object
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} topScore={this.state.topScore}/>
        <Title>Harry Potter Tarot Cards
          <h3>Click on the cards to earn points choose wisely dont click one more than once </h3>
        </Title>
        {this.state.characters.map(character => (
          <Cards
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            onCardClicked={this.onCardClicked}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
           
          />
        ))}
      </Wrapper>
    )
  }

}
export default App;
