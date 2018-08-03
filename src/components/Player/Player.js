import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__trophy"><FontAwesomeIcon icon="trophy" className="Icon" /></span>
    <span className="Player__name">{props.name}</span>
    <span className={`Player__score ${props.score>=0?'positive':'negative'}`}>{props.score}</span>
    <span className="Player__button" onClick={() => props.onPlayerScoreChange(1)}><FontAwesomeIcon icon="plus" className="Icon" /></span>
    <span className="Player__button" onClick={() => props.onPlayerScoreChange(-1)}><FontAwesomeIcon icon="minus" className="Icon" /></span>
    <span className="Player__button-remove" onClick={() => props.onPlayerRemove()}><FontAwesomeIcon icon="trash-alt" className="Icon" /></span>
  </li>
);

export default Player;
