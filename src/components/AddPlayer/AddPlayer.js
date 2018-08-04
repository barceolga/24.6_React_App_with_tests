import React from 'react';
import './AddPlayer.css'

const AddPlayer = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onPlayerAdd(input.value);
    input.value ='';
  }
  let input;
  return(
    <form className="AddPlayer" onSubmit={onSubmit}>
      <h3>Write player name </h3>
      <input type="text" className="AddPlayer__input" ref={(node) => input = node}/>
      <input type="submit" className="AddPlayer__submit" value="Add player" />
    </form>
  )
};

export default AddPlayer;
