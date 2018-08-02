import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const PlayersList = (props) => (

  <ul className="PlayersList">
  <h1 className="Player_table">Player table</h1>
    {props.players.map((player, i) => (
      <Player
          key={i}
          name={player.name}
          score={player.score}
          onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
          onPlayerRemove={(i) => props.onPlayerRemove(i)}
      />)
    )}
    </ul>
);

export default PlayersList;
