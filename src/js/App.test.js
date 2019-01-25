import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    expect(wrapper.find('Tabs')).to.have.lengthOf(1);
    expect(wrapper.find('Tab')).to.have.lengthOf(2);
    expect(wrapper.find('Warrents')).to.have.lengthOf(1);
    expect(wrapper.find('Options')).to.have.lengthOf(1);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('Tabs'))
      .to.have.prop('onTabChange')
      .to.be.a('function');
  });
});
