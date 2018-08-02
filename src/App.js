import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor(){
    super();
    this.state ={
      players: [
        /*{
            name: 'Naomi Nagata',
            score: 5
        },
        {
            name: 'James Holden',
            score: 0
        }*/
      ]
    }
  }
  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    });
  }
  render() {
    return (
      <div className="App">
          <h1 className="App_title">Scorekeeper</h1>
          <AddPlayer onPlayerAdd={this.onPlayerAdd} />
          <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} />
      </div>
    );
  }
}

export default App;