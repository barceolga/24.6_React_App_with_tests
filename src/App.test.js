import React from 'react';
import { shallow, mount } from 'enzyme';
import PlayersList from '../src/components/PlayersList/PlayersList';
import AddPlayer from '../src/components/AddPlayer/AddPlayer';
import App from './App';
const testPlayers = [
  {
      name: 'Naomi Nagata',
      score: 5
  },
  {
      name: 'James Holden',
      score: 0
  },
  {
    name: 'Amos Burton',
    score: 3
  },
  {
    name: 'Clarissa Mao',
    score: 2
  }
]

it('renders without crashing', () => {
  shallow(<App />);
});
it('should update player score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
        name: 'Amos Burton',
        score: 2
    },
  ]
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');

  playersAfterUpdate[0].score

  expect(playersAfterUpdate[0].score).toEqual(7);
});

it('should add a new player to the app', () => {
    const appComponent = shallow(<App />);

    const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
    onPlayerAdd('Bobby Draper');

    const players = appComponent.state('players');

    expect(players.length).toEqual(1);
    expect(players[0].name).toEqual('Bobby Draper');
    expect(players[0].score).toEqual(0);
});

it ('should remove a player or players from the app', () => {
    const appComponent = shallow(<App />);

    const players = testPlayers;
    appComponent.setState({ players });

    const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');

    onPlayerRemove(1);

    const playersAfterUpdate = appComponent.state('players');

    expect(playersAfterUpdate.length).toEqual(testPlayers.length -1)
});

it ('should remove a player when remove button is clicked', () => {
    const appComponent = mount(<App />);

    const players = testPlayers;
    appComponent.setState({ players });

    const removeButton = appComponent.find('.Player__button-remove').at(0);
    console.log(removeButton);
    removeButton.simulate('click');

    const playersAfterUpdate = appComponent.state('players');

    expect(playersAfterUpdate.length).toEqual(testPlayers.length -1 );

});
