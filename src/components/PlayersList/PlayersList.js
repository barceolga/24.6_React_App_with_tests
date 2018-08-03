import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const PlayersList = (props) => (

  <ul className="PlayersList">
  <button className="PlayersList__classification" onClick={() => props.sortResults()}>Classify</button>
  <h1 className="Player__table">Scoreboard</h1>
  <li className="Player__table-title">
      <span className="Heading">Player name</span>
      <span className="Heading">Player score</span>
      <span className="Heading">Add points</span>
      <span className="Heading">Remove points</span>
      <span className="Heading">Remove player</span>
  </li>
    {props.players.map((player, i) => (
      <Player
          key={i}
          name={player.name}
          score={player.score}
          onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
          onPlayerRemove={() => props.onPlayerRemove(i)}
     />)
    )}
    </ul>
);

export default PlayersList;
