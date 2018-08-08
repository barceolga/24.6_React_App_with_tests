// eslint-disable-next-line
import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <div className="Player__trophy"><FontAwesomeIcon icon="trophy" className={`Icon ${props.id === 0?'visible':'invisible'}`} /><span>{props.id +1}.</span></div>
    <div className="Player__name">{props.name}</div>
    <div className={`Player__score ${props.score>=0?'positive':'negative'}`}>{props.score}</div>
    <div className="Player__button" onClick={() => props.onPlayerScoreChange(1)}><FontAwesomeIcon icon="plus" className="Icon" /></div>
    <div className="Player__button" onClick={() => props.onPlayerScoreChange(-1)}><FontAwesomeIcon icon="minus" className="Icon" /></div>
    <div className="Player__button-remove" onClick={() => props.onPlayerRemove()}><FontAwesomeIcon icon="trash-alt" className="Icon" /></div>
  </li>
);

export default Player;
