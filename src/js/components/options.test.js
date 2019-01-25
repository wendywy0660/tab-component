import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Options from './options';
import { optionDetails as optionsData } from '../../data/options.json';

describe('Options', () => {
  it('should not render table when data is empty array', () => {
    const wrapper = shallow(<Options data={ [] } />);
    expect(wrapper.find('table')).to.not.exist();
  });

  it('should render table and caption when data is passed', () => {
    const wrapper = shallow(<Options data={ optionsData } />);
    // console.log('<<<<fdsfsdf:', wrapper.debug());
    expect(wrapper.find('table')).to.exist();
    expect(wrapper.find('.caption')).to.have.text('Call Options');
  });
});
