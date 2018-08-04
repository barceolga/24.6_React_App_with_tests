import React from 'react';
import { shallow, mount } from 'enzyme';
import BonusPoints from './BonusPoints';

it('renders without crashing', () => {
  shallow(<BonusPoints/>)
})
it('renders with correct name', () => {
  const onMultiplyPoints = jest.fn();
  const BonusPointsComponent = mount(<BonusPoints onMultiplyPoints={onMultiplyPoints} />);

  const multiplierInput = BonusPointsComponent.find('input').first().getDOMNode();

  multiplierInput.value = '3';
  const form = BonusPointsComponent.find('form');
  form.simulate('submit');

  expect(onMultiplyPoints).toBeCalledWith('3');
})
