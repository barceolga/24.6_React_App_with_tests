import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Edit.css';

export default class Edit extends Component {
  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  finishEdit = (e) => {
    const value = e.target.value;
    if (this.props.onUpdate) {
      this.props.onUpdate(value.trim());
    }
  }

  renderOnPlayerRemove = () => {
    return <div className="Player__button-remove" onClick={this.props.onPlayerRemove}><FontAwesomeIcon icon="trash-alt" className="Icon" /></div>;
  };

  renderOnPlayerScoreChange = () => {
    return   (
      <div>
      <div className="Player__button" onClick={this.props.onPlayerScoreChange(1)}><FontAwesomeIcon icon="plus" className="Icon" /></div>
      <div className="Player__button" onClick={this.props.onPlayerScoreChange(-1)}><FontAwesomeIcon icon="minus" className="Icon" /></div>
      </div>
    );
  }
  renderValue = () => {
    const { value, onPlayerRemove, onPlayerScoreChange, onValueClick } = this.props;

    return (
      <div>
          <div className="Player__trophy"><FontAwesomeIcon icon="trophy" className={`Icon ${this.props.id === 0?'visible':'invisible'}`} /><span>{this.props.id +1}.</span></div>
          <div className="Player__name" onClick={onValueClick}>{value}</div>
          <div className={`Player__score ${this.props.score>=0?'positive':'negative'}`}>{this.props.score}</div>
          {onPlayerRemove ? this.renderOnPlayerRemove() : null}
          {onPlayerScoreChange ? this.renderOnPlayerScoreChange() : null}
      </div>
    );
  }

  renderEdit = () => {
    return (
      <input
        className="Edit"
        type="text"
        autoFocus
        defaultValue={this.props.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  }

  render() {
      return (
        <div className={this.props.className}>
            {this.props.editing ? this.renderEdit() : this.renderValue()}
        </div>
      );
  }
}

Edit.propTypes = {
  value: PropTypes.string,
  onUpdate: PropTypes.func,
  onValueClick: PropTypes.func,
  onPlayerRemove: PropTypes.func,
  onPlayerScoreChange: PropTypes.func,
  editing: PropTypes.bool,
  className: PropTypes.string,
};
