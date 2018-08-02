import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
})

it('renders correct score', () => {
  const playerScorePassed = 1;
  const playerComponent = shallow(<Player score={playerScorePassed} />);

  const playerScore = playerComponent.find('.Player__score').text();
  const playerScoreRendered = Number(playerScore);

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange plus/minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').at(0);
  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalled();
});

it('schould call onPlayerScoreChange with 1 when minus plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const minusButton = playerComponent.find('.Player__button').at(1);
  minusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalled();
});
