import React from 'react';
import './BonusPoints.css'

const BonusPoints = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onMultiplyPoints(input.value);
    input.value ='';
  }
  let input;
  return(
    <form className="BonusPoints" onSubmit={onSubmit}>
      <h3>Write a multiplier number</h3>
      <input type="text" className="BonusPoints__input" ref={(node) => input = node}/>
      <input type="submit" className="BonusPoints__submit" value="Multiply points" />
    </form>
  )
};

export default BonusPoints;
