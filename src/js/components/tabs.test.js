import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Tabs from './tabs';
import Tab from './tab';

const sandbox = sinon.createSandbox();
const onTabChangeSpy = sandbox.spy();

describe('Options', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('should call', () => {
    const wrapper = shallow(
        <Tabs onTabChange={ onTabChangeSpy }>
            <Tab label="Tab A" />
            <Tab label="Tab B" />
        </Tabs>,
    );
    wrapper.find('TabList').at(1).prop('onClick')('Tab B');

    expect(wrapper.state().activeTab).to.equal('Tab B');
    expect(onTabChangeSpy).to.have.been.calledOnce();
  });
});
