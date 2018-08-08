import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import BonusPoints from './components/BonusPoints/BonusPoints';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faTrashAlt, faTrophy } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus, faTrashAlt, faTrophy);

class App extends Component {
  constructor(){
    super();
    this.state ={
      players: [],
      editing: false
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

  onMultiplyPoints = (multiplierPoints) => {
      this.setState({
        players: this.state.players.map((player) => {
            return { ...player, score: player.score * multiplierPoints };
        })
      })
  }

  onPlayerAdd = (playerName) => {
    if (playerName==='') {
      alert('We need a name for a player');
    } else {
      const newPlayer = {
        name: playerName,
        score: 0,
      }
      this.setState({
        players: [...this.state.players, newPlayer]
      });
    }
  }

    onPlayerRemove = (playerIndex) => {
      this.setState({
        players: this.state.players.filter((__, index ) => index !== playerIndex)
      });
  };

  onPlayerEdit = (playerIndex) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, editing: true };
        }
        return player;
      })
    })
  }

  changePlayer(player, playerIndex) {
    let filteredPlayer = this.state.players.filter((__, index ) => index !== playerIndex);
    let changePlayer = {...player};
    let filterPlayer = [...filteredPlayer, changePlayer];
    this.setState({
      players: filterPlayer
    });
  }

  onPlayerUpdate = (event) => {
   event.preventDefault();
   this.props.changePlayer({
     name: this.state.name
   })
 }
    sortResults = () => {
        const playersList = [...this.state.players];
        let sortedList = playersList.sort(function(a, b) { return (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0);});
        this.setState({
            players: sortedList,
        });
  }
  render() {
    return (
      <div className="App">
          <h1 className="App_title">Scorekeeper</h1>
          <div className="App_options">
          <AddPlayer onPlayerAdd={this.onPlayerAdd} />
          <BonusPoints onMultiplyPoints={this.onMultiplyPoints} />
          </div>
          <PlayersList players={this.state.players} onPlayerEdit={this.onPlayerEdit} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} sortResults={this.sortResults} onPlayerUpdate={this.onPlayerUpdate}/>
      </div>
    );
  }
}

export default App;
