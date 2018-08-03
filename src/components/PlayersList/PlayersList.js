import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const PlayersList = (props) => (

  <ul className="PlayersList">
  <button className="PlayersList__classification" onClick={() => props.sortResults()}>Classify</button>
  <h1 className="Player__table">Scoreboard</h1>
  <li className="Player__table-title">
      <div className="Heading"> Ranking </div>
      <div className="Heading">Player name</div>
      <div className="Heading">Player score</div>
      <div className="Heading">Add points</div>
      <div className="Heading">Remove points</div>
      <div className="Heading">Remove player</div>
  </li>
    {props.players.map((player, i) => (
      <Player
          key={i}
          id={i}
          name={player.name}
          score={player.score}
          onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
          onPlayerRemove={() => props.onPlayerRemove(i)}
     />)
    )}
    </ul>
);

export default PlayersList;
